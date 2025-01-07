---
title: Linux Bridgeで802.1xの通信を透過する
emoji: 🐧
date: 2024/01/15
---

IEEE802.1xで使用されるEAPOLをLinux Bridgeで透過する方法
## 結論
```
# 方法1
echo 8 > /sys/class/net/<bridge if名>/bridge/group_fwd_mask

# 方法2
ip link add name <bridge if名> type bridge group_fwd_mask 8

# 確認
cat /sys/class/net/<bridge if名>/bridge/group_fwd_mask
0x8
```
## なぜEAPOLは透過されないのかなどなど
 - EAPOLでは特殊なMACアドレスが使用されるため、SWが透過してはいけないフレームとして規定されている
 - そのMACアドレスには01:80:C2:00:00:03が使用される
 - なお、安価な部類のスイッチには、EAPOL透過機能を持ったものが数多く存在している
## ハマりそうな事例
 - LinuxのKVM上で802.1x認証をしたい(今回自分がハマった理由がまさにこれ)
