<?php
//查找所有的数据
include 'context.php';
//2.查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');

$name=isset($_POST['shoujihao'])?$_POST['shoujihao'] :'';
// $mima=isset($_GET['password'])?$_GET['password'] :"1";
// echo $mima;
     //编写sql语句
   //  $sql = "INSERT INTO yonghu(name) VALUES($name)";

    $res=$conn->query("select * from yonghu where name='$name'");
   //  $result = $conn->query($sql);

// var_dump($res);
    //使用查询结果集
    //得到数组
 if($res->num_rows){
    echo 'success';
 }else{
    echo 'fail';
 }
    //释放查询结果集，避免资源浪费
   //  $result->close();

    //把结果输出到前台
   //  echo json_encode($row);
   //  关闭数据库，避免资源浪费
   //  $conn->close();
?>