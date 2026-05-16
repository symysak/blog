---
title: Tuya 702JBU解析
emoji: "🔍"
date: 2026/03/14
---
# Tuya 702JBU解析

## UART
4つスルーホールがあるところ。
四角いパターンのピンから順に、TX, GND, RX, 3.3V

## boot log
```shell
U-Boot SPL 2013.07 (Mar 19 2020 - 11:55:08)
Timer init
CLK stop
PLL init
pll_init:399
pll_cfg.pdiv = 10, pll_cfg.h2div = 5, pll_cfg.h0div = 5, pll_cfg.cdiv = 1, pll_cfg.l2div = 2
fbdiv = 36 , refdiv = 1 , fdivq = 2 ,pllod = 1 range = 3
cppcr is 02300860
CPM_CPAPCR 0470484d
fbdiv = 38 , refdiv = 1 , fdivq = 2 ,pllod = 1 range = 3
cppcr is 02500860
CPM_CPMPCR 04a0484d
fbdiv = 50 , refdiv = 1 , fdivq = 2 ,pllod = 1 range = 3
cppcr is 03100860
CPM_CPVPCR 0310086d
cppcr 0x9a773310
apll_freq 864000000 
mpll_freq 900000000 
vpll_freq = 1200000000 
ddr sel mpll, cpu sel apll
ddrfreq 450000000
cclk  864000000
l2clk 432000000
h0clk 180000000
h2clk 180000000
pclk  90000000
CLK init
SDRAM init
sdram init start
ddr_inno_phy_init ..!
phy reg = 0x00000007, CL = 0x00000007
ddr_inno_phy_init ..! 11:  00000004
ddr_inno_phy_init ..! 22:  00000006
ddr_inno_phy_init ..! 33:  00000006
REG_DDR_LMR: 00000210
REG_DDR_LMR: 00000310
REG_DDR_LMR: 00000110
REG_DDR_LMR, MR0: 00d73011
T30_0x5: 00000007
T30_0x15: 0000000c
T30_0x4: 00000000
T30_0x14: 00000002
INNO_TRAINING_CTRL 1: 00000000
INNO_TRAINING_CTRL 2: 000000a1
T30_cc: 00000003
INNO_TRAINING_CTRL 3: 000000a0
T30_118: 0000003c
T30_158: 0000003c
T30_190: 0000001e
T30_194: 00000019
jz-04 :  0x00000051 
jz-08 :  0x000000a0 
jz-28 :  0x00000024 
DDR PHY init OK
INNO_DQ_WIDTH   :00000003
INNO_PLL_FBDIV  :00000014
INNO_PLL_PDIV   :00000005
INNO_MEM_CFG    :00000051
INNO_PLL_CTRL   :00000018
INNO_CHANNEL_EN :0000000d
INNO_CWL        :00000006
INNO_CL         :00000007
DDR Controller init
DDRC_STATUS         0x80000001
DDRC_CFG            0x0a688a40
DDRC_CTRL           0x0000891c
DDRC_LMR            0x00400008
DDRC_DLP            0x00000000
DDRC_TIMING1        0x040e0706
DDRC_TIMING2        0x02150607
DDRC_TIMING3        0x2006051b
DDRC_TIMING4        0x17240031
DDRC_TIMING5        0xff060405
DDRC_TIMING6        0x32150505
DDRC_REFCNT         0x00da5c01
DDRC_MMAP0          0x000020fc
DDRC_MMAP1          0x00002400
DDRC_REMAP1         0x03020100
DDRC_REMAP2         0x07060504
DDRC_REMAP3         0x0b0a0908
DDRC_REMAP4         0x0f0e0d0c
DDRC_REMAP5         0x13121110
DDRC_AUTOSR_EN      0x00000000
sdram init finished
SDRAM init ok
board_init_r
image entry point: 0x80100000


U-Boot 2013.07 (Mar 19 2020 - 11:55:08)

Board: ISVP (Ingenic XBurst T21 SoC)
DRAM:  64 MiB
Top of RAM usable for U-Boot at: 84000000
Reserving 440k for U-Boot at: 83f90000
Reserving 32784k for malloc() at: 81f8c000
Reserving 32 Bytes for Board Info at: 81f8bfe0
Reserving 124 Bytes for Global Data at: 81f8bf64
Reserving 128k for boot params() at: 81f6bf64
Stack Pointer at: 81f6bf48
Now running in RAM - U-Boot at: 83f90000
MMC:   msc: 0
the manufacturer 0b
SF: Detected XT25F128B

*** Warning - bad CRC, using default environment

In:    serial
Out:   serial
Err:   serial
Net:   cpm_mphyc_rst = 0x01000000 cpm_mphyc = 0x00000000
Jz4775-9161
the manufacturer 0b
SF: Detected XT25F128B

ReadFlashData ret=0 
**********Load rootfs mtd(2) from flash************ 
****Enter into Check Update:1 ****** 
Card did not respond to voltage select!
** Bad device mmc 0 **
Card did not respond to voltage select!
** Bad device mmc 0 **
### main_loop: bootcmd="sf probe;sf read 0x80600000 0x40000 0x1E0000; bootm 0x80600000"
Hit any key to stop autoboot:  0 
the manufacturer 0b
SF: Detected XT25F128B

--->probe spend 4 ms
SF: 1966080 bytes @ 0x40000 Read: OK
--->read spend 318 ms
## Booting kernel from Legacy Image at 80600000 ...
   Image Name:   Linux-3.10.14__isvp_turkey_1.0__
   Image Type:   MIPS Linux Kernel Image (lzma compressed)
   Data Size:    1543780 Bytes = 1.5 MiB
   Load Address: 80010000
   Entry Point:  803501e0
   Verifying Checksum ... OK
   Uncompressing Kernel Image ... OK
Get Env Data = console=ttyS1,115200n8 mem=43M@0x0 rmem=21M@0x2B00000 init=/linuxrc rootfstype=squashfs root=/dev/mtdblock3 rw mtdparts=jz_sfc:256k(boot),1920k(kernel),6720k(rootfs),6720k(rootfsBak),384k(sysCfg),320k(sysBak),64k(upgFlag),-(appfs) 

Starting kernel ...

[    0.000000] Initializing cgroup subsys cpu
[    0.000000] Initializing cgroup subsys cpuacct
[    0.000000] Linux version 3.10.14__isvp_turkey_1.0__ (YiYanhong@softSVN) (gcc version 4.7.2 (Ingenic r2.3.3 2016.12) ) #15 PREEMPT Mon Nov 18 19:08:29 CST 2019
[    0.000000] bootconsole [early0] enabled
[    0.000000] CPU0 RESET ERROR PC:92A5B01D
[    0.000000] CPU0 revision is: 00d00100 (Ingenic Xburst)
[    0.000000] FPU revision is: 00b70000
[    0.000000] CCLK:864MHz L2CLK:432Mhz H0CLK:225MHz H2CLK:225Mhz PCLK:112Mhz
[    0.000000] Determined physical RAM map:
[    0.000000]  memory: 00454000 @ 00010000 (usable)
[    0.000000]  memory: 0002c000 @ 00464000 (usable after init)
[    0.000000] User-defined physical RAM map:
[    0.000000]  memory: 02b00000 @ 00000000 (usable)
[    0.000000] Zone ranges:
[    0.000000]   Normal   [mem 0x00000000-0x02afffff]
[    0.000000] Movable zone start for each node
[    0.000000] Early memory node ranges
[    0.000000]   node   0: [mem 0x00000000-0x02afffff]
[    0.000000] Primary instruction cache 16kB, 8-way, VIPT, linesize 32 bytes.
[    0.000000] Primary data cache 16kB, 8-way, VIPT, no aliases, linesize 32 bytes
[    0.000000] pls check processor_id[0x00d00100],sc_jz not support!
[    0.000000] MIPS secondary cache 64kB, 8-way, linesize 32 bytes.
[    0.000000] Built 1 zonelists in Zone order, mobility grouping off.  Total pages: 10922
[    0.000000] Kernel command line: console=ttyS1,115200n8 mem=43M@0x0 rmem=21M@0x2B00000 init=/linuxrc rootfstype=squashfs root=/dev/mtdblock3 rw mtdparts=jz_sfc:256k(boot),1920k(kernel),6720k(rootfs),6720k(rootfsBak),384k(sysCfg),320k(sysBak),64k(upgFlag),-(appfs)
[    0.000000] PID hash table entries: 256 (order: -2, 1024 bytes)
[    0.000000] Dentry cache hash table entries: 8192 (order: 3, 32768 bytes)
[    0.000000] Inode-cache hash table entries: 4096 (order: 2, 16384 bytes)
[    0.000000] Memory: 38368k/44032k available (3363k kernel code, 5664k reserved, 1066k data, 176k init, 0k highmem)
[    0.000000] SLUB: HWalign=32, Order=0-3, MinObjects=0, CPUs=1, Nodes=1
[    0.000000] Preemptible hierarchical RCU implementation.
[    0.000000] NR_IRQS:422
[    0.000000] clockevents_config_and_register success.
[    0.000031] Calibrating delay loop... 858.52 BogoMIPS (lpj=4292608)
[    0.037692] pid_max: default: 32768 minimum: 301
[    0.042696] Mount-cache hash table entries: 512
[    0.047940] Initializing cgroup subsys debug
[    0.052205] Initializing cgroup subsys freezer
[    0.059876] regulator-dummy: no parameters
[    0.064186] NET: Registered protocol family 16
[    0.083320] bio: create slab <bio-0> at 0
[    0.090316] jz-dma jz-dma: JZ SoC DMA initialized
[    0.095532] usbcore: registered new interface driver usbfs
[    0.101087] usbcore: registered new interface driver hub
[    0.106630] usbcore: registered new device driver usb
[    0.111909]  (null): set:280  hold:281 dev=112500000 h=562 l=562
[    0.118154] media: Linux media interface: v0.10
[    0.122725] Linux video capture interface: v2.00
[    0.129593] Switching to clocksource jz_clocksource
[    0.135152] cfg80211: Calling CRDA to update world regulatory domain
[    0.141897] jz-dwc2 jz-dwc2: cgu clk gate get error
[    0.146844] jz-dwc2 jz-dwc2: regulator vbus get error
[    0.151904] DWC IN OTG MODE
[    0.304572] sft id =========================off
[    0.309196] dwc2 dwc2: Keep PHY ON
[    0.312568] dwc2 dwc2: Using Buffer DMA mode
[    0.515957] dwc2 dwc2: Core Release: 3.00a
[    0.520074] dwc2 dwc2: DesignWare USB2.0 High-Speed Host Controller
[    0.526464] dwc2 dwc2: new USB bus registered, assigned bus number 1
[    0.533838] hub 1-0:1.0: USB hub found
[    0.537683] hub 1-0:1.0: 1 port detected
[    0.541756] dwc2 dwc2: DWC2 Host Initialized
[    0.546352] NET: Registered protocol family 2
[    0.551415] TCP established hash table entries: 512 (order: 0, 4096 bytes)
[    0.558406] TCP bind hash table entries: 512 (order: -1, 2048 bytes)
[    0.564810] TCP: Hash tables configured (established 512 bind 512)
[    0.571115] TCP: reno registered
[    0.574322] UDP hash table entries: 256 (order: 0, 4096 bytes)
[    0.580304] UDP-Lite hash table entries: 256 (order: 0, 4096 bytes)
[    0.586951] NET: Registered protocol family 1
[    0.591752] freq_udelay_jiffys[0].max_num = 10
[    0.596243] cpufreq  udelay  loops_per_jiffy
[    0.600598] 12000     59619   59619
[    0.603864] 24000     119239  119239
[    0.607326] 60000     298097  298097
[    0.610752] 120000    596195  596195
[    0.614283] 200000    993659  993659
[    0.617832] 300000    1490488         1490488
[    0.621536] dwc2 dwc2: ID PIN CHANGED!
[    0.625379] init DWC as A_HOST
[    0.628442] 600000    2980977         2980977
[    0.632118] 792000    3934890         3934890
[    0.635985] 1008000   5008042         5008042
[    0.639711] 1200000   5961955         5961955
[    0.649834] squashfs: version 4.0 (2009/01/31) Phillip Lougher
[    0.656030] jffs2: version 2.2. � 2001-2006 Red Hat, Inc.
[    0.661994] msgmni has been set to 74
[    0.668388] io scheduler noop registered
[    0.672330] io scheduler cfq registered (default)
[    0.679408] jz-uart.1: ttyS1 at MMIO 0x10031000 (irq = 58) is a uart1
[    0.687711] console [ttyS1] enabled, bootconsole disabled
[    0.687711] console [ttyS1] enabled, bootconsole disabled
[    0.704268] brd: module loaded
[    0.710467] loop: module loaded
[    0.714697] zram: Created 2 device(s) ...
[    0.718973] logger: created 256K log 'log_main'
[    0.724465] jz SADC driver registeres over!
[    0.730785] jz TCU driver register completed
[    0.736083] the id code = b4018, the flash name is GD25LQ128C
[    0.742029] #####unsupport ID is b4018 if the id not be 0x00,the flash can be ok,but the quad mode may be not support!!!!! 
[    0.952855] JZ SFC Controller for SFC channel 0 driver register
[    0.959022] mtd: jz_sfc: skipping zero sized partition
[    0.964337] 7 cmdlinepart partitions found on MTD device jz_sfc
[    0.970508] Creating 7 MTD partitions on "jz_sfc":
[    0.975520] 0x000000000000-0x000000040000 : "boot"
[    0.981252] 0x000000040000-0x000000220000 : "kernel"
[    0.987144] 0x000000220000-0x0000008b0000 : "rootfs"
[    0.992975] 0x0000008b0000-0x000000f40000 : "rootfsBak"
[    0.999182] 0x000000f40000-0x000000fa0000 : "sysCfg"
[    1.005133] 0x000000fa0000-0x000000ff0000 : "sysBak"
[    1.010983] 0x000000ff0000-0x000001000000 : "upgFlag"
[    1.016992] SPI NOR MTD LOAD OK
[    1.020331] tun: Universal TUN/TAP device driver, 1.6
[    1.025672] tun: (C) 1999-2004 Max Krasnyansky <maxk@qualcomm.com>
[    1.032233] Bus Mode Reg after reset: 0x00020101, cnt=0
[    1.055918] libphy: jz_mii_bus: probed
[    1.059902] =======>gmacdev = 0x821e4e00<================
[    1.065602] =========>gmacdev->MacBase = 0xb34b0000 DmaBase = 0xb34b1000
[    1.072534] Bus Mode Reg after reset: 0x00020101, cnt=0
[    1.080167] jz_mac jz_mac.0: JZ on-chip Ethernet MAC driver, Version 1.0
[    1.087243] usb 1-1: new high-speed USB device number 2 using dwc2
[    1.093931] usbcore: registered new interface driver zd1201
[    1.099933] i2c /dev entries driver
[    1.104323] TCP: cubic registered
[    1.107827] NET: Registered protocol family 17
[    1.112948] soc_vpu probe success,version:1.0.0-03203fd46d
[    1.119121] input: gpio-keys as /devices/platform/gpio-keys/input/input0
[    1.126605] drivers/rtc/hctosys.c: unable to open rtc device (rtc0)
[    1.138396] VFS: Mounted root (squashfs filesystem) readonly on device 31:3.
[    1.146227] Freeing unused kernel memory: 176K (80464000 - 80490000)
mdev is ok......

   Press q -> ENTER to exit boot procedure? 
----enter to upgrade from sdcard----
[    4.260128] jzmmc_v1.2 jzmmc_v1.2.0: vmmc regulator missing
[    4.304574] jzmmc_v1.2 jzmmc_v1.2.0: register success!
mount: mounting /dev/mmcblk0p1 on /var/sdcard failed: No such file or directory
    syscfg.ini not exist.
mkdir: can't create directory '/var/syscfg': File exists
mkdir: can't create directory '/var/sysbak': File exists
    uboot.bin not exist.
    kernel.bin not exist.
    rootfs.bin not exist.
    rootfsBak.bin not exist.
----leaved to upgrade from sdcard----
umount: can't umount /var/sdcard: Invalid argument
rmmod mmcv12 and mmcblock and mmccore
jzmmc_v12 16828 0 - Live 0xc00dd000
mmc_core 99776 1 jzmmc_v12, Live 0xc009b000

Ingenic-uc1_1 login: =========================================================================
  RootFS Version: 
  MTD Version: 
=========================================================================
[    7.842966] 
[    7.842966]  peripher dev  success
[    8.076309] jz_codec_register: probe() successful!
[    8.444978] dma dma0chan24: Channel 24 have been requested.(phy id 7,type 0x06 desc a18cf000)
[    8.454266] dma dma0chan25: Channel 25 have been requested.(phy id 6,type 0x06 desc a18ce000)
[    8.463683] dma dma0chan26: Channel 26 have been requested.(phy id 5,type 0x04 desc a18cc000)
[    9.179421] RTW: module init start
[    9.182950] RTW: rtl8188fu v5.3.0.1_28034.20180525
[    9.190973] RTW: build time: Jun 13 2020 13:39:26
[    9.195999] RTW: rtw_inetaddr_notifier_register
[    9.200752] RTW: 
[    9.200752] usb_endpoint_descriptor(0):
[    9.206791] RTW: bLength=7
[    9.209590] RTW: bDescriptorType=5
[    9.213101] RTW: bEndpointAddress=81
[    9.216857] RTW: wMaxPacketSize=512
[    9.220463] RTW: bInterval=0
[    9.223436] RTW: RT_usb_endpoint_is_bulk_in = 1
[    9.228150] RTW: 
[    9.228150] usb_endpoint_descriptor(1):
[    9.234091] RTW: bLength=7
[    9.236943] RTW: bDescriptorType=5
[    9.240459] RTW: bEndpointAddress=2
[    9.244059] RTW: wMaxPacketSize=512
[    9.247708] RTW: bInterval=0
[    9.250685] RTW: RT_usb_endpoint_is_bulk_out = 2
[    9.255481] RTW: 
[    9.255481] usb_endpoint_descriptor(2):
[    9.261422] RTW: bLength=7
[    9.264215] RTW: bDescriptorType=5
[    9.267746] RTW: bEndpointAddress=3
[    9.271348] RTW: wMaxPacketSize=512
[    9.274968] RTW: bInterval=0
[    9.277942] RTW: RT_usb_endpoint_is_bulk_out = 3
[    9.282712] RTW: nr_endpoint=3, in_num=1, out_num=2
[    9.282712] 
[    9.289297] RTW: USB_SPEED_HIGH
[    9.292555] RTW: CHIP TYPE: RTL8188FU
[    9.296675] RTW: rtw_hal_config_rftype RF_Type is 0 TotalTxPath is 1
[    9.303262] RTW: Chip Version Info: CHIP_8188F_Normal_Chip_SMIC_B_CUT_1T1R_RomVer(0)
[    9.311327] RTW: _ConfigChipOutEP_8188F OutEpQueueSel(0x05), OutEpNumber(2)
[    9.318623] RTW: EEPROM type is E-FUSE
[    9.322690] RTW: Boot from EFUSE, Autoload OK !
[    9.327621] RTW: hal_EfuseSwitchToBank: Efuse switch bank to 0
[    9.399237] RTW: hal_ReadEFuse_WiFi: data end at address=0x74
[    9.405344] RTW: HW EFUSE
[    9.408061] RTW: 0x000: 29 81 00 FC  0B 00 00 00  00 0C 04 4C  10 07 00 00  
[    9.415452] RTW: 0x010: 26 26 26 26  26 26 2B 2B  2B 2B 2B 03  FF FF FF FF  
[    9.422807] RTW: 0x020: FF FF FF FF  FF FF FF FF  FF FF FF FF  FF FF FF FF  
[    9.430186] RTW: 0x030: FF FF FF FF  FF FF FF FF  FF FF FF FF  FF FF FF FF  
[    9.437561] RTW: 0x040: FF FF FF FF  FF FF FF FF  FF FF FF FF  FF FF FF FF  
[    9.444935] RTW: 0x050: FF FF FF FF  FF FF FF FF  FF FF FF FF  FF FF FF FF  
[    9.452289] RTW: 0x060: FF FF FF FF  FF FF FF FF  FF FF FF FF  FF FF FF FF  
[    9.459663] RTW: 0x070: FF FF FF FF  FF FF FF FF  FF FF FF FF  FF FF FF FF  
[    9.467038] RTW: 0x080: FF FF FF FF  FF FF FF FF  FF FF FF FF  FF FF FF FF  
[    9.474392] RTW: 0x090: FF FF FF FF  FF FF FF FF  FF FF FF FF  FF FF FF FF  
[    9.481765] RTW: 0x0A0: FF FF FF FF  FF FF FF FF  FF FF FF FF  FF FF FF FF  
[    9.489141] RTW: 0x0B0: FF FF FF FF  FF FF FF FF  20 28 1A 00  00 00 00 FF  
[    9.496515] RTW: 0x0C0: FF 12 00 10  00 FF 00 FF  00 00 FF FF  FF FF FF FF  
[    9.503869] RTW: 0x0D0: DA 0B 79 F1  42 66 40 68  B9 D3 23 E5  67 09 03 52  
[    9.511243] RTW: 0x0E0: 65 61 6C 74  65 6B 09 03  38 30 32 2E  31 31 6E 00  
[    9.518617] RTW: 0x0F0: FF FF FF FF  FF FF FF FF  FF FF FF FF  FF FF FF FF  
[    9.525991] RTW: 0x100: FF FF FF FF  FF FF FF FF  FF FF FF FF  FF FF FF FF  
[    9.533345] RTW: 0x110: FF FF FF FF  FF FF FF FF  FF FF FF FF  FF FF FF FF  
[    9.540719] RTW: 0x120: FF FF FF FF  FF FF FF FF  FF FF FF FF  FF FF FF FF  
[    9.548100] RTW: 0x130: C1 B6 FF FF  FF FF FF FF  FF FF 00 11  FF FF FF FF  
[    9.555476] RTW: 0x140: FF FF FF FF  FF FF FF FF  FF FF FF FF  FF FF FF FF  
[    9.562830] RTW: 0x150: FF FF FF FF  FF FF FF FF  FF FF FF FF  FF FF FF FF  
[    9.570206] RTW: 0x160: FF FF FF FF  FF FF FF FF  FF FF FF FF  FF FF FF FF  
[    9.577581] RTW: 0x170: FF FF FF FF  FF FF FF FF  FF FF FF FF  FF FF FF FF  
[    9.585007] RTW: 0x180: FF FF FF FF  FF FF FF FF  FF FF FF FF  FF FF FF FF  
[    9.592366] RTW: 0x190: FF FF FF FF  FF FF FF FF  FF FF FF FF  FF FF FF FF  
[    9.599757] RTW: 0x1A0: FF FF FF FF  FF FF FF FF  FF FF FF FF  FF FF FF FF  
[    9.607135] RTW: 0x1B0: FF FF FF FF  FF FF FF FF  FF FF FF FF  FF FF FF FF  
[    9.614509] RTW: 0x1C0: FF FF FF FF  FF FF FF FF  FF FF FF FF  FF FF FF FF  
[    9.621865] RTW: 0x1D0: FF FF FF FF  FF FF FF FF  FF FF FF FF  FF FF FF FF  
[    9.629246] RTW: 0x1E0: FF FF FF FF  FF FF FF FF  FF FF FF FF  FF FF FF FF  
[    9.636624] RTW: 0x1F0: FF FF FF FF  FF FF FF FF  FF FF FF FF  FF FF FF FF  
[    9.643988] RTW: EEPROM VID = 0x bda
[    9.647704] RTW: EEPROM PID = 0xf179
[    9.651418] RTW: hal_com_config_channel_plan chplan:0x20
[    9.656942] RTW: Hal_EfuseParsePowerSavingMode_8188F...bHWPwrPindetect(0)-bHWPowerdown(0) ,bSupportRemoteWakeup(1)
[    9.667662] RTW: ### PS params=>  power_mgnt(2),usbss_enable(0) ###
[    9.675352] RTW: kfree Pwr Trim flag:1
[    9.679232] RTW: bb_gain:0
[    9.684288] RTW: rtl8188f_FirmwareDownload fw: FW_NIC, size: 20288
[    9.690724] RTW: rtl8188f_FirmwareDownload: fw_ver=d fw_subver=0000 sig=0x88f1, Month=02, Date=06, Hour=16, Minute=59
[    9.701712] RTW: rtl8188f_FirmwareDownload(): Shift for fw header!
[    9.708117] RTW: rtl8188f_FirmwareDownload by IO write!
[    9.733607] RTW: polling_fwdl_chksum: Checksum report OK! (1, 0ms), REG_MCUFWDL:0x00040105
[    9.743011] RTW: _8051Reset8188: Finish
[    9.756483] RTW: _FWFreeToGo: Polling FW ready OK! (139, 20ms), REG_MCUFWDL:0x000401c6
[    9.764704] RTW: rtl8188f_FirmwareDownload: DLFW OK !
[    9.769927] RTW: rtl8188f_FirmwareDownload success. write_fw:1, 60ms
[    9.776582] RTW:  <=== rtl8188f_FirmwareDownload()
[    9.782495] RTW: CardDisableRTL8188FU
[    9.788469] RTW: hal_read_mac_hidden_rpt OK! (1, 10ms), fwdl:1, id:0x19
[    9.795354] RTW: InitAdapterVariablesByPROM_8188FU(): REPLACEMENT = 0
[    9.802013] RTW: rtw_hal_read_chip_info in 480 ms
[    9.806953] RTW: init_channel_set((null)) ChannelPlan ID:0x20, ch num:13
[    9.815296] RTW: NR_RECVBUFF: 8
[    9.818556] RTW: MAX_RECVBUF_SZ: 32768
[    9.822438] RTW: NR_PREALLOC_RECV_SKB: 8
[    9.827132] RTW: rtw_alloc_macid((null)) if1, mac_addr:ff:ff:ff:ff:ff:ff macid:1
[    9.835038] RTW: IQK FW offload:disable
[    9.839018] RTW: Init_ODM_ComInfo_8188f(): fab_ver=0 cut_ver=12
[    9.845204] RTW: rtw_regsty_chk_target_tx_power_valid return _FALSE for band:0, path:0, rs:0, t:-1
[    9.854671] RTW: phy_ConfigBBWithPgParaFile(): No File PHY_REG_PG.txt, Load from HWImg Array!
[    9.863506] RTW: default power by rate loaded
[    9.868236] RTW: rtw_macaddr_cfg mac addr:68:b9:d3:23:e5:67
[    9.874001] RTW: bDriverStopped:True, bSurpriseRemoved:False, bup:0, hw_init_completed:0
[    9.883858] RTW: NR_RECVBUFF: 8
[    9.887269] RTW: MAX_RECVBUF_SZ: 32768
[    9.891182] RTW: NR_PREALLOC_RECV_SKB: 8
[    9.895798] RTW: rtw_alloc_macid((null)) if2, mac_addr:ff:ff:ff:ff:ff:ff macid:1
[    9.903484] RTW: rtw_drv_add_vir_if if2 mac_addr : 6a:b9:d3:23:e5:67
[    9.910210] RTW: rtw_wiphy_alloc(phy0)
[    9.914092] RTW: rtw_wdev_alloc(padapter=c06b8000)
[    9.919134] RTW: rtw_wiphy_alloc(phy1)
[    9.923014] RTW: rtw_wdev_alloc(padapter=c072a000)
[    9.928007] RTW: rtw_wiphy_register(phy0)
[    9.932754] RTW: rtw_ndev_init(ra0) if1 mac_addr=68:b9:d3:23:e5:67
[    9.942887] RTW: rtw_ndev_notifier_call(ra0) state:16
[    9.963013] RTW: rtw_ndev_notifier_call(ra0) state:5
[    9.971434] RTW: rtw_wiphy_register(phy1)
[    9.976382] RTW: rtw_ndev_init(ra1) if2 mac_addr=6a:b9:d3:23:e5:67
[    9.983311] RTW: rtw_ndev_notifier_call(ra1) state:16
[   10.006697] RTW: rtw_ndev_notifier_call(ra1) state:5
[   10.015698] usbcore: registered new interface driver rtl8188fu
[   10.021737] RTW: module init ret=0
ip: SIOCSIFNAME: No such device
[   10.067517] 
[   10.067517]  20170721 15:58 GM8135S/GM8136S Init Reset Key Driver Success
[   10.124250] 
[   10.124250]  NetLED for rts390xN dev  success
insmod: can't read '/mnt/mtd/module/eeprom_drv.ko': No such file or directory
Successfully initialized wpa_supplicant
rfkill: Cannot open RFKILL control device[   10.708775] RTW: rtw_ndev_notifier_call(ra0) state:13

[   10.717393] RTW: _netdev_open(ra0) , bup=0
[   10.723781] RTW:  power-on :REG_SYS_CLKR 0x09=0xfc. REG_CR 0x100=0x3f.
[   10.730605] RTW:  MAC has already power on.
[   10.735610] RTW: rtl8188f_FirmwareDownload fw: FW_NIC, size: 20288
[   10.742011] RTW: rtl8188f_FirmwareDownload: fw_ver=d fw_subver=0000 sig=0x88f1, Month=02, Date=06, Hour=16, Minute=59
[   10.753053] RTW: rtl8188f_FirmwareDownload(): Shift for fw header!
[   10.759493] RTW: rtl8188f_FirmwareDownload by IO write!
[   10.785188] RTW: polling_fwdl_chksum: Checksum report OK! (1, 0ms), REG_MCUFWDL:0x00040105
[   10.794447] RTW: _8051Reset8188: Finish
[   10.807973] RTW: _FWFreeToGo: Polling FW ready OK! (143, 20ms), REG_MCUFWDL:0x000401c6
[   10.816195] RTW: rtl8188f_FirmwareDownload: DLFW OK !
[   10.821417] RTW: rtl8188f_FirmwareDownload success. write_fw:1, 60ms
[   10.828075] RTW:  <=== rtl8188f_FirmwareDownload()
[   10.833029] RTW: fw download ok!
[   10.844138] RTW: PHY_MACConfig8188F OK!
[   10.866297] RTW: PHY_BBConfig8188F OK!
[   11.114913] RTW: PHY_RFConfig8188F OK!
[   11.122830] RTW: usb_AggSettingRxUpdate: RX Aggregation USB mode, size=20KB, timeout=1024us
[   11.394393] RTW: rtl8188fu_hal_init in 670ms
[   11.398861] RTW: rtw_hal_set_macaddr_port ra0- hw port(0) mac_addr =68:b9:d3:23:e5:67
[   11.407402] RTW: rtw_hal_set_macaddr_port ra1- hw port(1) mac_addr =6a:b9:d3:23:e5:67
[   11.416325] RTW: rtw_hal_get_macaddr_port ra0- hw port(0) mac_addr =68:b9:d3:23:e5:67
[   11.424430] RTW: ra0- hw port(0) mac_addr =68:b9:d3:23:e5:67
[   11.430718] RTW: rtw_hal_get_macaddr_port ra1- hw port(1) mac_addr =6a:b9:d3:23:e5:67
[   11.438854] RTW: ra1- hw port(1) mac_addr =6a:b9:d3:23:e5:67
[   11.444942] RTW: [HW_VAR_ENABLE_RX_BAR] 0x6A2=0x500
[   11.455005] RTW: rtw_rf_get_kfree_tx_gain_offset path:0, ch:6, bb_gain_sel:0, kfree_offset:0
[   11.464311] RTW: kfree gain_offset 0x55:0x82060 RTW:  after :0x2060
[   11.472003] RTW: MAC Address = 68:b9:d3:23:e5:67
[   11.476811] RTW: rtw_start_drv_threads(ra0) start RTW_CMD_THREAD
[   11.483384] RTW: rtw_cfg80211_init_wiphy:rf_type=0
[   11.488427] RTW: [HT] HAL Support STBC = 0x01
[   11.492948] RTW: _netdev_vir_if_open(ra1) , bup=0
[   11.497844] RTW: rtw_cfg80211_init_wiphy:rf_type=0
[   11.502797] RTW: [HT] HAL Support STBC = 0x01
[   11.507325] RTW: _netdev_vir_if_open(ra1) (bup=1) exit
[   11.512635] RTW: -871x_drv - drv_open, bup=1
[   11.517149] RTW: cfg80211_rtw_set_power_mgmt(ra0) enabled:1, timeout:-1
[   11.524008] RTW: rtw_ndev_notifier_call(ra0) state:1
nl80211: Could not re-add multicast membership for vendor events: -2 (No such file or directory)
[   11.579183] RTW: cfg80211_rtw_flush_pmksa(ra0)
[   11.593066] Bus Mode Reg after reset: 0x00020101, cnt=0
insmod: can't insert '/lib/modules/mmc_core.ko': File exists
insmod: can't insert '/lib/modules/jzmmc_v12.ko': File exists
mount: mounting /dev/mmcblk0p1 on /mnt/mmc failed: No such file or directory
[   11.684757] RTW: cfg80211_rtw_scan(ra0)
[   11.689260] RTW: [HW_VAR_CHECK_TXBUF] no packet in tx packet buffer (0)
[   11.699088] RTW: ra0 sleep m0=0x00000002, ori reg_0x4d4=0x00000000
[3.0|hySyscfg.c|hySysCfgInit,3210] ***********core sdk version [V3.0.0.2-20200301]************
Get Ajy Url = https://sdc-inl.ajcloud.net:8443/api/v1/cmd/register 
[3.0|hySyscfg.c|IniGetPtz485BaudRate,3065]  BaudRate /var/syscfg/485baudrate.ini not exist, set default(9600)
[3.0|hySyscfg.c|IniGetPtz485BaudRate,3067]  [9600] 
open eeprom error!
open eeprom error!
Not Insert Sd Card 
00:00:12 [tuyaApp.c tuyaAppStart:1077] E> -------------------------------------
00:00:12 [tuyaApp.c tuyaAppStart:1086] E> ----Initialization---- 0:PTZ
00:00:12 [tuyaApp.c tuyaAppStart:1089] E> Ptz not support
00:00:12 [tuyaApp.c tuyaAppStart:1103] E> ----Initialization---- 1:hardware
[3.0|coreHardware.c|coreHwInit,855] 
snLedOppositeState = 0 
[3.0|coreHardware.c|coreHwInit,873] night vision type:1(01000110100/1)
[3.0|coreHardware.c|coreHwNightVisionCtrlSet,940] ======================================
[3.0|coreHardware.c|StartHWControlThread,439] 
[3.0|coreHardware.c|StartHWControlThread,443] 
[3.0|gpioAdc_GM.c|getAdcValue_JZ,35] jzAdcInitFlg=0 
[3.0|gpioAdc_GM.c|getAdcValue_JZ,38] jzAdcInitFlg=0 
[   13.305011] RTW: ra0 wakeup m0=0x00000002, ori reg_0x4d4=0x00000002
[   13.311652] RTW: survey done event(2e) band:0 for ra0
[   13.317100] RTW: rtw_indicate_scan_done(ra0)
00:00:13 [tuyaApp.c tuyaAppStart:1108] E> ----Initialization---- 2:network
[3.0|coreNet.c|coreNetInit,1580] 
[3.0|coreNet.c|NetCallSystem,86] 000 NetCallSystem ifconfig eth0 down;sleep 1;ifconfig eth0 hw ether 78:A5:DD:40:83:77;ifconfig eth0 up;echo 78:A5:DD:40:83:77 > /var/ethmacaddress;ifconfig eth0 0.0.0.0 errno = 2,nLoop = 0 
[   14.923842] Bus Mode Reg after reset: 0x00020101, cnt=0
[3.0|coreNet.c|NetCallSystem,116] 001 NetCallSystem ifconfig eth0 down;sleep 1;ifconfig eth0 hw ether 78:A5:DD:40:83:77;ifconfig eth0 up;echo 78:A5:DD:40:83:77 > /var/ethmacaddress;ifconfig eth0 0.0.0.0 errno = 2,nLoop = 2 
[3.0|halWifiHandle.c|hWIFI_GetWpaSupplicantConf,409] ssid= pwd= security=0
Not Found SD card WiFi Conf File
[3.0|halWifiHandle.c|hWIFI_CheckWifiStatus,664] nWifiStatusFlag:[1]
OK
[   16.155221] RTW: cfg80211_rtw_scan(ra0)
[   16.159675] RTW: [HW_VAR_CHECK_TXBUF] no packet in tx packet buffer (0)
[   16.174327] RTW: ra0 sleep m0=0x00000002, ori reg_0x4d4=0x00000000
OK
[3.0|coreNet.c|checkPhy_ap0,289] checkPhy_ap0 =0
[3.0|coreNet.c|coreNetInit,1592] checkPhy_ap0(.), g_bHasAp0=0
[3.0|coreNet.c|startNetManagerThread,1486] Start Net manager :0 
00:00:16 [tuyaApp.c tuyaAppStart:1112] E> ----Initialization---- 3:audio and video
[3.0|coreAvStream.c|coreAvInit,61] 
[3.0|video.c|videoParamSet,53] eVideoIndex: 0
[3.0|video.c|videoParamSet,54] eEncType: 3
[3.0|video.c|videoParamSet,55] eBrMode: 4
[3.0|video.c|videoParamSet,56] nWidth: 1920
[3.0|video.c|videoParamSet,57] nHeight: 1080
[3.0|video.c|videoParamSet,58] nFps: 15
[3.0|video.c|videoParamSet,59] nGop: 30
[3.0|video.c|videoParamSet,60] nKBps: 1024
[3.0|video.c|videoParamSet,61] bWithAudio: 1
[3.0|video.c|videoParamSet,62] bAutoChangeVideoParamByP2p: 0
[3.0|video.c|videoParamSet,53] eVideoIndex: 1
[3.0|video.c|videoParamSet,54] eEncType: 3
[3.0|video.c|videoParamSet,55] eBrMode: 4
[3.0|video.c|videoParamSet,56] nWidth: 768
[3.0|video.c|videoParamSet,57] nHeight: 432
[3.0|video.c|videoParamSet,58] nFps: 15
[3.0|video.c|videoParamSet,59] nGop: 30
[3.0|video.c|videoParamSet,60] nKBps: 425
[3.0|video.c|videoParamSet,61] bWithAudio: 1
[3.0|video.c|videoParamSet,62] bAutoChangeVideoParamByP2p: 0
[3.0|video.c|sample_sensor_init,1534] 
[3.0|coreNet.c|netManagerThread,1287] Create NetManager Thread :1971877104 
00:00:16 [tuyaApp.c netCallBack:429] E> eFunNetLinkageType=6
call sample_system_init 
read sensortype 
chTypeString type = sensor:os02b10
 
sensor type = ***os02b10
*** 
Sensor Name = ***os02b10*** 
Get Sensor Ty[   16.313232] set sensor gpio as PA-low-10bit
pe = 0 
002 sample_system_init 
003 sample_system_init 
004 sample_system_init 
005 sample_system_init 
006 sample_system_init :Index:0,Widht,Heighit(1920x1080)
007 sample_system_init 
[3.0|sample-common.c|sample_system_init,375] ret = 0
[   16.385362] ov2735 chip found @ 0x3c (i2c0)
[3.0|sample-common.c|sample_system_init,382] ret = 0
[3.0|sample-common.c|sample_system_init,389] ret = 0
[3.0|sample-common.c|sample_system_init,396] ret = 0
[3.0|sample-common.c|sample_system_init,404] ret = 0
[3.0|sample-common.c|sample_system_init,410] ret = 0
[3.0|sample-common.c|sample_system_init,412] ret = 0
[3.0|sample-common.c|sample_system_init,414] ret = 0
[3.0|sample-common.c|sample_system_init,416] ret = 0
[3.0|sample-common.c|sample_system_init,419] ret = 0
[3.0|sample-common.c|sample_system_init,425] ret = 0
[3.0|sample-common.c|sample_system_init,429] ret = 0
[3.0|coreAvStream.c|coreAvInit,78] gs_bSensorInited=1
[3.0|hySyscfg.c|hySysCfgSaveFile,3137] hySysCfgSaveFile, added mutex by juju 
00:00:16 [tuyaApp.c tuyaAppStart:1122] E> ----Initialization---- 4:audio stream
001 audio_aec_start_Thread printf aigain value = 12 
002 audio_aec_start_Thread printf g_AiDevID = 1 
[3.0|coreHardware.c|ircutPolling,303] eRetDayNight = 0

[3.0|halGpioHandle.c|hGPIO_ControlIrcut,251] Call IRCut Close 
[   17.044565] codec_set_device: set device: MIC...
Input nMode =0 [0:Close 2:Auto Other:Error]
00:00:17 [tuyaApp.c hwLinkageCallBack:273] E> eFunHwLinkageType=4
HW_SET_IMAGE_DAY
AJY_IPC, audio_aec_init] chnVol=60 aigain=12
IMP_AI_EnableHpf  
Enable NS 
[3.0|coreAvStream.c|coreAudioStreamStart,378] g_hAEncodeThread : 1915585776
00:00:17 [tuyaApp.c tuyaAppStart:1125] E> ----Initialization---- 5:audio play
[3.0|coreAvStream.c|coreAudioPlayInit,480] 
[3.0|audio.c|audio_play_init,784] 
[3.0|libcfAvshm.cpp|WriteAVFrame,272] WriteAVFrame Not Init 
00:00:17 [tuyaApp.c AudioStreamCallbackFun:634] E> Write Audio Frame Failed:-22 
Call Sem Set 
[3.0|SemOper.cpp|SemInit,88] SemInit :0,100 
[3.0|libcfAvshm.cpp|InitAvShm,160] 001 Shm Info:102400,1,0 
[3.0|libcfAvshm.cpp|InitAvShm,238] 001.1 Shm Info:0,0,0,102400 
[3.0|libcfAvshm.cpp|InitAvShm,246] 002 Shm Info:102400,102368,0,102400,0,0,0,0 
[   17.554523] codec_set_device: set device: speaker...
[3.0|audio.c|StartBeepThread,1256] 
00:00:17 [tuyaApp.c _getWifiIsConfiged:234] E> wifi config flag is not exist
[3.0|audio.c|AudioBeepThread,1196] 
[   17.754000] RTW: ra0 wakeup m0=0x00000002, ori reg_0x4d4=0x00000002
[   17.774722] RTW: survey done event(33) band:0 for ra0
[   17.780140] RTW: rtw_indicate_scan_done(ra0)
Dbg:SDK Version:<TUYA IPC SDK V:4.8.4 >
< TUYA IOT SDK V:4.1.1 BS:30.01_PT:2.2_LAN:3.3_CAD:1.0.1_CD:1.0.0 >
IPC DEFS < ENABLE_ECHO_SHOW:0 ENABLE_CHROMECAST:0 ENABLE_CLOUD_STORAGE:1 >'
< BUILD AT:2020_07_22_12_19_04 BY chenjing FOR linux_wifi_wired AT mips-linux-uclibc-4.7.2_64Bit >


Dbg:init_mode:1

TUYAUID{pftcuvcum7mqidfi}
{tuyaed71c579eb242fe2}
{TMREh3EzAcLgsdISziQIEfzVdEl36awQ}
Dbg:Init Value.storage_path /var/syscfg/
Dbg:Init Value.upgrade_file_path /var/tuyaUpgrade.pkg
Dbg:Init Value.sd_base_path /mnt/mmc/
Dbg:Init Value.product_key pftcuvcum7mqidfi
Dbg:Init Value.uuid tuyaed71c579eb242fe2
Dbg:Init Value.auth_key TMREh3EzAcLgsdISziQIEfzVdEl36awQ
Dbg:Init Value.p2p_id 
Dbg:Init Value.dev_sw_version 20.01.22
Dbg:Init Value.max_p2p_user 5
Dbg:Init Value.init_mode 1
Dbg:channel_enable:1 1 0
Dbg:fps:15
Dbg:gop:30
Dbg:bitrate:1024 kbps
Dbg:video_main_width:1920
Dbg:video_main_height:1080
Dbg:video_freq:90000
Dbg:video_codec:2
Dbg:audio_codec:101
Dbg:audio_sample:8000
Dbg:audio_databits:16
Dbg:audio_channel:0
Dbg:init ring buffer Channel:0 Enable:1
Dbg:video_bitrate 1024, video_fps 15
Dbg:init ring buffer success. channel:0
Dbg:init ring buffer Channel:1 Enable:1
Dbg:video_bitrate 425, video_fps 15
Dbg:init ring buffer success. channel:1
Dbg:init ring buffer Channel:2 Enable:0
Dbg:init ring buffer Channel:3 Enable:0
Dbg:init ring buffer Channel:4 Enable:0
Dbg:init ring buffer Channel:5 Enable:0
Dbg:init ring buffer Channel:6 Enable:0
Dbg:init ring buffer Channel:7 Enable:0
Dbg:init ring buffer Channel:8 Enable:0
Dbg:init ring buffer Channel:9 Enable:1
Dbg:audio_sample 8000, audio_databits 16, audio_fps 20
Dbg:init ring buffer success. channel:9
Dbg:init ring buffer Channel:10 Enable:0
Dbg:init ring buffer Channel:11 Enable:0
Dbg:init ring buffer Channel:12 Enable:0
Dbg:init ring buffer Channel:13 Enable:0
Dbg:init ring buffer Channel:14 Enable:0
Dbg:init ring buffer Channel:15 Enable:0
curr event:0 
[01-01 18:12:15-- TUYA Debug][tuya_iot_com_api.c:94] init fs. Path: /var/syscfg/ 
[01-01 18:12:15-- TUYA Info][kv_storge.c:43] Init Kvs With File:/var/syscfg/
[01-01 18:12:15-- TUYA Debug][simplekv.c:916] path:/var/syscfg/
[01-01 18:12:15-- TUYA Debug][simplekv.c:952] get encrypt_key[���US����ykR��]
[01-01 18:12:15-- TUYA Debug][simplekv.c:983] both file exist
[01-01 18:12:15-- TUYA Debug][simplekv.c:280] size in: 0 and final: 28700 And mag_rec_max: 512
[01-01 18:12:15-- TUYA Debug][simplekv.c:295] create data hd success
[01-01 18:12:15-- TUYA Debug][simplekv.c:1026] read from normal file
[01-01 18:12:15-- TUYA Debug][simplekv.c:736] curr db is V2. No need to upgrade
[01-01 18:12:15-- TUYA Debug][simplekv.c:526] head check success
[01-01 18:12:15-- TUYA Debug][simplekv.c:629] read and check head success
[01-01 18:12:15-- TUYA Debug][simplekv.c:1041] read from normal file success
[01-01 18:12:15-- TUYA Debug][uni_thread.c:161] Init Thread Del Mgr
[01-01 18:12:15-- TUYA Debug][simplekv.c:1079] init from normal file success.
[01-01 18:12:15-- TUYA Debug][sys_timer.c:63] system timer has been inited
[01-01 18:12:15-- TUYA Debug][sys_timer.c:63] system timer has been inited
[01-01 18:12:15-- TUYA Debug][sys_timer.c:63] system timer has been inited
[01-01 18:12:15-- TUYA Debug][online_log_serv.c:340] read from uf. max:0 first:0 last:0
[01-01 18:12:15-- TUYA Debug][online_log_serv.c:581] log serv init success
[01-01 18:12:15-- TUYA Debug][ty_work_queue.c:22] init work queue. stack size:2560 pro:3 num:2
[01-01 18:12:15-- TUYA Debug][ty_work_queue.c:27] ty work queue create success
[01-01 18:12:15-- TUYA Debug][uni_thread.c:220] Thread:cmmod Exec Start. Set to Running Status
[01-01 18:12:15-- TUYA Debug][uni_thread.c:220] Thread:sys_timer Exec Start. Set to Running Status
[01-01 18:12:15-- TUYA Debug][sys_timer.c:34] system timer process run.

[01-01 18:12:15-- TUYA Debug][uni_thread.c:220] Thread:wk_th-1 Exec Start. Set to Running Status
[01-01 18:12:15-- TUYA Debug][uni_thread.c:220] Thread:wk_th-0 Exec Start. Set to Running Status
[01-01 18:12:15-- TUYA Debug][simplekv.c:1177] read key:gw_bi isFuzzy:0 skipCnt:0
[01-01 18:12:15-- TUYA Debug][simplekv.c:1217] find key:0 gw_bi
[01-01 18:12:15-- TUYA Debug][simplekv.c:1246] key:gw_bi find value.Len:160
[01-01 18:12:15-- TUYA Debug][tuya_ws_db.c:490] gw base read success
[01-01 18:12:15-- TUYA Debug][simplekv.c:1177] read key:gw_bi isFuzzy:0 skipCnt:0
[01-01 18:12:15-- TUYA Debug][simplekv.c:1217] find key:0 gw_bi
[01-01 18:12:15-- TUYA Debug][simplekv.c:1246] key:gw_bi find value.Len:160
[01-01 18:12:15-- TUYA Debug][tuya_ws_db.c:490] gw base read success
[01-01 18:12:15-- TUYA Notice][gw_intf.c:2226] serial_no:(null)
Set Country Code:CN 
[01-01 18:12:15-- TUYA Debug][simplekv.c:1177] read key:gw_wsm isFuzzy:0 skipCnt:0
[01-01 18:12:15-- TUYA Debug][simplekv.c:1217] find key:1 gw_wsm
[01-01 18:12:15-- TUYA Debug][simplekv.c:1246] key:gw_wsm find value.Len:128
[01-01 18:12:15-- TUYA Debug][tuya_ws_db.c:610] gw_wsm read success
[01-01 18:12:15-- TUYA Notice][gw_intf.c:2255] gw_cntl.gw_wsm.stat:0
[01-01 18:12:15-- TUYA Notice][gw_intf.c:2258] gw_cntl.gw_wsm.nc_tp:2
[01-01 18:12:15-- TUYA Notice][gw_intf.c:2259] gw_cntl.gw_wsm.md:0
[01-01 18:12:15-- TUYA Debug][simplekv.c:1177] read key:gw_di isFuzzy:0 skipCnt:0
[01-01 18:12:15-- TUYA Debug][simplekv.c:1217] find key:2 gw_di
[01-01 18:12:15-- TUYA Debug][simplekv.c:1246] key:gw_di find value.Len:320
[01-01 18:12:15-- TUYA Debug][tuya_ws_db.c:756] gw_di read success
[01-01 18:12:15-- TUYA Notice][gw_intf.c:2292] gw_cntl.gw_if.abi:0 input:0
[01-01 18:12:15-- TUYA Notice][gw_intf.c:2293] gw_cntl.gw_if.product_key:pftcuvcum7mqidfi, input:pftcuvcum7mqidfi
[01-01 18:12:15-- TUYA Notice][gw_intf.c:2294] gw_cntl.gw_if.tp:0, input:0
[01-01 18:12:15-- TUYA Debug][simplekv.c:1177] read key:gw_ai isFuzzy:0 skipCnt:0
[01-01 18:12:15-- TUYA Debug][simplekv.c:1217] find key:3 gw_ai
[01-01 18:12:15-- TUYA Debug][simplekv.c:1246] key:gw_ai find value.Len:176
[01-01 18:12:15-- TUYA Debug][tuya_ws_db.c:851] gw_ai read success
[01-01 18:12:15-- TUYA Debug][gw_intf.c:2452] enter success_proc
[hwl_wf_wk_mode_set]wf_wk_mode = 3
WIFI Get MAC 68-B9-D3-23-E5-67
Start AP SSID:SmartLife-E567 
coreNetSoftApStart 
[3.0|coreNet.c|NetCallSystem,86] 000 NetCallSystem wpa_cli -ira0 disconnect;/etc/net_sh/softap_stop.sh;/etc/net_sh/net_exit.sh;/etc/net_sh/softap_start.sh "SmartLife-E567" errno = 0,nLoop = 0 
[01-01 18:12:15-- TUYA Debug][tuya_iot_wifi_api.c:365] register wifi network monitor. interval:5
[01-01 18:12:15-- TUYA Debug][app_agent.c:333] TUYA Mode, start TUYA thread to listen Lan
[01-01 18:12:15-- TUYA Debug][app_agent.c:363] cmmod register finish 1
[3.0|coreAvStream.c|coreYuvDataStart,294]  
00:00:18 [fuZbar.cpp fQr_StartQrRecog:319] E> #####################StartQrRecog##############################
00:00:18 [fuZbar.cpp do_qr_thread:252] E> start qr thread g_bQrThreadExitFlag:0
[01-01 18:12:15-- TUYA Debug][uni_thread.c:220] Thread:lpc_task Exec Start. Set to Running Status
[01-01 18:12:15-- TUYA Debug][app_agent.c:860] begint to execute __lpc_task
[01-01 18:12:15-- TUYA Debug][app_agent.c:887] Setup TCP Server On Port:6668
OK
[softap_stop.sh]----------------
ash: you need to specify whom to kill
ash: you need to specify whom to kill
ash: you need to specify whom to kill
[   19.447324] RTW: rtw_ndev_notifier_call(ra0) state:9
[   19.452486] RTW: netdev_close(ra0) , bup=1
[   19.456870] RTW: (2)871x_drv - drv_close, bup=1, hw_init_completed=_TRUE
[   19.465023] RTW: rtw_hal_set_bssid ra0- hw port -0 BSSID: 00:00:00:00:00:00
[   19.472662] RTW: rtw_cfg80211_indicate_disconnect(ra0)
[   19.478506] RTW: rtw_reset_securitypriv(ra0) - End to Disconnect
[   19.484945] RTW: rtw_free_assoc_resources-ra0 tgt_network MacAddress=00:00:00:00:00:00 ssid=
[   19.499210] RTW: free disconnecting network of scanned_queue failed due to pwlan== NULL
[   19.499210] 
[   19.509466] RTW: -871x_drv - drv_close, bup=1
[   19.514479] RTW: rtw_ndev_notifier_call(ra0) state:2
[   21.120301] RTW: rtw_ndev_notifier_call(ra0) state:13
[   21.134571] RTW: _netdev_open(ra0) , bup=1
[   21.144628] RTW: -871x_drv - drv_open, bup=1
[   21.149118] RTW: cfg80211_rtw_set_power_mgmt(ra0) enabled:1, timeout:-1
[   21.174217] RTW: rtw_ndev_notifier_call(ra0) state:1
ash: you need to specify whom to kill
ash: you need to specify whom to kill
ash: you need to specify whom to kill
[   21.384609] RTW: rtw_ndev_notifier_call(ra0) state:9
[   21.389769] RTW: netdev_close(ra0) , bup=1
[   21.394077] RTW: (2)871x_drv - drv_close, bup=1, hw_init_completed=_TRUE
[   21.415457] RTW: rtw_hal_set_bssid ra0- hw port -0 BSSID: 00:00:00:00:00:00
[   21.434855] RTW: rtw_cfg80211_indicate_disconnect(ra0)
[   21.440205] RTW: rtw_reset_securitypriv(ra0) - End to Disconnect
[   21.454618] RTW: rtw_free_assoc_resources-ra0 tgt_network MacAddress=00:00:00:00:00:00 ssid=
[   21.473577] RTW: free disconnecting network of scanned_queue failed due to pwlan== NULL
[   21.473577] 
[   21.493835] RTW: -871x_drv - drv_close, bup=1
[   21.504078] RTW: rtw_ndev_notifier_call(ra0) state:2
[softap_start.sh]----------------
ash: you need to specify whom to kill
ash: you need to specify whom to kill
ash: you need to specify whom to kill
ash: you need to specify whom to kill
ash: you need to specify whom to kill
[01-01 18:12:20-- TUYA Debug][tuya_iot_wifi_api.c:347] wifi netstat changed to:5  -->>
Dbg:Net status change to:5
[01-01 18:12:20-- TUYA Debug][tuya_iot_wifi_api.c:350] wifi netstat changed to:5  <<--
[3.0|coreNet.c|RefreshNetInfo,657] RefreshNetInfo :IP:,MASK:,GateWay: 
[01-01 18:12:20-- TUYA Debug][app_agent.c:702] Create UDP Socket To Broadcast
[01-01 18:12:20-- TUYA Err][app_agent.c:803] sendto Failed,len:172 ret:-1,errno:-18 port:6667
[   24.245385] RTW: rtw_ndev_notifier_call(ra0) state:13
[   24.250619] RTW: _netdev_open(ra0) , bup=1
[   24.264647] RTW: -871x_drv - drv_open, bup=1
[   24.269212] RTW: cfg80211_rtw_set_power_mgmt(ra0) enabled:1, timeout:-1
[   24.284772] RTW: rtw_ndev_notifier_call(ra0) state:1
Configuration file: /var/hostapd.conf
[   24.918521] RTW: cfg80211_rtw_change_iface(ra0) type=3, hw_port:0
[   24.925059] RTW: cfg80211_rtw_change_iface(ra0) call netdev_open
[   24.931356] RTW: _netdev_open(ra0) , bup=1
[   24.935734] RTW: -871x_drv - drv_open, bup=1
[   24.941422] RTW: cfg80211_rtw_change_iface(ra0) old_iftype=2, new_iftype=3
[   24.948779] RTW: rtw_release_macid(ra0) if1, mac_addr:ff:ff:ff:ff:ff:ff macid:1
[   24.956439] RTW: rtw_alloc_macid(ra0) if1, mac_addr:ff:ff:ff:ff:ff:ff macid:0
[   24.967484] RTW: rtw_hal_set_macaddr_port ra0- hw port(0) mac_addr =68:b9:d3:23:e5:67
[   24.976800] RTW: #### hw_var_set_opmode() -4639 hw_port(0) mode = 3 ####
[   24.987904] RTW: cfg80211_rtw_change_iface(ra0) ret:0
rfkill: Cannot open RFKILL control device
nl80211: Could not re-add multicast membership for vendor events[   25.000849] RTW: +cfg80211_rtw_del_station(ra0) mac=  (null)
: -2 (No such file or directory)
[   25.015791] RTW: flush all sta, and cam_entry
[   25.020314] RTW: rtw_sta_flush(ra0)
[   25.023924] RTW: issue_deauth to ff:ff:ff:ff:ff:ff
[   25.049857] RTW: +cfg80211_rtw_del_station(ra0) mac=ff:ff:ff:ff:ff:ff
[   25.064564] RTW: free sta macaddr =ff:ff:ff:ff:ff:ff
[   25.080320] RTW: cfg80211_rtw_del_key(ra0) key_index=0, addr=  (null)
[   25.103782] RTW: cfg80211_rtw_del_key(ra0) key_index=1, addr=  (null)
[   25.124194] RTW: cfg80211_rtw_del_key(ra0) key_index=2, addr=  (null)
[   25.151808] RTW: cfg80211_rtw_del_key(ra0) key_index=3, addr=  (null)
Using interface ra0 with hwaddr 68:b9:d3[   25.159368] RTW: cfg80211_rtw_start_ap(ra0) hidden_ssid:0, auth_type:5
:23:e5:67 and ssid "SmartLife-E567"
[   25.184580] RTW: rtw_add_beacon beacon_head_len=65, beacon_tail_len=9
[   25.198429] RTW: rtw_check_beacon_data, len=50
[   25.208184] RTW: rtw_hal_set_bssid ra0- hw port -0 BSSID: 68:b9:d3:23:e5:67
[   25.216412] RTW: rtw_ap_chbw_decision(ra0) ld_sta_num:0, lg_sta_num0, ap_num:0, mesh_num:0
[   25.226390] RTW: rtw_ap_chbw_decision(ra0) req: 0,-1,-1
[   25.236068] RTW: rtw_ap_chbw_decision(ra0) dec: 1,0,0
[   25.241844] RTW: HW_VAR_BASIC_RATE: 0x15f->0x15f->0x15f
[   25.249180] RTW: rtw_get_sta_tx_nss: 1 SS
[   25.253432] RTW: rtw_get_sta_rx_nss: 1 SS
[   25.257662] RTW: STA - MAC_ID:0, Tx - 1 SS, Rx - 1 SS
[   25.262887] RTW: STA - MAC_ID:0, SM_PS 3
[   25.267579] RTW: ra0 BMC Init Tx rate - CCK_11M
[   25.282911] RTW: rtw_cfg80211_indicate_connect(ra0)
[   25.289367] RTW: assoc success
[   25.292612] RTW: rtw_ndev_notifier_call(ra0) state:4
[   25.301477] RTW: cfg80211_rtw_change_bss(ra0)
[   25.306268] RTW: rtw_ndev_notifier_call(ra0) state:4
[   25.312211] RTW: cfg80211_rtw_set_mac_acl(ra0) acl_policy:0, entry_num:0
[   25.319287] RTW: rtw_set_macaddr_acl(ra0) p=1, mode=1
ra0: interface state UNINITIALIZED->ENABLED
ra0: AP-ENABLED 
udhcpd (v1.22.1) started
[3.0|coreNet.c|NetCallSystem,116] 001 NetCallSystem wpa_cli -ira0 disconnect;/etc/net_sh/softap_stop.sh;/etc/net_sh/net_exit.sh;/etc/net_sh/softap_start.sh "SmartLife-E567" errno = 2,nLoop = 7 
[01-01 18:12:22-- TUYA Debug][app_agent.c:588] start thread to listen udp
[01-01 18:12:22-- TUYA Debug][uni_thread.c:220] Thread:udp_ap_v3 Exec Start. Set to Running Status
[01-01 18:12:22-- TUYA Debug][app_agent.c:418] start udp ap thread
[01-01 18:12:25-- TUYA Debug][tuya_iot_wifi_api.c:347] wifi netstat changed to:2  -->>
Dbg:Net status change to:2
[01-01 18:12:25-- TUYA Debug][tuya_iot_wifi_api.c:350] wifi netstat changed to:2  <<--
[3.0|coreNet.c|RefreshNetInfo,657] RefreshNetInfo :IP:192.168.0.1,MASK:255.255.255.0,GateWay: 
[01-01 18:12:25-- TUYA Debug][app_agent.c:702] Create UDP Socket To Broadcast
[3.0|coreNet.c|RefreshNetInfo,657] RefreshNetInfo :IP:192.168.0.1,MASK:255.255.255.0,GateWay: 
[3.0|coreNet.c|RefreshNetInfo,657] RefreshNetInfo :IP:192.168.0.1,MASK:255.255.255.0,GateWay: 
[3.0|coreNet.c|RefreshNetInfo,657] RefreshNetInfo :IP:192.168.0.1,MASK:255.255.255.0,GateWay: 
[3.0|coreNet.c|netManagerThread,1386] checkRouteConnectivity: !E_FUN_ROUTER_OK offline eConnectivityStatus=2 g_eNetType=2 g_bSoftapRunFlg=1
[3.0|coreNet.c|RefreshNetInfo,657] RefreshNetInfo :IP:192.168.0.1,MASK:255.255.255.0,GateWay: 

Ingenic-uc1_1 login: 
Ingenic-uc1_1 login: [3.0|coreNet.c|RefreshNetInfo,657] RefreshNetInfo :IP:192.168.0.1,MASK:255.255.255.0,GateWay: 
```

## U-bootのシェルに入る
起動してからCtrl+Cで入れる
```shell
U-Boot SPL 2013.07 (Mar 19 2020 - 11:55:08)
Timer init
CLK stop
PLL init
pll_init:399
pll_cfg.pdiv = 10, pll_cfg.h2div = 5, pll_cfg.h0div = 5, pll_cfg.cdiv = 1, pll_cfg.l2div = 2
fbdiv = 36 , refdiv = 1 , fdivq = 2 ,pllod = 1 range = 3
cppcr is 02300860
CPM_CPAPCR 0470484d
fbdiv = 38 , refdiv = 1 , fdivq = 2 ,pllod = 1 range = 3
cppcr is 02500860
CPM_CPMPCR 04a0484d
fbdiv = 50 , refdiv = 1 , fdivq = 2 ,pllod = 1 range = 3
cppcr is 03100860
CPM_CPVPCR 0310086d
cppcr 0x9a773310
apll_freq 864000000 
mpll_freq 900000000 
vpll_freq = 1200000000 
ddr sel mpll, cpu sel apll
ddrfreq 450000000
cclk  864000000
l2clk 432000000
h0clk 180000000
h2clk 180000000
pclk  90000000
CLK init
SDRAM init
sdram init start
ddr_inno_phy_init ..!
phy reg = 0x00000007, CL = 0x00000007
ddr_inno_phy_init ..! 11:  00000004
ddr_inno_phy_init ..! 22:  00000006
ddr_inno_phy_init ..! 33:  00000006
REG_DDR_LMR: 00000210
REG_DDR_LMR: 00000310
REG_DDR_LMR: 00000110
REG_DDR_LMR, MR0: 00d73011
T30_0x5: 00000007
T30_0x15: 0000000c
T30_0x4: 00000000
T30_0x14: 00000002
INNO_TRAINING_CTRL 1: 00000000
INNO_TRAINING_CTRL 2: 000000a1
T30_cc: 00000003
INNO_TRAINING_CTRL 3: 000000a0
T30_118: 0000003c
T30_158: 0000003c
T30_190: 0000001e
T30_194: 00000019
jz-04 :  0x00000051 
jz-08 :  0x000000a0 
jz-28 :  0x00000024 
DDR PHY init OK
INNO_DQ_WIDTH   :00000003
INNO_PLL_FBDIV  :00000014
INNO_PLL_PDIV   :00000005
INNO_MEM_CFG    :00000051
INNO_PLL_CTRL   :00000018
INNO_CHANNEL_EN :0000000d
INNO_CWL        :00000006
INNO_CL         :00000007
DDR Controller init
DDRC_STATUS         0x80000001
DDRC_CFG            0x0a688a40
DDRC_CTRL           0x0000891c
DDRC_LMR            0x00400008
DDRC_DLP            0x00000000
DDRC_TIMING1        0x040e0706
DDRC_TIMING2        0x02150607
DDRC_TIMING3        0x2006051b
DDRC_TIMING4        0x17240031
DDRC_TIMING5        0xff060405
DDRC_TIMING6        0x32150505
DDRC_REFCNT         0x00da5c01
DDRC_MMAP0          0x000020fc
DDRC_MMAP1          0x00002400
DDRC_REMAP1         0x03020100
DDRC_REMAP2         0x07060504
DDRC_REMAP3         0x0b0a0908
DDRC_REMAP4         0x0f0e0d0c
DDRC_REMAP5         0x13121110
DDRC_AUTOSR_EN      0x00000000
sdram init finished
SDRAM init ok
board_init_r
image entry point: 0x80100000


U-Boot 2013.07 (Mar 19 2020 - 11:55:08)

Board: ISVP (Ingenic XBurst T21 SoC)
DRAM:  64 MiB
Top of RAM usable for U-Boot at: 84000000
Reserving 440k for U-Boot at: 83f90000
Reserving 32784k for malloc() at: 81f8c000
Reserving 32 Bytes for Board Info at: 81f8bfe0
Reserving 124 Bytes for Global Data at: 81f8bf64
Reserving 128k for boot params() at: 81f6bf64
Stack Pointer at: 81f6bf48
Now running in RAM - U-Boot at: 83f90000
MMC:   msc: 0
the manufacturer 0b
SF: Detected XT25F128B

*** Warning - bad CRC, using default environment

In:    serial
Out:   serial
Err:   serial
Net:   cpm_mphyc_rst = 0x01000000 cpm_mphyc = 0x00000000
Jz4775-9161
the manufacturer 0b
SF: Detected XT25F128B

ReadFlashData ret=0 
**********Load rootfs mtd(2) from flash************ 
****Enter into Check Update:1 ****** 
Card did not respond to voltage select!
** Bad device mmc 0 **
Card did not respond to voltage select!
** Bad device mmc 0 **
### main_loop: bootcmd="sf probe;sf read 0x80600000 0x40000 0x1E0000; bootm 0x80600000"
Hit any key to stop autoboot:  0 
isvp_t21# <INTERRUPT>
isvp_t21# <INTERRUPT>
isvp_t21# <INTERRUPT>
isvp_t21# <INTERRUPT>
isvp_t21# 
```
## コマンド一覧
```shell
isvp_t21# help
?       - alias for 'help'
base    - print or set address offset
boot    - boot default, i.e., run 'bootcmd'
boota   - boot android system
bootd   - boot default, i.e., run 'bootcmd'
bootm   - boot application image from memory
bootp   - boot image via network using BOOTP/TFTP protocol
chpart  - change active partition
cmp     - memory compare
coninfo - print console devices and information
cp      - memory copy
crc32   - checksum calculation
echo    - echo args to console
env     - environment handling commands
ethphy  - ethphy contrl
fatinfo - print information about filesystem
fatload - load binary file from a dos filesystem
fatls   - list files in a directory (default /)
gettime - get timer val elapsed,

go      - start application at address 'addr'
help    - print command description/usage
loadb   - load binary file over serial line (kermit mode)
loads   - load S-Record file over serial line
loady   - load binary file over serial line (ymodem mode)
loop    - infinite loop on address range
md      - memory display
mm      - memory modify (auto-incrementing address)
mmc     - MMC sub system
mmcinfo - display MMC info
mtdparts- define flash/nand partitions
mw      - memory write (fill)
nm      - memory modify (constant address)
ping    - send ICMP ECHO_REQUEST to network host
printenv- print environment variables
reset   - Perform RESET of the CPU
run     - run commands in an environment variable
saveenv - save environment variables to persistent storage
setenv  - set environment variables
sf      - SPI flash sub-system
sleep   - delay execution for some time
source  - run script from memory
tftpboot- boot image via network using TFTP protocol
version - print monitor, compiler and linker version
isvp_t21# 
```

## 純正ファームのバックアップ
```shell
isvp_t21# mmc list
msc: 0
isvp_t21# mmc part

Partition Map for MMC device 0  --   Partition Type: DOS

Part    Start Sector    Num Sectors     UUID            Type
  1     8192            15515648        5fc9b7d3-01     0b
isvp_t21# fatls mmc 0:1
            system volume information/

0 file(s), 1 dir(s)

isvp_t21# sf probe 0
the manufacturer 0b
SF: Detected XT25F128B

--->probe spend 4 ms
isvp_t21# sf read 0x82000000 0 0x1000000
SF: 16777216 bytes @ 0x0 Read: OK
--->read spend 2687 ms
isvp_t21# mmc write 0x82000000 0x4000 0x8000

MMC write: dev # 0, block # 16384, count 32768 ... 32768 blocks write: OK
isvp_t21# 

----

yoshiakisuyama@Air-2024fffe tuya-702jbu % diskutil list

省略

/dev/disk4 (external, physical):
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:     FDisk_partition_scheme                        *7.9 GB     disk4
   1:                 DOS_FAT_32 UDISK                   7.9 GB     disk4s1
yoshiakisuyama@Air-2024fffe tuya-702jbu % sudo dd if=/dev/rdisk4 of=camera_firmware.bin bs=512 skip=16384 count=32768
```

## 純正ファームの解析
```shell
sym@raspberrypi:~ $ binwalk -e tuya_ipc_firmware.bin 

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
2281540       0x22D044        xz compressed data
2339476       0x23B294        xz compressed data
2396944       0x249310        xz compressed data
2455692       0x25788C        xz compressed data
2515512       0x266238        xz compressed data
2571908       0x273E84        xz compressed data
2673276       0x28CA7C        xz compressed data
2722380       0x298A4C        xz compressed data
2775080       0x2A5828        xz compressed data
2817080       0x2AFC38        xz compressed data
2844592       0x2B67B0        xz compressed data
2844780       0x2B686C        xz compressed data
2907456       0x2C5D40        xz compressed data
3020912       0x2E1870        xz compressed data
3088456       0x2F2048        xz compressed data
3117988       0x2F93A4        xz compressed data
3166876       0x30529C        xz compressed data
3214664       0x310D48        xz compressed data
3266500       0x31D7C4        xz compressed data
3320232       0x32A9A8        xz compressed data
3435008       0x346A00        xz compressed data
3437984       0x3475A0        xz compressed data
3461660       0x34D21C        xz compressed data
3503132       0x35741C        xz compressed data
3524944       0x35C950        xz compressed data
3581344       0x36A5A0        xz compressed data
3629484       0x3761AC        xz compressed data
3675656       0x381608        xz compressed data
3715196       0x38B07C        xz compressed data
3757832       0x395708        xz compressed data
3799504       0x39F9D0        xz compressed data
3842604       0x3AA22C        xz compressed data
3882840       0x3B3F58        xz compressed data
3922152       0x3BD8E8        xz compressed data
3961056       0x3C70E0        xz compressed data
4021552       0x3D5D30        xz compressed data
4051232       0x3DD120        xz compressed data
4065408       0x3E0880        xz compressed data
4105756       0x3EA61C        xz compressed data
4124856       0x3EF0B8        xz compressed data
4157608       0x3F70A8        xz compressed data
4227480       0x408198        xz compressed data
4244136       0x40C2A8        xz compressed data
4268580       0x412224        xz compressed data
4287892       0x416D94        xz compressed data
4307392       0x41B9C0        xz compressed data
4344420       0x424A64        xz compressed data
4349968       0x426010        xz compressed data
4374772       0x42C0F4        xz compressed data
4400300       0x4324AC        xz compressed data
4401568       0x4329A0        xz compressed data
4426616       0x438B78        xz compressed data
4442560       0x43C9C0        xz compressed data
4485012       0x446F94        xz compressed data
4536220       0x45379C        xz compressed data
4573368       0x45C8B8        xz compressed data
4593388       0x4616EC        xz compressed data
4629424       0x46A3B0        xz compressed data
4643444       0x46DA74        xz compressed data
4675108       0x475624        xz compressed data
4703584       0x47C560        xz compressed data
4729832       0x482BE8        xz compressed data
4759492       0x489FC4        xz compressed data
4793920       0x492640        xz compressed data
4806000       0x495570        xz compressed data
4847720       0x49F868        xz compressed data
4891620       0x4AA3E4        xz compressed data
4940752       0x4B63D0        xz compressed data
4991092       0x4C2874        xz compressed data
5039772       0x4CE69C        xz compressed data
5092336       0x4DB3F0        xz compressed data
5115600       0x4E0ED0        xz compressed data
5140184       0x4E6ED8        xz compressed data
5180392       0x4F0BE8        xz compressed data
5210572       0x4F81CC        xz compressed data
5248488       0x5015E8        xz compressed data
5286884       0x50ABE4        xz compressed data
5320620       0x512FAC        xz compressed data
5354268       0x51B31C        xz compressed data
5384440       0x5228F8        xz compressed data
5411440       0x529270        xz compressed data
5480572       0x53A07C        xz compressed data
5545368       0x549D98        xz compressed data
5562256       0x54DF90        xz compressed data
5593740       0x555A8C        xz compressed data
5624064       0x55D100        xz compressed data
5777412       0x582804        xz compressed data
5820936       0x58D208        xz compressed data
5870588       0x5993FC        xz compressed data
6069716       0x5C9DD4        xz compressed data
6128688       0x5D8430        xz compressed data
6176396       0x5E3E8C        xz compressed data
6281968       0x5FDAF0        xz compressed data
6336244       0x60AEF4        xz compressed data
6385368       0x616ED8        xz compressed data
6439428       0x624204        xz compressed data
6481716       0x62E734        xz compressed data
6505876       0x634594        xz compressed data
6549488       0x63EFF0        xz compressed data
6595544       0x64A3D8        xz compressed data
6634392       0x653B98        xz compressed data
6681308       0x65F2DC        xz compressed data
6733480       0x66BEA8        xz compressed data
6775032       0x6760F8        xz compressed data
6826748       0x682AFC        xz compressed data
6862316       0x68B5EC        xz compressed data
6905820       0x695FDC        xz compressed data
6945416       0x69FA88        xz compressed data
6945556       0x69FB14        xz compressed data
6976700       0x6A74BC        xz compressed data
7030088       0x6B4548        xz compressed data
7080776       0x6C0B48        xz compressed data
7138420       0x6CEC74        xz compressed data
7147852       0x6D114C        xz compressed data
7181716       0x6D9594        xz compressed data
7221980       0x6E32DC        xz compressed data
7247576       0x6E96D8        xz compressed data
7253592       0x6EAE58        xz compressed data
7294652       0x6F4EBC        xz compressed data
7325780       0x6FC854        xz compressed data
7335680       0x6FEF00        xz compressed data
7346296       0x701878        xz compressed data
7374412       0x70864C        xz compressed data
7390600       0x70C588        xz compressed data
7427892       0x715734        xz compressed data
7468944       0x71F790        xz compressed data
7475056       0x720F70        xz compressed data
7481184       0x722760        xz compressed data
7538584       0x730798        xz compressed data
7547148       0x73290C        xz compressed data
7580348       0x73AABC        xz compressed data
7586328       0x73C218        xz compressed data
7606484       0x7410D4        xz compressed data
7636606       0x74867E        xz compressed data
7638772       0x748EF4        xz compressed data
7639894       0x749356        xz compressed data
7640228       0x7494A4        xz compressed data
7644960       0x74A720        xz compressed data
7645150       0x74A7DE        xz compressed data
9109504       0x8B0000        Squashfs filesystem, little endian, version 4.0, compression:xz, size: 5758542 bytes, 498 inodes, blocksize: 131072 bytes, created: 2021-07-07 01:34:18
15990784      0xF40000        JFFS2 filesystem, little endian
16023632      0xF48050        Zlib compressed data, compressed
16023844      0xF48124        JFFS2 filesystem, little endian
16024104      0xF48228        Zlib compressed data, compressed
16025372      0xF4871C        Zlib compressed data, compressed
16026640      0xF48C10        Zlib compressed data, compressed
16026728      0xF48C68        Zlib compressed data, compressed
16027164      0xF48E1C        Zlib compressed data, compressed
16028432      0xF49310        Zlib compressed data, compressed
16029700      0xF49804        Zlib compressed data, compressed
16029788      0xF4985C        Zlib compressed data, compressed
16030224      0xF49A10        Zlib compressed data, compressed
16030636      0xF49BAC        Zlib compressed data, compressed
16030732      0xF49C0C        Zlib compressed data, compressed
16030848      0xF49C80        Zlib compressed data, compressed
16030944      0xF49CE0        Zlib compressed data, compressed
16031040      0xF49D40        Zlib compressed data, compressed
16031156      0xF49DB4        Zlib compressed data, compressed
16031264      0xF49E20        Zlib compressed data, compressed
16031360      0xF49E80        Zlib compressed data, compressed
16031476      0xF49EF4        Zlib compressed data, compressed
16031588      0xF49F64        Zlib compressed data, compressed
16031704      0xF49FD8        Zlib compressed data, compressed
16031820      0xF4A04C        Zlib compressed data, compressed
16031916      0xF4A0AC        Zlib compressed data, compressed
16032032      0xF4A120        Zlib compressed data, compressed
16033024      0xF4A500        Zlib compressed data, compressed
16034020      0xF4A8E4        Zlib compressed data, compressed
16035296      0xF4ADE0        Zlib compressed data, compressed
16035708      0xF4AF7C        Zlib compressed data, compressed
16035824      0xF4AFF0        Zlib compressed data, compressed
16035940      0xF4B064        Zlib compressed data, compressed
16036056      0xF4B0D8        Zlib compressed data, compressed
16036172      0xF4B14C        Zlib compressed data, compressed
16036288      0xF4B1C0        Zlib compressed data, compressed
16036404      0xF4B234        Zlib compressed data, compressed
16036564      0xF4B2D4        Zlib compressed data, compressed
16037832      0xF4B7C8        Zlib compressed data, compressed
16039100      0xF4BCBC        Zlib compressed data, compressed
16039188      0xF4BD14        Zlib compressed data, compressed
16039624      0xF4BEC8        Zlib compressed data, compressed
16040892      0xF4C3BC        Zlib compressed data, compressed
16042160      0xF4C8B0        Zlib compressed data, compressed
16042248      0xF4C908        Zlib compressed data, compressed
16042684      0xF4CABC        Zlib compressed data, compressed
16043952      0xF4CFB0        Zlib compressed data, compressed
16045220      0xF4D4A4        Zlib compressed data, compressed
16045308      0xF4D4FC        Zlib compressed data, compressed
16045744      0xF4D6B0        Zlib compressed data, compressed
16047012      0xF4DBA4        Zlib compressed data, compressed
16048280      0xF4E098        Zlib compressed data, compressed
16048368      0xF4E0F0        Zlib compressed data, compressed
16048804      0xF4E2A4        Zlib compressed data, compressed
16050072      0xF4E798        Zlib compressed data, compressed
16051340      0xF4EC8C        Zlib compressed data, compressed
16051428      0xF4ECE4        Zlib compressed data, compressed
16051864      0xF4EE98        Zlib compressed data, compressed
16053132      0xF4F38C        Zlib compressed data, compressed
16054416      0xF4F890        Zlib compressed data, compressed
16054504      0xF4F8E8        Zlib compressed data, compressed
16054940      0xF4FA9C        Zlib compressed data, compressed
16056400      0xF50050        Zlib compressed data, compressed
16056488      0xF500A8        JFFS2 filesystem, little endian
16058524      0xF5089C        Zlib compressed data, compressed
16059764      0xF50D74        Zlib compressed data, compressed
16061004      0xF5124C        Zlib compressed data, compressed
16061096      0xF512A8        Zlib compressed data, compressed
16061464      0xF51418        Zlib compressed data, compressed
16062704      0xF518F0        Zlib compressed data, compressed
16063944      0xF51DC8        Zlib compressed data, compressed
16064036      0xF51E24        Zlib compressed data, compressed
16064404      0xF51F94        Zlib compressed data, compressed
16065644      0xF5246C        Zlib compressed data, compressed
16066884      0xF52944        Zlib compressed data, compressed
16066976      0xF529A0        Zlib compressed data, compressed
16067344      0xF52B10        Zlib compressed data, compressed
16068584      0xF52FE8        Zlib compressed data, compressed
16069824      0xF534C0        Zlib compressed data, compressed
16069916      0xF5351C        Zlib compressed data, compressed
16070284      0xF5368C        Zlib compressed data, compressed
16071456      0xF53B20        JFFS2 filesystem, little endian
16121936      0xF60050        Zlib compressed data, compressed
16122052      0xF600C4        Zlib compressed data, compressed
16122168      0xF60138        Zlib compressed data, compressed
16122284      0xF601AC        Zlib compressed data, compressed
16122400      0xF60220        Zlib compressed data, compressed
16122516      0xF60294        Zlib compressed data, compressed
16122632      0xF60308        Zlib compressed data, compressed
16122748      0xF6037C        Zlib compressed data, compressed
16122772      0xF60394        JFFS2 filesystem, little endian
16123036      0xF6049C        Zlib compressed data, compressed
16123244      0xF6056C        Zlib compressed data, compressed
16123360      0xF605E0        Zlib compressed data, compressed
16123476      0xF60654        Zlib compressed data, compressed
16123592      0xF606C8        Zlib compressed data, compressed
16123708      0xF6073C        Zlib compressed data, compressed
16123824      0xF607B0        Zlib compressed data, compressed
16123940      0xF60824        Zlib compressed data, compressed
16123964      0xF6083C        JFFS2 filesystem, little endian
16125388      0xF60DCC        Zlib compressed data, compressed
16126628      0xF612A4        Zlib compressed data, compressed
16127868      0xF6177C        Zlib compressed data, compressed
16127960      0xF617D8        Zlib compressed data, compressed
16128328      0xF61948        Zlib compressed data, compressed
16129568      0xF61E20        Zlib compressed data, compressed
16130808      0xF622F8        Zlib compressed data, compressed
16130900      0xF62354        Zlib compressed data, compressed
16131268      0xF624C4        Zlib compressed data, compressed
16132508      0xF6299C        Zlib compressed data, compressed
16133748      0xF62E74        Zlib compressed data, compressed
16133840      0xF62ED0        Zlib compressed data, compressed
16134208      0xF63040        Zlib compressed data, compressed
16135448      0xF63518        Zlib compressed data, compressed
16136688      0xF639F0        Zlib compressed data, compressed
16136780      0xF63A4C        Zlib compressed data, compressed
16137148      0xF63BBC        Zlib compressed data, compressed
16138388      0xF64094        Zlib compressed data, compressed
16139628      0xF6456C        Zlib compressed data, compressed
16139720      0xF645C8        Zlib compressed data, compressed
16140088      0xF64738        Zlib compressed data, compressed
16141328      0xF64C10        Zlib compressed data, compressed
16142568      0xF650E8        Zlib compressed data, compressed
16142660      0xF65144        Zlib compressed data, compressed
16143028      0xF652B4        Zlib compressed data, compressed
16144268      0xF6578C        Zlib compressed data, compressed
16145508      0xF65C64        Zlib compressed data, compressed
16145600      0xF65CC0        Zlib compressed data, compressed
16145968      0xF65E30        Zlib compressed data, compressed
16147208      0xF66308        Zlib compressed data, compressed
16148448      0xF667E0        Zlib compressed data, compressed
16148540      0xF6683C        Zlib compressed data, compressed
16148908      0xF669AC        Zlib compressed data, compressed
16150148      0xF66E84        Zlib compressed data, compressed
16151388      0xF6735C        Zlib compressed data, compressed
16151480      0xF673B8        Zlib compressed data, compressed
16151848      0xF67528        Zlib compressed data, compressed
16153108      0xF67A14        Zlib compressed data, compressed
16154416      0xF67F30        Zlib compressed data, compressed
16154704      0xF68050        Zlib compressed data, compressed
16155464      0xF68348        Zlib compressed data, compressed
16156724      0xF68834        Zlib compressed data, compressed
16156812      0xF6888C        Zlib compressed data, compressed
16157048      0xF68978        JFFS2 filesystem, little endian
16157292      0xF68A6C        Zlib compressed data, compressed
16157600      0xF68BA0        Zlib compressed data, compressed
16158860      0xF6908C        Zlib compressed data, compressed
16160120      0xF69578        Zlib compressed data, compressed
16160208      0xF695D0        Zlib compressed data, compressed
16160580      0xF69744        Zlib compressed data, compressed
16160888      0xF69878        Zlib compressed data, compressed
16162148      0xF69D64        Zlib compressed data, compressed
16163408      0xF6A250        Zlib compressed data, compressed
16163496      0xF6A2A8        Zlib compressed data, compressed
16163868      0xF6A41C        Zlib compressed data, compressed
16164240      0xF6A590        Zlib compressed data, compressed
16164336      0xF6A5F0        Zlib compressed data, compressed
16164452      0xF6A664        Zlib compressed data, compressed
16164548      0xF6A6C4        Zlib compressed data, compressed
16164644      0xF6A724        Zlib compressed data, compressed
16164760      0xF6A798        Zlib compressed data, compressed
16164868      0xF6A804        Zlib compressed data, compressed
16164964      0xF6A864        Zlib compressed data, compressed
16165080      0xF6A8D8        Zlib compressed data, compressed
16165192      0xF6A948        Zlib compressed data, compressed
16165308      0xF6A9BC        Zlib compressed data, compressed
16165424      0xF6AA30        Zlib compressed data, compressed
16165520      0xF6AA90        Zlib compressed data, compressed
16165636      0xF6AB04        Zlib compressed data, compressed
16166624      0xF6AEE0        Zlib compressed data, compressed
16167620      0xF6B2C4        Zlib compressed data, compressed
16168472      0xF6B618        Zlib compressed data, compressed
16168840      0xF6B788        Zlib compressed data, compressed
16168956      0xF6B7FC        Zlib compressed data, compressed
16169072      0xF6B870        Zlib compressed data, compressed
16169188      0xF6B8E4        Zlib compressed data, compressed
16169304      0xF6B958        Zlib compressed data, compressed
16169420      0xF6B9CC        Zlib compressed data, compressed
16169536      0xF6BA40        Zlib compressed data, compressed
16169712      0xF6BAF0        Zlib compressed data, compressed
16170084      0xF6BC64        Zlib compressed data, compressed
16170200      0xF6BCD8        Zlib compressed data, compressed
16170316      0xF6BD4C        Zlib compressed data, compressed
16170432      0xF6BDC0        Zlib compressed data, compressed
16170548      0xF6BE34        Zlib compressed data, compressed
16170664      0xF6BEA8        Zlib compressed data, compressed
16170780      0xF6BF1C        Zlib compressed data, compressed
16170956      0xF6BFCC        Zlib compressed data, compressed
16171324      0xF6C13C        Zlib compressed data, compressed
16171440      0xF6C1B0        Zlib compressed data, compressed
16171556      0xF6C224        Zlib compressed data, compressed
16171672      0xF6C298        Zlib compressed data, compressed
16171788      0xF6C30C        Zlib compressed data, compressed
16171904      0xF6C380        Zlib compressed data, compressed
16172020      0xF6C3F4        Zlib compressed data, compressed
16172196      0xF6C4A4        Zlib compressed data, compressed
16172560      0xF6C610        Zlib compressed data, compressed
16172676      0xF6C684        Zlib compressed data, compressed
16172792      0xF6C6F8        Zlib compressed data, compressed
16172908      0xF6C76C        Zlib compressed data, compressed
16173024      0xF6C7E0        Zlib compressed data, compressed
16173140      0xF6C854        Zlib compressed data, compressed
16173256      0xF6C8C8        Zlib compressed data, compressed
16173348      0xF6C924        JFFS2 filesystem, little endian
16173692      0xF6CA7C        Zlib compressed data, compressed
16174932      0xF6CF54        Zlib compressed data, compressed
16176172      0xF6D42C        Zlib compressed data, compressed
16176260      0xF6D484        Zlib compressed data, compressed
16176564      0xF6D5B4        JFFS2 filesystem, little endian
16176684      0xF6D62C        Zlib compressed data, compressed
16177928      0xF6DB08        Zlib compressed data, compressed
16178304      0xF6DC80        Zlib compressed data, compressed
16179544      0xF6E158        Zlib compressed data, compressed
16180784      0xF6E630        Zlib compressed data, compressed
16180876      0xF6E68C        Zlib compressed data, compressed
16181176      0xF6E7B8        JFFS2 filesystem, little endian
16181504      0xF6E900        Zlib compressed data, compressed
16181648      0xF6E990        Zlib compressed data, compressed
16181764      0xF6EA04        Zlib compressed data, compressed
16181880      0xF6EA78        Zlib compressed data, compressed
16181996      0xF6EAEC        Zlib compressed data, compressed
16182112      0xF6EB60        Zlib compressed data, compressed
16182228      0xF6EBD4        Zlib compressed data, compressed
16182344      0xF6EC48        Zlib compressed data, compressed
16182436      0xF6ECA4        JFFS2 filesystem, little endian
16182704      0xF6EDB0        Zlib compressed data, compressed
16182732      0xF6EDCC        JFFS2 filesystem, little endian
16182916      0xF6EE84        Zlib compressed data, compressed
16183012      0xF6EEE4        Zlib compressed data, compressed
16183040      0xF6EF00        JFFS2 filesystem, little endian
16183224      0xF6EFB8        Zlib compressed data, compressed
16183332      0xF6F024        Zlib compressed data, compressed
16183360      0xF6F040        JFFS2 filesystem, little endian
16183548      0xF6F0FC        Zlib compressed data, compressed
16183592      0xF6F128        JFFS2 filesystem, little endian
16183896      0xF6F258        Zlib compressed data, compressed
16183924      0xF6F274        JFFS2 filesystem, little endian
16184460      0xF6F48C        Zlib compressed data, compressed
16184628      0xF6F534        Zlib compressed data, compressed
16184752      0xF6F5B0        Zlib compressed data, compressed
16184876      0xF6F62C        Zlib compressed data, compressed
16185004      0xF6F6AC        Zlib compressed data, compressed
16185132      0xF6F72C        Zlib compressed data, compressed
16185260      0xF6F7AC        Zlib compressed data, compressed
16185388      0xF6F82C        Zlib compressed data, compressed
16185412      0xF6F844        JFFS2 filesystem, little endian
16185704      0xF6F968        Zlib compressed data, compressed
16185900      0xF6FA2C        Zlib compressed data, compressed
16186028      0xF6FAAC        Zlib compressed data, compressed
16186164      0xF6FB34        Zlib compressed data, compressed
16186296      0xF6FBB8        Zlib compressed data, compressed
16186432      0xF6FC40        Zlib compressed data, compressed
16186572      0xF6FCCC        Zlib compressed data, compressed
16186712      0xF6FD58        Zlib compressed data, compressed
16186736      0xF6FD70        JFFS2 filesystem, little endian
16187228      0xF6FF5C        Zlib compressed data, compressed
16187392      0xF70000        JFFS2 filesystem, little endian
16220240      0xF78050        Zlib compressed data, compressed
16221344      0xF784A0        Zlib compressed data, compressed
16222612      0xF78994        Zlib compressed data, compressed
16222700      0xF789EC        Zlib compressed data, compressed
16223000      0xF78B18        JFFS2 filesystem, little endian
16233896      0xF7B5A8        Zlib compressed data, compressed
16235168      0xF7BAA0        Zlib compressed data, compressed
16236440      0xF7BF98        Zlib compressed data, compressed
16236528      0xF7BFF0        Zlib compressed data, compressed
16236964      0xF7C1A4        Zlib compressed data, compressed
16238232      0xF7C698        Zlib compressed data, compressed
16239500      0xF7CB8C        Zlib compressed data, compressed
16239588      0xF7CBE4        Zlib compressed data, compressed
16240024      0xF7CD98        Zlib compressed data, compressed
16241296      0xF7D290        Zlib compressed data, compressed
16242568      0xF7D788        Zlib compressed data, compressed
16242656      0xF7D7E0        Zlib compressed data, compressed
16243092      0xF7D994        Zlib compressed data, compressed
16244360      0xF7DE88        Zlib compressed data, compressed
16245628      0xF7E37C        Zlib compressed data, compressed
16245716      0xF7E3D4        Zlib compressed data, compressed
16246152      0xF7E588        Zlib compressed data, compressed
16247424      0xF7EA80        Zlib compressed data, compressed
16248696      0xF7EF78        Zlib compressed data, compressed
16248784      0xF7EFD0        Zlib compressed data, compressed
16249220      0xF7F184        Zlib compressed data, compressed
16250492      0xF7F67C        Zlib compressed data, compressed
16251780      0xF7FB84        Zlib compressed data, compressed
16251868      0xF7FBDC        Zlib compressed data, compressed
16252324      0xF7FDA4        Zlib compressed data, compressed
16252928      0xF80000        JFFS2 filesystem, little endian
16318544      0xF90050        Zlib compressed data, compressed
16319812      0xF90544        Zlib compressed data, compressed
16319900      0xF9059C        Zlib compressed data, compressed
16320200      0xF906C8        JFFS2 filesystem, little endian
16320472      0xF907D8        Zlib compressed data, compressed
16321740      0xF90CCC        Zlib compressed data, compressed
16323008      0xF911C0        Zlib compressed data, compressed
16323096      0xF91218        Zlib compressed data, compressed
16323532      0xF913CC        Zlib compressed data, compressed
16323944      0xF91568        Zlib compressed data, compressed
16324040      0xF915C8        Zlib compressed data, compressed
16324156      0xF9163C        Zlib compressed data, compressed
16324252      0xF9169C        Zlib compressed data, compressed
16324348      0xF916FC        Zlib compressed data, compressed
16324464      0xF91770        Zlib compressed data, compressed
16324572      0xF917DC        Zlib compressed data, compressed
16324668      0xF9183C        Zlib compressed data, compressed
16324784      0xF918B0        Zlib compressed data, compressed
16324896      0xF91920        Zlib compressed data, compressed
16325012      0xF91994        Zlib compressed data, compressed
16325128      0xF91A08        Zlib compressed data, compressed
16325224      0xF91A68        Zlib compressed data, compressed
16325340      0xF91ADC        Zlib compressed data, compressed
16326332      0xF91EBC        Zlib compressed data, compressed
16327328      0xF922A0        Zlib compressed data, compressed
16328604      0xF9279C        Zlib compressed data, compressed
16329016      0xF92938        Zlib compressed data, compressed
16329132      0xF929AC        Zlib compressed data, compressed
16329248      0xF92A20        Zlib compressed data, compressed
16329364      0xF92A94        Zlib compressed data, compressed
16329480      0xF92B08        Zlib compressed data, compressed
16329596      0xF92B7C        Zlib compressed data, compressed
16329712      0xF92BF0        Zlib compressed data, compressed
16329872      0xF92C90        Zlib compressed data, compressed
16331144      0xF93188        Zlib compressed data, compressed
16332416      0xF93680        Zlib compressed data, compressed
16332504      0xF936D8        Zlib compressed data, compressed
16332940      0xF9388C        Zlib compressed data, compressed
16334208      0xF93D80        Zlib compressed data, compressed
16335476      0xF94274        Zlib compressed data, compressed
16335564      0xF942CC        Zlib compressed data, compressed
16336000      0xF94480        Zlib compressed data, compressed
16337272      0xF94978        Zlib compressed data, compressed
16338544      0xF94E70        Zlib compressed data, compressed
16338632      0xF94EC8        Zlib compressed data, compressed
16339068      0xF9507C        Zlib compressed data, compressed
16339480      0xF95218        Zlib compressed data, compressed
16339576      0xF95278        Zlib compressed data, compressed
16339692      0xF952EC        Zlib compressed data, compressed
16339788      0xF9534C        Zlib compressed data, compressed
16339884      0xF953AC        Zlib compressed data, compressed
16340000      0xF95420        Zlib compressed data, compressed
16340108      0xF9548C        Zlib compressed data, compressed
16340204      0xF954EC        Zlib compressed data, compressed
16340320      0xF95560        Zlib compressed data, compressed
16340432      0xF955D0        Zlib compressed data, compressed
16340548      0xF95644        Zlib compressed data, compressed
16340664      0xF956B8        Zlib compressed data, compressed
16340760      0xF95718        Zlib compressed data, compressed
16340876      0xF9578C        Zlib compressed data, compressed
16341868      0xF95B6C        Zlib compressed data, compressed
16342864      0xF95F50        Zlib compressed data, compressed
16344140      0xF9644C        Zlib compressed data, compressed
16344552      0xF965E8        Zlib compressed data, compressed
16344668      0xF9665C        Zlib compressed data, compressed
16344784      0xF966D0        Zlib compressed data, compressed
16344900      0xF96744        Zlib compressed data, compressed
16345016      0xF967B8        Zlib compressed data, compressed
16345132      0xF9682C        Zlib compressed data, compressed
16345248      0xF968A0        Zlib compressed data, compressed
16345408      0xF96940        Zlib compressed data, compressed
16346676      0xF96E34        Zlib compressed data, compressed
16347944      0xF97328        Zlib compressed data, compressed
16348032      0xF97380        Zlib compressed data, compressed
16348468      0xF97534        Zlib compressed data, compressed
16349760      0xF97A40        Zlib compressed data, compressed
16351312      0xF98050        Zlib compressed data, compressed
16352276      0xF98414        Zlib compressed data, compressed
16352296      0xF98428        JFFS2 filesystem, little endian
16352416      0xF984A0        Zlib compressed data, compressed
16352852      0xF98654        Zlib compressed data, compressed
16354120      0xF98B48        Zlib compressed data, compressed
16355388      0xF9903C        Zlib compressed data, compressed
16355476      0xF99094        Zlib compressed data, compressed
16355912      0xF99248        Zlib compressed data, compressed
16357184      0xF99740        Zlib compressed data, compressed
16358456      0xF99C38        Zlib compressed data, compressed
16358544      0xF99C90        Zlib compressed data, compressed
16358980      0xF99E44        Zlib compressed data, compressed
16359392      0xF99FE0        Zlib compressed data, compressed
16359488      0xF9A040        Zlib compressed data, compressed
16359604      0xF9A0B4        Zlib compressed data, compressed
16359700      0xF9A114        Zlib compressed data, compressed
16359796      0xF9A174        Zlib compressed data, compressed
16359912      0xF9A1E8        Zlib compressed data, compressed
16360020      0xF9A254        Zlib compressed data, compressed
16360116      0xF9A2B4        Zlib compressed data, compressed
16360232      0xF9A328        Zlib compressed data, compressed
16360344      0xF9A398        Zlib compressed data, compressed
16360460      0xF9A40C        Zlib compressed data, compressed
16360576      0xF9A480        Zlib compressed data, compressed
16360672      0xF9A4E0        Zlib compressed data, compressed
16360788      0xF9A554        Zlib compressed data, compressed
16361780      0xF9A934        Zlib compressed data, compressed
16362776      0xF9AD18        Zlib compressed data, compressed
16364052      0xF9B214        Zlib compressed data, compressed
16364464      0xF9B3B0        Zlib compressed data, compressed
16364580      0xF9B424        Zlib compressed data, compressed
16364696      0xF9B498        Zlib compressed data, compressed
16364812      0xF9B50C        Zlib compressed data, compressed
16364928      0xF9B580        Zlib compressed data, compressed
16365044      0xF9B5F4        Zlib compressed data, compressed
16365160      0xF9B668        Zlib compressed data, compressed
16365320      0xF9B708        Zlib compressed data, compressed
16366588      0xF9BBFC        Zlib compressed data, compressed
16367856      0xF9C0F0        Zlib compressed data, compressed
16367944      0xF9C148        Zlib compressed data, compressed
16368380      0xF9C2FC        Zlib compressed data, compressed
16369652      0xF9C7F4        Zlib compressed data, compressed
16370924      0xF9CCEC        Zlib compressed data, compressed
16371012      0xF9CD44        Zlib compressed data, compressed
16371448      0xF9CEF8        Zlib compressed data, compressed
16372716      0xF9D3EC        Zlib compressed data, compressed
16373984      0xF9D8E0        Zlib compressed data, compressed
16374072      0xF9D938        Zlib compressed data, compressed
16374508      0xF9DAEC        Zlib compressed data, compressed
16375780      0xF9DFE4        Zlib compressed data, compressed
16377052      0xF9E4DC        Zlib compressed data, compressed
16377140      0xF9E534        Zlib compressed data, compressed
16377576      0xF9E6E8        Zlib compressed data, compressed
16378844      0xF9EBDC        Zlib compressed data, compressed
16380112      0xF9F0D0        Zlib compressed data, compressed
16380200      0xF9F128        Zlib compressed data, compressed
16380636      0xF9F2DC        Zlib compressed data, compressed
16381908      0xF9F7D4        Zlib compressed data, compressed
16383208      0xF9FCE8        Zlib compressed data, compressed
16383296      0xF9FD40        Zlib compressed data, compressed
16383776      0xF9FF20        Zlib compressed data, compressed
16384000      0xFA0000        JFFS2 filesystem, little endian
16387932      0xFA0F5C        Zlib compressed data, compressed
16392260      0xFA2044        Zlib compressed data, compressed
16392684      0xFA21EC        Zlib compressed data, compressed
16393108      0xFA2394        Zlib compressed data, compressed
16393548      0xFA254C        Zlib compressed data, compressed
16393964      0xFA26EC        Zlib compressed data, compressed
16394388      0xFA2894        Zlib compressed data, compressed
16394796      0xFA2A2C        Zlib compressed data, compressed
16395220      0xFA2BD4        Zlib compressed data, compressed
16395640      0xFA2D78        Zlib compressed data, compressed
16396116      0xFA2F54        Zlib compressed data, compressed
16396528      0xFA30F0        Zlib compressed data, compressed
16397004      0xFA32CC        Zlib compressed data, compressed
16397428      0xFA3474        Zlib compressed data, compressed
16397832      0xFA3608        Zlib compressed data, compressed
16398236      0xFA379C        Zlib compressed data, compressed
16398640      0xFA3930        Zlib compressed data, compressed
16399120      0xFA3B10        Zlib compressed data, compressed
16399556      0xFA3CC4        Zlib compressed data, compressed
16399972      0xFA3E64        JFFS2 filesystem, little endian

WARNING: One or more files failed to extract: either no utility was found or it's unimplemented

sym@raspberrypi:~ $ 
```
binwalkじゃダメそう

```shell
sym@raspberrypi:~ $ dd if=tuya_ipc_firmware.bin of=rootfs.sqsh bs=1 skip=9109504
7667712+0 records in
7667712+0 records out
7667712 bytes (7.7 MB, 7.3 MiB) copied, 10.0272 s, 765 kB/s
sym@raspberrypi:~ $ dd if=tuya_ipc_firmware.bin of=data.jffs2 bs=1 skip=15990784
786432+0 records in
786432+0 records out
786432 bytes (786 kB, 768 KiB) copied, 1.03858 s, 757 kB/s
sym@raspberrypi:~ $ unsquashfs -l rootfs.sqsh
squashfs-root
squashfs-root/bin
squashfs-root/bin/ash
squashfs-root/bin/base64
squashfs-root/bin/busybox
squashfs-root/bin/cat
squashfs-root/bin/catv
squashfs-root/bin/chgrp
squashfs-root/bin/chmod
squashfs-root/bin/chown
squashfs-root/bin/cp
squashfs-root/bin/cttyhack
squashfs-root/bin/date
squashfs-root/bin/dd
squashfs-root/bin/df
squashfs-root/bin/dmesg
squashfs-root/bin/dnsdomainname
squashfs-root/bin/echo
squashfs-root/bin/ed
squashfs-root/bin/egrep
squashfs-root/bin/false
squashfs-root/bin/fdflush
squashfs-root/bin/fgrep
squashfs-root/bin/fsync
squashfs-root/bin/getopt
squashfs-root/bin/grep
squashfs-root/bin/hostapd
squashfs-root/bin/hostname
squashfs-root/bin/hush
squashfs-root/bin/iostat
squashfs-root/bin/ipcalc
squashfs-root/bin/iperf3
squashfs-root/bin/kill
squashfs-root/bin/linux32
squashfs-root/bin/linux64
squashfs-root/bin/ln
squashfs-root/bin/logcat
squashfs-root/bin/login
squashfs-root/bin/ls
squashfs-root/bin/mkdir
squashfs-root/bin/mknod
squashfs-root/bin/mktemp
squashfs-root/bin/mount
squashfs-root/bin/mountpoint
squashfs-root/bin/mpstat
squashfs-root/bin/mv
squashfs-root/bin/netstat
squashfs-root/bin/pidof
squashfs-root/bin/ping
squashfs-root/bin/ping6
squashfs-root/bin/printenv
squashfs-root/bin/ps
squashfs-root/bin/pwd
squashfs-root/bin/rev
squashfs-root/bin/rm
squashfs-root/bin/rmdir
squashfs-root/bin/sed
squashfs-root/bin/setarch
squashfs-root/bin/sh
squashfs-root/bin/sleep
squashfs-root/bin/stat
squashfs-root/bin/sync
squashfs-root/bin/tar
squashfs-root/bin/touch
squashfs-root/bin/true
squashfs-root/bin/umount
squashfs-root/bin/uname
squashfs-root/bin/usleep
squashfs-root/bin/vi
squashfs-root/bin/watch
squashfs-root/boot.sh
squashfs-root/consolas.ttf
squashfs-root/dev
squashfs-root/etc
squashfs-root/etc/Wireless
squashfs-root/etc/Wireless/RT2870AP
squashfs-root/etc/Wireless/RT2870AP/RT2870AP.dat
squashfs-root/etc/Wireless/RT2870STA
squashfs-root/etc/Wireless/RT2870STA/RT2870STA.dat
squashfs-root/etc/auto_mount.sh
squashfs-root/etc/fstab
squashfs-root/etc/group
squashfs-root/etc/hostname
squashfs-root/etc/hosts
squashfs-root/etc/init.d
squashfs-root/etc/init.d/rcS
squashfs-root/etc/inittab
squashfs-root/etc/mdev.conf
squashfs-root/etc/mount_mmc.sh
squashfs-root/etc/net_sh
squashfs-root/etc/net_sh/net_check.sh
squashfs-root/etc/net_sh/net_exit.sh
squashfs-root/etc/net_sh/net_run.sh
squashfs-root/etc/net_sh/net_run_eth.sh
squashfs-root/etc/net_sh/net_wifi_new.sh
squashfs-root/etc/net_sh/net_wifi_search.sh
squashfs-root/etc/net_sh/softap_start.sh
squashfs-root/etc/net_sh/softap_stop.sh
squashfs-root/etc/net_sh/tftpd32.exe
squashfs-root/etc/net_sh/udhcpd.conf
squashfs-root/etc/passwd
squashfs-root/etc/profile
squashfs-root/etc/resolv.conf
squashfs-root/etc/rootfsversion
squashfs-root/etc/sensor
squashfs-root/etc/shadow
squashfs-root/etc/umount_mmc.sh
squashfs-root/etc/webrtc_profile.ini
squashfs-root/gm
squashfs-root/gm/bin
squashfs-root/gm/bin/iwconfig
squashfs-root/gm/bin/iwgetid
squashfs-root/gm/bin/iwlist
squashfs-root/gm/bin/iwpriv
squashfs-root/gm/bin/wpa_cli
squashfs-root/gm/bin/wpa_supplicant
squashfs-root/gm/drivers
squashfs-root/gm/tools
squashfs-root/ipc_start.sh
squashfs-root/lib
squashfs-root/lib/firmware
squashfs-root/lib/ld-uClibc-0.9.33.2.so
squashfs-root/lib/ld-uClibc.so.0
squashfs-root/lib/libBaseFun.so
squashfs-root/lib/libc.so.0
squashfs-root/lib/libcrypto.so
squashfs-root/lib/libcrypto.so.1.0.0
squashfs-root/lib/libdl-0.9.33.2.so
squashfs-root/lib/libdl.so.0
squashfs-root/lib/libgcc_s.so
squashfs-root/lib/libgcc_s.so.1
squashfs-root/lib/libm-0.9.33.2.so
squashfs-root/lib/libm.so.0
squashfs-root/lib/libmbedcrypto.so.3
squashfs-root/lib/libmbedtls.so.12
squashfs-root/lib/libmbedx509.so.0
squashfs-root/lib/libnl-3.so
squashfs-root/lib/libnl-3.so.200
squashfs-root/lib/libnl-3.so.200.21.0
squashfs-root/lib/libnl-genl-3.so
squashfs-root/lib/libnl-genl-3.so.200
squashfs-root/lib/libnl-genl-3.so.200.21.0
squashfs-root/lib/libnsl-0.9.33.2.so
squashfs-root/lib/libnsl.so.0
squashfs-root/lib/libpthread-0.9.33.2.so
squashfs-root/lib/libpthread.so.0
squashfs-root/lib/libresolv-0.9.33.2.so
squashfs-root/lib/libresolv.so.0
squashfs-root/lib/librt-0.9.33.2.so
squashfs-root/lib/librt.so.0
squashfs-root/lib/libssl.so
squashfs-root/lib/libssl.so.1.0.0
squashfs-root/lib/libstdc++.so
squashfs-root/lib/libstdc++.so.6
squashfs-root/lib/libstdc++.so.6.0.17
squashfs-root/lib/libthread_db-0.9.33.2.so
squashfs-root/lib/libthread_db.so.1
squashfs-root/lib/libuClibc-0.9.33.2.so
squashfs-root/lib/libutil-0.9.33.2.so
squashfs-root/lib/libutil.so.0
squashfs-root/lib/modules
squashfs-root/lib/modules/3.10.14__isvp_turkey_1.0__
squashfs-root/lib/modules/jzmmc_v12.ko
squashfs-root/lib/modules/mmc_block.ko
squashfs-root/lib/modules/mmc_core.ko
squashfs-root/lib/modules/wifi_drv.ko
squashfs-root/linuxrc
squashfs-root/media
squashfs-root/mnt
squashfs-root/mnt/mmc
squashfs-root/mnt/mtd
squashfs-root/mnt/mtd/app
squashfs-root/mnt/mtd/app/tuya
squashfs-root/mnt/mtd/beep
squashfs-root/mnt/mtd/beep/zh
squashfs-root/mnt/mtd/beep/zh/allok.wav
squashfs-root/mnt/mtd/beep/zh/pairingfailed.wav
squashfs-root/mnt/mtd/beep/zh/qrok.wav
squashfs-root/mnt/mtd/beep/zh/resetok.wav
squashfs-root/mnt/mtd/beep/zh/wificonnected.wav
squashfs-root/mnt/mtd/beep/zh/wificonnecting.wav
squashfs-root/mnt/mtd/beep/zh/wifierror.wav
squashfs-root/mnt/mtd/etc
squashfs-root/mnt/mtd/etc/fdisk.sh
squashfs-root/mnt/mtd/etc/ipcversion
squashfs-root/mnt/mtd/lib
squashfs-root/mnt/mtd/lib/libCfAvShm.so
squashfs-root/mnt/mtd/lib/libLogManager.so
squashfs-root/mnt/mtd/lib/libaudioProcess.so
squashfs-root/mnt/mtd/lib/libhyCoreSdk.so
squashfs-root/mnt/mtd/lib/libz.so
squashfs-root/mnt/mtd/module
squashfs-root/mnt/mtd/module/NetLED_drv.ko
squashfs-root/mnt/mtd/module/audio.ko
squashfs-root/mnt/mtd/module/peripher_drv.ko
squashfs-root/mnt/mtd/module/ptz_drv.ko
squashfs-root/mnt/mtd/module/reset_drv.ko
squashfs-root/mnt/mtd/module/sensor_os02b10_t21.ko
squashfs-root/mnt/mtd/module/sensor_ov2735b_t21.ko
squashfs-root/mnt/mtd/module/sensor_ps5260_t21.ko
squashfs-root/mnt/mtd/module/sensor_sc2232h_t21.ko
squashfs-root/mnt/mtd/module/sinfo.ko
squashfs-root/mnt/mtd/module/tx-isp-t21.ko
squashfs-root/mnt/mtd/sensor
squashfs-root/mnt/mtd/sensor/os02b10-t21.bin
squashfs-root/mnt/mtd/sensor/ov2735b-t21.bin
squashfs-root/mnt/mtd/sensor/ps5260-t21.bin
squashfs-root/mnt/mtd/sensor/sc2232h-t21.bin
squashfs-root/mnt/mtd/sensor/webrtc_profile.ini
squashfs-root/opt
squashfs-root/proc
squashfs-root/root
squashfs-root/run
squashfs-root/run_cmd.sh
squashfs-root/sbin
squashfs-root/sbin/acpid
squashfs-root/sbin/arp
squashfs-root/sbin/blkid
squashfs-root/sbin/bootchartd
squashfs-root/sbin/depmod
squashfs-root/sbin/devmem
squashfs-root/sbin/fdisk
squashfs-root/sbin/findfs
squashfs-root/sbin/freeramdisk
squashfs-root/sbin/getty
squashfs-root/sbin/halt
squashfs-root/sbin/hwclock
squashfs-root/sbin/ifconfig
squashfs-root/sbin/ifdown
squashfs-root/sbin/ifenslave
squashfs-root/sbin/ifup
squashfs-root/sbin/init
squashfs-root/sbin/insmod
squashfs-root/sbin/ip
squashfs-root/sbin/ipaddr
squashfs-root/sbin/iplink
squashfs-root/sbin/iproute
squashfs-root/sbin/iprule
squashfs-root/sbin/iptunnel
squashfs-root/sbin/klogd
squashfs-root/sbin/logread
squashfs-root/sbin/losetup
squashfs-root/sbin/lsmod
squashfs-root/sbin/makedevs
squashfs-root/sbin/mdev
squashfs-root/sbin/mkdosfs
squashfs-root/sbin/mkfs.vfat
squashfs-root/sbin/mkswap
squashfs-root/sbin/modinfo
squashfs-root/sbin/modprobe
squashfs-root/sbin/nameif
squashfs-root/sbin/pivot_root
squashfs-root/sbin/poweroff
squashfs-root/sbin/reboot
squashfs-root/sbin/rmmod
squashfs-root/sbin/route
squashfs-root/sbin/setconsole
squashfs-root/sbin/slattach
squashfs-root/sbin/sulogin
squashfs-root/sbin/swapoff
squashfs-root/sbin/swapon
squashfs-root/sbin/switch_root
squashfs-root/sbin/sysctl
squashfs-root/sbin/syslogd
squashfs-root/sbin/tunctl
squashfs-root/sbin/udhcpc
squashfs-root/sbin/vconfig
squashfs-root/sbin/watchdog
squashfs-root/sbin/zcip
squashfs-root/sd_upgrade.sh
squashfs-root/share
squashfs-root/share/Africa
squashfs-root/share/Africa/Casablanca
squashfs-root/share/Africa/Harare
squashfs-root/share/Africa/Lagos
squashfs-root/share/Africa/Nairobi
squashfs-root/share/Africa/Windhoek
squashfs-root/share/America
squashfs-root/share/America/Anchorage
squashfs-root/share/America/Bogota
squashfs-root/share/America/Buenos_Aires
squashfs-root/share/America/Caracas
squashfs-root/share/America/Chicago
squashfs-root/share/America/Costa_Rica
squashfs-root/share/America/Denver
squashfs-root/share/America/Indianapolis
squashfs-root/share/America/Los_Angeles
squashfs-root/share/America/Mexico_City
squashfs-root/share/America/Montevideo
squashfs-root/share/America/Montreal
squashfs-root/share/America/New_York
squashfs-root/share/America/Phoenix
squashfs-root/share/America/Recife
squashfs-root/share/America/Regina
squashfs-root/share/America/Sao_Paulo
squashfs-root/share/America/Tegucigalpa
squashfs-root/share/America/Thule
squashfs-root/share/America/Winnipeg
squashfs-root/share/Asia
squashfs-root/share/Asia/Almaty
squashfs-root/share/Asia/Amman
squashfs-root/share/Asia/Baghdad
squashfs-root/share/Asia/Baku
squashfs-root/share/Asia/Bangkok
squashfs-root/share/Asia/Beirut
squashfs-root/share/Asia/Calcutta
squashfs-root/share/Asia/Colombo
squashfs-root/share/Asia/Dhaka
squashfs-root/share/Asia/Dubai
squashfs-root/share/Asia/Hong_Kong
squashfs-root/share/Asia/Irkutsk
squashfs-root/share/Asia/Jerusalem
squashfs-root/share/Asia/Kabul
squashfs-root/share/Asia/Karachi
squashfs-root/share/Asia/Katmandu
squashfs-root/share/Asia/Krasnoyarsk
squashfs-root/share/Asia/Kuala_Lumpur
squashfs-root/share/Asia/Kuwait
squashfs-root/share/Asia/Magadan
squashfs-root/share/Asia/Rangoon
squashfs-root/share/Asia/Seoul
squashfs-root/share/Asia/Shanghai
squashfs-root/share/Asia/Taipei
squashfs-root/share/Asia/Tehran
squashfs-root/share/Asia/Tokyo
squashfs-root/share/Asia/Vladivostok
squashfs-root/share/Asia/Yakutsk
squashfs-root/share/Asia/Yekaterinburg
squashfs-root/share/Asia/Yerevan
squashfs-root/share/Atlantic
squashfs-root/share/Atlantic/Azores
squashfs-root/share/Atlantic/Cape_Verde
squashfs-root/share/Atlantic/South_Georgia
squashfs-root/share/Australia
squashfs-root/share/Australia/Adelaide
squashfs-root/share/Australia/Brisbane
squashfs-root/share/Australia/Hobart
squashfs-root/share/Australia/Perth
squashfs-root/share/Australia/Sydney
squashfs-root/share/Canada
squashfs-root/share/Canada/Newfoundland
squashfs-root/share/Etc
squashfs-root/share/Etc/GMT-12
squashfs-root/share/Europe
squashfs-root/share/Europe/Amsterdam
squashfs-root/share/Europe/Athens
squashfs-root/share/Europe/Belgrade
squashfs-root/share/Europe/Brussels
squashfs-root/share/Europe/Bucharest
squashfs-root/share/Europe/Dublin
squashfs-root/share/Europe/Helsinki
squashfs-root/share/Europe/Minsk
squashfs-root/share/Europe/Moscow
squashfs-root/share/Europe/Warsaw
squashfs-root/share/Pacific
squashfs-root/share/Pacific/Apia
squashfs-root/share/Pacific/Auckland
squashfs-root/share/Pacific/Fiji
squashfs-root/share/Pacific/Guam
squashfs-root/share/Pacific/Honolulu
squashfs-root/share/Pacific/Majuro
squashfs-root/share/Pacific/Tongatapu
squashfs-root/sys
squashfs-root/system
squashfs-root/tmp
squashfs-root/usr
squashfs-root/usr/bin
squashfs-root/usr/bin/[
squashfs-root/usr/bin/[[
squashfs-root/usr/bin/awk
squashfs-root/usr/bin/basename
squashfs-root/usr/bin/cal
squashfs-root/usr/bin/clear
squashfs-root/usr/bin/cmp
squashfs-root/usr/bin/cryptpw
squashfs-root/usr/bin/deallocvt
squashfs-root/usr/bin/diff
squashfs-root/usr/bin/dirname
squashfs-root/usr/bin/dos2unix
squashfs-root/usr/bin/du
squashfs-root/usr/bin/dumpleases
squashfs-root/usr/bin/env
squashfs-root/usr/bin/find
squashfs-root/usr/bin/flock
squashfs-root/usr/bin/fold
squashfs-root/usr/bin/free
squashfs-root/usr/bin/ftpget
squashfs-root/usr/bin/ftpput
squashfs-root/usr/bin/fuser
squashfs-root/usr/bin/groups
squashfs-root/usr/bin/hd
squashfs-root/usr/bin/hexdump
squashfs-root/usr/bin/hostid
squashfs-root/usr/bin/id
squashfs-root/usr/bin/ipcrm
squashfs-root/usr/bin/ipcs
squashfs-root/usr/bin/killall
squashfs-root/usr/bin/less
squashfs-root/usr/bin/logger
squashfs-root/usr/bin/logname
squashfs-root/usr/bin/lsof
squashfs-root/usr/bin/lsusb
squashfs-root/usr/bin/md5sum
squashfs-root/usr/bin/mesg
squashfs-root/usr/bin/mkpasswd
squashfs-root/usr/bin/nc
squashfs-root/usr/bin/nmeter
squashfs-root/usr/bin/nslookup
squashfs-root/usr/bin/passwd
squashfs-root/usr/bin/pgrep
squashfs-root/usr/bin/pkill
squashfs-root/usr/bin/pmap
squashfs-root/usr/bin/printf
squashfs-root/usr/bin/pscan
squashfs-root/usr/bin/pstree
squashfs-root/usr/bin/pwdx
squashfs-root/usr/bin/readlink
squashfs-root/usr/bin/realpath
squashfs-root/usr/bin/renice
squashfs-root/usr/bin/reset
squashfs-root/usr/bin/resize
squashfs-root/usr/bin/seq
squashfs-root/usr/bin/smemcap
squashfs-root/usr/bin/sort
squashfs-root/usr/bin/sum
squashfs-root/usr/bin/tail
squashfs-root/usr/bin/tcpsvd
squashfs-root/usr/bin/telnet
squashfs-root/usr/bin/test
squashfs-root/usr/bin/tftp
squashfs-root/usr/bin/time
squashfs-root/usr/bin/timeout
squashfs-root/usr/bin/top
squashfs-root/usr/bin/tr
squashfs-root/usr/bin/traceroute
squashfs-root/usr/bin/traceroute6
squashfs-root/usr/bin/tty
squashfs-root/usr/bin/ttysize
squashfs-root/usr/bin/udpsvd
squashfs-root/usr/bin/unix2dos
squashfs-root/usr/bin/unzip
squashfs-root/usr/bin/uptime
squashfs-root/usr/bin/uudecode
squashfs-root/usr/bin/uuencode
squashfs-root/usr/bin/vlock
squashfs-root/usr/bin/volname
squashfs-root/usr/bin/wc
squashfs-root/usr/bin/wget
squashfs-root/usr/bin/whoami
squashfs-root/usr/bin/whois
squashfs-root/usr/bin/xargs
squashfs-root/usr/bin/yes
squashfs-root/usr/lib
squashfs-root/usr/lib32
squashfs-root/usr/sbin
squashfs-root/usr/sbin/addgroup
squashfs-root/usr/sbin/adduser
squashfs-root/usr/sbin/arping
squashfs-root/usr/sbin/brctl
squashfs-root/usr/sbin/chpasswd
squashfs-root/usr/sbin/chroot
squashfs-root/usr/sbin/delgroup
squashfs-root/usr/sbin/deluser
squashfs-root/usr/sbin/dhcprelay
squashfs-root/usr/sbin/dnsd
squashfs-root/usr/sbin/ether-wake
squashfs-root/usr/sbin/fakeidentd
squashfs-root/usr/sbin/fbset
squashfs-root/usr/sbin/fdformat
squashfs-root/usr/sbin/flash_eraseall
squashfs-root/usr/sbin/flashcp
squashfs-root/usr/sbin/httpd
squashfs-root/usr/sbin/ifplugd
squashfs-root/usr/sbin/inetd
squashfs-root/usr/sbin/killall5
squashfs-root/usr/sbin/nbd-client
squashfs-root/usr/sbin/ntpd
squashfs-root/usr/sbin/rdate
squashfs-root/usr/sbin/rdev
squashfs-root/usr/sbin/readprofile
squashfs-root/usr/sbin/rtcwake
squashfs-root/usr/sbin/telnetd
squashfs-root/usr/sbin/tftpd
squashfs-root/usr/sbin/udhcpd
squashfs-root/usr/share
squashfs-root/usr/share/udhcpc
squashfs-root/usr/share/udhcpc/default.script
squashfs-root/usr/share/udhcpc/default.script.d
squashfs-root/var
squashfs-root/var/cache
squashfs-root/var/lib
squashfs-root/var/lib/misc
squashfs-root/var/lock
squashfs-root/var/log
squashfs-root/var/run
squashfs-root/var/spool
squashfs-root/var/tmp
squashfs-root/var/www
sym@raspberrypi:~ $ jefferson data.jffs2 -d jffs2-out
dumping fs to /home/sym/jffs2-out (endianness: <)
Jffs2_raw_inode count: 20
Jffs2_raw_dirent count: 20
writing S_ISREG not_load_usbrj45
writing S_ISREG wpa_supplicant.conf
writing S_ISREG syscfg.ini
writing S_ISREG tuya_enckey.db
writing S_ISREG tuya_user.db
writing S_ISREG tuya_user.db_bak
writing S_ISREG AjyUpgradeFirmware.sh
writing S_ISREG FreeResForUpgrade.sh
writing S_ISREG WorkLedFlash.sh
writing S_ISREG def_syscfg.ini
writing S_ISREG def_userctx.bin
writing S_ISREG function.ini
writing S_ISREG hardware.ini
writing S_ISREG lighttpd.conf
writing S_ISREG modules.conf
writing S_ISREG udhcpd.conf
writing S_ISREG userctx.bin
writing S_ISREG vg_boot.sh
writing S_ISREG sinfo.conf
writing S_ISREG log_seq_stat
sym@raspberrypi:~ $
```

## パスワードクラック
以下のようなSDを用意してさして起動する。
```shell
yoshiakisuyama@Air-2024fffe tuya-702jbu % dd if=backuped_firmware.bin of=sysCfg.bin bs=1 skip=15990784 count=393216
393216+0 records in
393216+0 records out
393216 bytes transferred in 0.609495 secs (645150 bytes/sec)
yoshiakisuyama@Air-2024fffe tuya-702jbu % cp sysCfg.bin /Volumes/UDISK/sysCfg.bin
yoshiakisuyama@Air-2024fffe tuya-702jbu % cp after_upgrade.sh /Volumes/UDISK 
yoshiakisuyama@Air-2024fffe tuya-702jbu % ls /Volumes/UDISK 
System Volume Information       after_upgrade.sh                sysCfg.bin
```
クラック完了。root/パスワードなしでログインできる。アップグレード前のsysCfg.binはsysCfg.bin.bakとして保存されるっぽい？

```shell
[root@Ingenic-uc1_1:~]# [3.0|coreNet.c|RefreshNetInfo,657] RefreshNetInfo :IP:192.168.0.1,MASK:255.255.255.0,GateWay: 
echo "hello from [3.0|coreNet.c|RefreshNetInfo,657] RefreshNetInfo :IP:192.168.0.1,MASK:255.255.255.0,GateWay: 
root!"
hello from root!
[root@Ingenic-uc1_1:~]# 
```

GPIO
```shell
[root@Ingenic-uc1_1:~]# mount -t debugfs none /sys/kernel/debug; cat /sys/kernel
/debug/gpio
GPIOs 0-31, GPIO A:
 gpio-1   (gpio_spk_en         ) out lo
 gpio-18  (os02b10_reset       ) out hi

GPIOs 32-63, GPIO B:
 gpio-40  (peripher            ) out lo
 gpio-49  (peripher            ) out lo
 gpio-50  (reset               ) in  hi
 gpio-52  (mmc_detect          ) in  lo

GPIOs 64-95, GPIO C:
 gpio-64  (home key            ) in  hi
 gpio-72  (peripher            ) out hi
 gpio-73  (NetLED              ) out lo
 gpio-79  (peripher            ) out lo
 gpio-80  (peripher            ) out lo

GPIOs 96-127, GPIO D:

GPIOs 128-159, GPIO E:

GPIOs 160-191, GPIO F:
[root@Ingenic-uc1_1:~]# 
```


