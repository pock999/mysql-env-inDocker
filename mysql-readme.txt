mysql

Docker 安裝
docker pull mysql

Docker run(create) mysql container
docker run -di --name <container 名稱> -p 3308:3306 -e MYSQL_ROOT_PASSWORD=密碼 mysql

======= 以上先不要參考 =======

進入docker容器command line
docker exec -it mysqldocker /bin/bash

啟動 mysql 
Mysql -u root -p (enter)
<輸入密碼>

啟動
Docker start <container id>

停止
Docker stop <container id>

------------------------------
Docker-compose

-- docker-compose.yml
version: '3'
services:
  mysql:
    image: mysql:5.7.29
    container_name: mysqldocker
    restart: unless-stopped
    tty: true
    ports:
      - "3306:3306"
    environment:
      MYSQL_USER: <USER>
      MYSQL_PASSWORD: <PASSWORD>
      MYSQL_ROOT_PASSWORD: <PASSWORD>
      SERVICE_TAGS: dev
      SERVICE_NAME: mysql



-----
docker-compose up -d

連上 127.0.0.1
3306
