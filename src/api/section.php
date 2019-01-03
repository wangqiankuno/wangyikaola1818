<?php

 include 'context.php';

$name=isset($_GET['number'])?$_GET['number'] :null;

$sql="select *from yonghu where type='$name' ";

$result=$conn->query($sql);

//得到数组
$row = $result->fetch_all(MYSQLI_ASSOC);
//释放查询集
$result->close();
//打印到前台
echo json_encode($row,JSON_UNESCAPED_UNICODE) ;
//关闭数据库
$conn->close();
?>