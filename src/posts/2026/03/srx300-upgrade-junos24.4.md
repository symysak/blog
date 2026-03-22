---
title: SRX300をJunos 24.4+にアップグレード
emoji: 🔨
date: 2026/03/22
---
# SRX300をJunos 24.4+にアップグレード
Junos 24.4+へのアップグレードには、以下のいずれかのバージョンを踏む必要がある。（詳細はリンク先参照）
- 23.4R2-S3 or later
- 24.2R2 or later

https://supportportal.juniper.net/s/article/Upgrading-the-srx3xx-branch-series-devices-to-Junos-24-4

つまり、LoaderからのインストールにはLoaderのバージョンがv3.15+である必要があるようだ。

ただ、上記のバージョンのJunosを持っていなかったので、以下の手順でJunos 25.4にアップグレードした。
## 現状確認
```shell
root> show system firmware       
Part             Type              Tag Current               Available             Status
                                       version               version
Routing Engine 0 RE BIOS           0   3.12                  3.12                  OK                
Routing Engine 0 RE BIOS Backup    1   3.12                  3.12                  OK                

root> 
```

## 1. u-bootとloaderのファイルを抽出
適当なPCで以下の作業をする
```shell
# junos-install-media-net-srxsme-mips-64-25.4R1-S1.4.tgzを展開

cp junos-install-media-net-srxsme-mips-64-25.4R1-S1.4/junos-install-srxsme-mips-64/contents/os-uboot-srxsme/contents/ubldr_crc.bin <USB stick>
cp junos-install-media-net-srxsme-mips-64-25.4R1-S1.4/junos-install-srxsme-mips-64/contents/os-uboot-srxsme/contents/uboot_siege_3.16.bin <USB stick>
``` 
## 2. u-bootとloaderをアップグレード
ここからはSRX300で作業
```shell
root@% umass1: ELECOM MF-MSU3B, rev 3.10/1.00, addr 2
da1 at umass-sim1 bus 1 target 0 lun 0
da1: <ELECOM MF-MSU3B PMAP> Removable Direct Access SCSI-6 device 
da1: 80.000MB/s transfers
da1: 15120MB (30965760 512 byte sectors: 255H 63S/T 1927C)
root@% mount_msdosfs /dev/da1s1 /var/tmp/usb/
root@% bootupgrade -u /var/tmp/usb/uboot_siege_3.16.bin -l /var/tmp/usb/ubldr_crc.bin
Upgrading Loader...
############################################################
Verifying the loader image... OK
Upgrading U-Boot...
###############################################################################################################################################################################################################################################################
Verifying the new U-Boot image... OK
WARNING: The new boot firmware will take effect when the system is rebooted.
root@% umount /var/tmp/usb/
root@% reboot
```
再起動後、Loaderのバージョンがv3.16になっている
```shell
root@% cli
root> show system firmware       
Part             Type              Tag Current               Available             Status
                                       version               version
Routing Engine 0 RE BIOS           0   3.16                  3.12                  OK                
Routing Engine 0 RE BIOS Backup    1   3.16                  3.12                  OK                

root> request system reboot
Reboot the system? [yes,no] (no) yes
```

## 3. Junos 25.4R1-S1.4をloaderからインストール
```shell
U-Boot 2013.07-JNPR-3.16 (Build time: Aug 29 2023 - 02:54:36)

Octeon unique ID: 0cc000218421f31e03d0
N0.LMC0 Configuration Completed: 4096 MB
SRX_300 board revision major:1, minor:15, serial #: XXXXXXXXX
OCTEON CN7020-AAP pass 1.2, Core clock: 1200 MHz, IO clock: 600 MHz, DDR clock: 667 MHz (1334 Mhz DDR)
DRAM: 4 GiB
Clearing DRAM...... done
SF: Detected SF with page size 256 Bytes, erase size 64 KiB, total 8 MiB


U-Boot 2013.07-JNPR-3.16 (Build time: Aug 29 2023 - 02:55:41)

Octeon unique ID: 0cc000218421f31e03d0
Using DRAM size from environment: 4096 MBytes
SRX_300 board revision major:1, minor:15, serial #: XXXXXXXXX
OCTEON CN7020-AAP pass 1.2, Core clock: 1200 MHz, IO clock: 600 MHz, DDR clock: 667 MHz (1334 Mhz DDR)
DRAM: 4 GiB
Clearing DRAM...... done
SF: Detected SF with page size 256 Bytes, erase size 64 KiB, total 8 MiB
SATA0: not available
SATA1: not available
PCIe: Port 0 link active, 1 lanes, speed gen2 
PCIe: Link timeout on port 1, probably the slot is empty
PCIe: Port 2 not in PCIe mode, skipping
Net:   octeth0
Node 0 Interface 0 has 1 ports (SGMII)
Boot Media: eUSB usb 
Found TPM SLB9660 TT 1.2 by Infineon
TPM initialized
USB1:   Starting the controller
USB XHCI 1.00
scanning bus 1 for devices... 2 USB Device(s) found
USB0:   Starting the controller
USB XHCI 1.00
scanning bus 0 for devices... 2 USB Device(s) found
       scanning usb for storage devices... 2 Storage Device(s) found
Type the command 'usb start' to scan for USB storage devices.

Press SPACE to stop autoboot:  0 
SF: Detected SF with page size 256 Bytes, erase size 64 KiB, total 8 MiB
SF: 1048512 bytes Read: OK
SF: 1048576 bytes Read: OK
## Starting application ...
disk0 is not GPT based. Type=a5
Trying to boot legacy OS...
SF: Detected SF with page size 256 Bytes, erase size 64 KiB, total 8 MiB
[0]#3 Booting from eUSB slice 2
Consoles: U-Boot console  
Compatible U-Boot API signature found @0xc0f50cf0

FreeBSD/mips U-Boot loader, Revision 2.0
(2025-12-10 01:18:20 builder@qnc-jre-fbsd04)

DRAM: 2048MB
disk0 is not GPT based. Type=a5
Trying to boot legacy OS...
[0]#3 Booting from eUSB slice 2
Number of U-Boot devices: 3
U-Boot env: loaderdev='disk0:2'
Found U-Boot device: disk
  Checking unit=0 slice=2 partition=<auto>... good.
Booting from disk0s2a:
Testing hash: sha1                              Passed
Testing hash: sha256                            Passed
Testing hash: sha384                            Passed
Testing verify certificate: EngineeringEcCA     Passed
Verified /boot/manifest signed by PackageProductionECP256_2024
Verified /boot/loader.rc
Verified /boot/loader.4th
Verified /boot/support.4th
Verified /boot/platform.4th
Loading /boot/defaults/loader.conf 
console comconsole is invalid!
no valid consoles!
Available consoles:
    uboot
Verified /boot/init.4th
/boot/init.4th loaded.
console comconsole is invalid!
no valid consoles!
Available consoles:
    uboot
can't find '/write/kernel'
Verified /manifest signed by PackageProductionECP256_2024
/kernel data=0x109ce9c+0x1e7a50 |
Verified /kernel


Hit [Enter] to boot immediately, or any other key for command prompt.


Type '?' for a list of commands, 'help' for more detailed help.
loader> install file:///junos-install-media-net-srxsme-mips-64-25.4R1-S1.4.tgz

省略
```

これで、非公式ながらアップグレードパスを踏まずにSRX300をJunos 24.4+にアップグレードできた。
