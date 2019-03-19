<?php
     //配置参数
     $servername = "localhost";
     $username = "root";
     $password = "";
     $dbname = '1810';
 
     // header('content-type:text/html;charset=utf-8');
     // 创建连接(构造函数的方法) $conn对象 js中调用对象的属性是 arr.lenght
     // php中调用属性和方法是用 -> $conn ->lenght  方法后面加括号
     $conn = new mysqli($servername, $username, $password, $dbname);
 
     //查询前设置编码，防止输出乱码
     $conn->set_charset('utf8');
     // 检测连接判断是否连接成功
     if ($conn->connect_error) {
             //die打印失败原因
             die("出错原因: " . $conn->connect_error);
     } 
    //   echo "连接成功";
    
 
?>