---
title: ubloxの各種レシーバの機能について
emoji: 📡
date: 2024/12/23
---

# ubloxの各種レシーバの機能について
本記事では、ubloxの各種レシーバについて、RTCM 3.xの入力機能、みちびきのCLASへの対応状況をまとめる。
ドキュメントを読んだ程度なので、実際の動作については不明である。

RTCM 3.xの入力に対応しているかは、ubloxのInterface descriptionを見て確認している。

https://content.u-blox.com/sites/default/files/documents/u-blox-F10-SPG-6.00_InterfaceDescription_UBX-23002975.pdf

https://content.u-blox.com/sites/default/files/u-blox-M10-SPG-5.10_InterfaceDescription_UBX-21035062.pdf

https://content.u-blox.com/sites/default/files/documents/u-blox-F9-HPG-L1L5-1.40_InterfaceDescription_UBX-23006991.pdf

https://content.u-blox.com/sites/default/files/u-blox-M9-SPG-4.04_InterfaceDescription_UBX-21022436.pdf

https://content.u-blox.com/sites/default/files/products/documents/u-blox8-M8_ReceiverDescrProtSpec_UBX-13003221.pdf


| レシーバ | RTCM 3.x入力 | みちびきのCLAS測位(L6バンド)対応状況 | みちびきL6バンド信号入力対応 | 
| ------- | ----------- | ------------------------------- | ------------------------ |
| F10 Series | × | × | × |
| M10 Series | × | × | × |
| F9 Series  | ○ | × | ○ |
| M9 Series  | ○ | × | × |
| NEO-D9C    | × | ○ | × |
| M8 Series  | ○ | × | × |
空欄は未調査

## 余談
### RTCM 3.x入力があると何が嬉しいか
RTCM 3.x入力があると、基準局からの補正信号をレシーバに入れるだけで、RTK測位が可能になる。つまり、RTKLIBなどを用いてPC等でRTK測位をする必要がなくなる。

これは、ESP32などのマイコンと一緒に使う形でRTK測位したい際に、非常に便利である。（ESP32側でRTK測位をするのは、そこそこの大きさのライブラリが1つ出来上がりそうである。）
### みちびきのCLAS測位(L6バンド)対応状況
上記の通り、現状ではNEO-D9Cのみが対応している。もう少し対応レシーバが増えるといいが、日本独自規格なので仕方がないであろう。なお、L6バンドでなければ、上記のある程度のレシーバが対応している。