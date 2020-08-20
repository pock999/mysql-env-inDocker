# 在docker建立mysql server

# Step

1. 安裝 docker, docker-compose

2. 將`docker-compose.yml.default` 檔名改成 `docker-compose.yml`

3. 編輯 `docker-compose.yml`，選擇`image`(mysql映像檔以及版本)，定義`port`, `user`, `password`, `root password`

4. 開命令列並在該目錄下執行 `docker-compose up -d`
  - 執行 `docker ps` 看看有沒有開啟成功，這裡可以看到container id
  - 執行 `docker exec -it <container_id | container_name> /bin/bash` 即可進入該container的bash
  - 進入bash後，執行`mysql -u root -p`按下enter後輸入密碼，即可進入mysql
5. 測試mysql是否運行，先將`test_con.js.default`改成`test_con.js`並改上密碼，執行`node test.con.js`看看是否顯示`Connected`
  （先裝node.js, 運行`npm install`或`yarn` ）

6. 開啟資料庫UI，連上
host:127.0.0.1
port: 3306 (看你`docker-compose.yml`怎麼編輯的)

-- END --


參考：
 - https://www.youtube.com/watch?v=ozKxWsojYJ4&t=36s
 - https://github.com/aschmelyun/docker-compose-laravel
