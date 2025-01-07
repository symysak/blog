---
title: C言語でEtherIPのLinux実装を作ってみた
emoji: 🐧
date: 2023/10/21
---


## はじめに
https://github.com/symysak/etherip
EtherIPのLinux実装を作ってみました。IX3110とIX2207と通信できることを確認済みです。

## きっかけ
UNIVERGE IXシリーズとEtherIPトンネルを張りたい！ただそれだけです。
EtherIPは一部のネットワーク界隈でよく使用されているようですが、Linuxで動かせないので作ってみました。
Linuxで動かせないと書きましたが、一応有志によるカーネルモジュールや実装はあるようです。
https://github.com/kjmkznr/etherip
https://zenn.dev/kuredev/articles/5c2bc814acada0
ただ、前者は古いせいか自分の環境で動かせず、後者はコードが非公開になっていたので、自分で書いてみました。

## 動作確認済み環境
### VyOS 1.3 <-> IX2207
VyOS
```
vyos@vyos:~$ cat /etc/os-release 
PRETTY_NAME="VyOS 1.3.3 (equuleus)"
NAME="VyOS"
VERSION_ID="1.3.3"
VERSION="1.3.3 (equuleus)"
VERSION_CODENAME=buster
省略
```
IX2207
```
Router# show version 
NEC Portable Internetwork Core Operating System Software
IX Series IX2207 (magellan-sec) Software, Version 10.7.18, RELEASE SOFTWARE
Compiled Oct 25-Tue-2022 12:46:03 JST #2 by sw-build, coregen-10.7(18)
省略
```
VyOSのiso build環境でmakeしたファイルをVyOS 1.3の環境にコピーする形で動作確認しています。VyOS 1.3自体でmakeしようとすると色々と手を加えなければいけません。

## 使用方法
```
// インストール
git clone https://github.com/symysak/etherip
cd etherip
make
sudo make install

// 実際に動かす
sudo ip tuntap add mode tap dev <tapデバイス名>
sudo ip link set up dev <tapデバイス名>
sudo ip addr add <IP address> dev <tapデバイス名>　// L2延伸的な使い方であればなくてもよい
etherip ipv4 dst <dest ip addr> src <src ip addr> tap <tapデバイス名> &

// アンインストール
make remove
sudo ip tuntap del dev <tapデバイス名>
```
## 開発で躓いた点
### IPv4/IPv6アドレスを格納しておく構造体
最初は`sockaddr_in`や`sockaddr_in6`に格納したテータを`sockaddr`にキャストして持っていましたが、これだと良くないようです。
https://samba-technical.samba.narkive.com/ittSBPhp/arguments-to-sockaddr-equal-sockaddr-vs-sockaddr-storage

実際に、触っていない変数の値が勝手に変わってしまうなどの問題が起きてしまいました。
`sockaddr_in`や`sockaddr_in6`に格納したデータを`sockaddr_storage`にキャストして持っておき、sendto関数などに渡す際は`sockaddr`にキャストするのが良いようです。
### MTU関連
EtherIPでトンネリングするので、当然MTUは元のものより小さくなります。
最初、これを忘れていてtapインターフェースのMTUを1500のままにしていたため、送信の際にフラグメンテーションが起こってしまいました。
### EOIPとの混同
MikrotikのルータにはEOIPというトンネリングプロトコルがあるようです。EOIP = EtherIPと思っていましたが、どうやらプロトコル自体違うようです。（仕様が若干似ているように見受けられましたが、互換性はなさそうです）
## 最後に
VyOSとかに入れてお楽しみください。
また、バグ等はなるべく潰しましたが、3日くらいで作ったので改善すべき点があると思います。
その際はIssueやPRを建てて頂けるとありがたいです。

## 参考文献
https://jpn.nec.com/univerge/ix/faq/etherip.html
https://tex2e.github.io/rfc-translater/html/rfc3378.html