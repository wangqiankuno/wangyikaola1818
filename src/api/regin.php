<?php
  //链接
    include('context.php');
  
    //注册
  $name=isset($_GET['username'])? $_GET['username'] : null ;
  $mima=isset($_GET['password'])? $_GET['password'] : null ;

 $sql="insert into yonghu(name,mima) values('$name','$mima')" ;
//执行
 $result= $conn->query($sql);

 if($result){
    echo 'success';
 }else{
    echo 'fail';
 }
?>