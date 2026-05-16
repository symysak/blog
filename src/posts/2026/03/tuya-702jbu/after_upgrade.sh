#!/bin/sh
# 1. アンマウントされている設定領域を再度マウント
mount -t jffs2 /dev/mtdblock4 /var/syscfg

# 2. 起動の最終段階でパスワードを消す仕掛け（ipc_after.sh）を作成
cat << 'INNER' > /var/syscfg/ipc_after.sh
#!/bin/sh
sleep 5
# rootパスワードを消去（空にする）
passwd -d root
# 完了をシリアルに出力
echo "--- [SUCCESS] ROOT PASSWORD CLEARED ---" > /dev/ttyS1
INNER

# 3. 実行権限を付与
chmod +x /var/syscfg/ipc_after.sh

# 4. 完了をシリアルに出力
echo "--- [DONE] PASSWORD RESET HOOK INSTALLED ---" > /dev/ttyS1
