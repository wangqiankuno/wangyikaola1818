<?php
//创建连接数据库
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = '1810';
// 1.创建连接,测试是否连接成功
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        // var_dump($conn->connect_error);
           
    }
     $conn->set_charset('utf8');
    // echo "链接成功";
?>