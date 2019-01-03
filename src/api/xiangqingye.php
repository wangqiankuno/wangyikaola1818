<?php
//查找所有的数据
include 'context.php';


  $name=isset($_GET['id'])? $_GET['id'] : null ;
//2.查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');
     //编写sql语句
    $result1 = $conn->query('select * from liebiaoye WHERE id='.$name.'');
    //获取查询结果集
    // $result = $conn->query($sql);

    //使用查询结果集
    //得到数组

   $row1 = $result1->fetch_all(MYSQLI_ASSOC);
    //释放查询结果集，避免资源浪费
    $result1->close();
    // $arr=array(
    //     'all'=>$row,
    //     'one'=>$row1,
    //     );
    //把结果输出到前台
    echo json_encode($row1);

    // 关闭数据库，避免资源浪费
    $conn->close();
?>
