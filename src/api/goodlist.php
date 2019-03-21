<?php
//查找所有的数据
include 'conn.php';

$jiage=isset($_GET['jiage'])? $_GET['jiage'] : null ;
$sheng=isset($_GET['sheng'])? $_GET['sheng'] : null ;
$jiang=isset($_GET['jiang'])? $_GET['jiang'] : null ;
//2.查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');

    if($sheng == 3){
     //编写sql语句
     $sql = 'select * from liebiaoye';
     $result = $conn->query($sql);
     $row = $result->fetch_all(MYSQLI_ASSOC);
        // $row1 = $result1->fetch_all(MYSQLI_ASSOC);
    //释放查询结果集，避免资源浪费
    $result->close();
    // $arr=array(
    //     'all'=>$row,
    //     'one'=>$row1,
    //     );
    //把结果输出到前台
    echo json_encode($row);

    }

    // $result1 = $conn->query('select * from liebiaoye WHERE id='.$name.'');
    //获取查询结果集
    

  //3.执行查询语句，得到查询结果集(对象)
  
    // if($sortBy){
    //     if($desc == 'true'){
    //         $res = $conn->query('select * from liebiaoye order by '.$sortBy.' desc'); 
    //     }else{
    //         $res = $conn->query('select * from liebiaoye order by '.$sortBy); 
    //     }
    // }
    // else{
    //     $res = $conn->query('select * from liebiaoye');        
    // }
    

//排序
if($sheng==1){
        //查询数据库（结果集）
    $res = $conn->query("SELECT * FROM liebiaoye ORDER BY jiage"); 
    $concet = $res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($concet,JSON_UNESCAPED_UNICODE);
}

if($jiang==2){
    //查询数据库（结果集）
    $sql="SELECT * FROM liebiaoye ORDER BY id DESC";
    $res = $conn->query($sql);
    $concet = $res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($concet,JSON_UNESCAPED_UNICODE);
}

   //  //使用查询结果集
   //  //得到数组
    


   //  // 关闭数据库，避免资源浪费
   //  $conn->close();
?>





