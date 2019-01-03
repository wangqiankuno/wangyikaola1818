<?php
//登录
 include('context.php');


$name=isset($_GET['username'])? $_GET['username'] : '' ;
// echo $name;
$mima=isset($_GET['password'])? $_GET['password'] : '' ;
// echo $mima;
// $sql="select * from yonghu where name='$name' and mima='$mima'";
$res=$conn->query("select * from yonghu where name='$name' and mima = '$mima'");
// $result=$conn->query($sql);
//    var_dump($res);
if($res->num_rows){
    echo 'success';
}else {
    echo 'fail';
}
// // 关闭数据库，避免资源浪费
// $conn->close();
?>