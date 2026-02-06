---
title: VyOS1.4でEtherIPを使う
emoji: 🐧
date: 2023/11/19
---
# VyOS1.4でEtherIPを使う

EtherIP(IPv4/IPv6)をVyOSで使う方法を紹介します。
## 環境
VyOS 1.4
## EtherIPとは
EtherIP(RFC3378)
## 使用するもの
https://github.com/symysak/etherip
(自分が作ったものです)

## 設定
VyOSのconfigで設定できないことを無理やりやっているので、結構お行儀が悪いです。自己責任で行ってください。
流れとしては、isoをビルドする環境でetheripをmakeしてから、それをVyOS側に移し、make installする形です。
### etheripをmakeする
__ここからVyOSのisoをビルドする環境で作業する!!__
```
git clone https://github.com/symysak/etherip
cd etherip/
make
cd ..
zip -r etherip-files etherip/
```
※参考 isoをビルドする環境は、dockerで割と簡単に用意できます。
https://docs.vyos.io/en/latest/contributing/build-vyos.html
### etheripのインストールと設定
__ここからVyOS側で作業する!!__

先ほどのetherip-files.zipをscpなどでVyOS側に移した後、下記コマンドを実行してください。
```
unzip etherip-files.zip
cd etherip
sudo make install
```
これで完了です。
実際にEtherIP (IPv6)を使ってみるところまでやってみます。
```
// /config/scripts/vyos-postconfig-bootup.script
sudo ip tuntap add dev tap0 mode tap
sudo ip link set tap0 up
sudo ip addr add <IPアドレス> dev tap0 //L2延伸的な使い方をする場合は無くてもよい
sudo etherip ipv6 dst <remote ip addr> src <local ip addr> tap tap0 &
```
configure内ではtap0は設定に使用できないので、先ほどの/config/scripts/vyos-postconfig-bootup.scriptに、tap0をbr0のメンバーに入れる設定等を書いて、configureではbr0として使用するといい感じになると思います。