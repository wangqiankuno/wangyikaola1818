<?php
  //链接
    include('context.php');
  
    //注册
  $name=isset($_POST['username'])? $_POST['username'] : '15737354734' ;
  $mima=isset($_POST['password'])? $_POST['password'] : '123456' ;
// echo $name,$mima;
 $sql="insert into yonghu(name,mima) values('$name','$mima')";
//执行
 $result= $conn->query($sql);

//  var_dump($result);
 if($result){
    echo 'success';
 }else{
    echo 'fail';
 }
?>