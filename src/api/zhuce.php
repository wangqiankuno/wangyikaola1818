<?php
//查找所有的数据
include 'context.php';
//2.查询前设置编码，防止输出乱码
   //  $conn->set_charset('utf8');

$name = isset($_POST["shoujihao"]) ? $_POST["shoujihao"] : '';
// var_dump($res);
    $res=$conn->query("select * from yonghu where name='$name'");
   //  $result = $conn->query($sql);

// var_dump($res);

 if($res->num_rows){
    //存在
    echo 'yes';
 }else{
    echo 'no';
 }
    //释放查询结果集，避免资源浪费
   //  $result->close();

    //把结果输出到前台
   //  echo json_encode($row);
   //  关闭数据库，避免资源浪费
   //  $conn->close();
?>