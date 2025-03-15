---
title: VyOSにIPv6 Interface Identifierの設定を実装する
emoji: 🐧
date: 2025/03/15
---

## 下調べ
Interface Identifierは`ip token set ::ca:fe:00:02/64 dev eth0`で設定できる
```bash
echo 2 > /proc/sys/net/ipv6/conf/eth0/accept_ra
ip token set ::ca:fe:00:02/64 dev eth0
echo 1 > /proc/sys/net/ipv6/conf/eth0/autoconf
```

## VyOSの開発環境構築
全くわからない。絶対にもっと良い方法がある気がする。教えてください。

```
git clone https://github.com/vyos/vyos-1x

docker run --rm -it --privileged -v $(pwd):/vyos -w /vyos vyos/vyos-build:current bash

cd vyos-1x

# そして、コードを変更する（開発する）

# ビルド。これが長くて面倒くさい。もっと良い方法がある気がする。
dpkg-buildpackage -uc -us -tc -b

# 一つ上のディレクトリに.debファイルができるので、これをVyOSが入った機器に転送

# そして、VyOSが入った機器で以下を実行
dpkg --install <ファイル名>.deb
```

## 実際にPR出してみた
https://github.com/vyos/vyos-1x/pull/4392

進捗があれば追記する。