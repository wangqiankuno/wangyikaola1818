<?php
  //链接
  include 'conn.php';
  
    //购物车
$names=isset($_GET['names'])? $_GET['names'] : null ;
$cookie=isset($_GET['cookie'])? $_GET['cookie'] : null ;
$imagess=isset($_GET['imagess'])? $_GET['imagess'] : null ;
$cny=isset($_GET['cny'])? $_GET['cny'] : null ;
$goodslist=isset($_GET['goodslist'])? $_GET['goodslist'] : null ;
$ssr=isset($_GET['ssr'])? $_GET['ssr'] : null ;
$qty=isset($_GET['qty'])? $_GET['qty'] : null ;
$suoyin=isset($_GET['suoyin'])? $_GET['suoyin'] : null ;
$yes=isset($_GET['yes'])? $_GET['yes'] : null ;
$del=isset($_GET['del'])? $_GET['del'] : null ;
$id=isset($_GET['id'])? $_GET['id'] : null ;
$dels=isset($_GET['dels'])? $_GET['dels'] : null ;
 // $sql="insert into gouwuche(name) values('$name')" ;
//执行
 // $result= $conn->query($sql);

 if($yes){
        $res = $conn->query('select * from gouwuche where name="'.$cookie.'"and suoyin="'.$suoyin.'"');
        if($res->num_rows > 0){
            $contents = $res->fetch_all(MYSQLI_ASSOC);
            $ccc = $contents[0]["qty"] + $qty;
            $res = $conn->query('
                    update gouwuche set qty="'.$ccc.'" where suoyin="'.$suoyin.'" and name="'.$cookie.'"');
            echo "品名已存在";
        }else{
            $ress = $conn->query('insert into gouwuche (images,jiage,qty,jieshao,name,suoyin) values ("'.$imagess.'","'.$cny.'","'.$qty.'","'.$names.'","'.$cookie.'","'.$suoyin.'")');
            echo "成功";
        }
 }else if($ssr){
    // echo 666;
    // $sql="select * from gouwuche where name='$goodslist'";
    $resa = $conn->query('select * from gouwuche where name="'.$goodslist.'"');
        $contents = $resa->fetch_all(MYSQLI_ASSOC);
        // var_dump($contents);
        $resa->close();
        $conn->close();
        echo json_encode($contents,JSON_UNESCAPED_UNICODE);

 }else if($del){

        // $del = 'SELECT * FROM gouwuche WHERE gid='.$id.' AND name='.$name;

        $resd = $conn->query('delete from gouwuche where name='.$names.' AND id='.$id);

        // $resa = $conn->query('select * from gouwuche where name="'.$names.'"');
        // $contents = $resa->fetch_all(MYSQLI_ASSOC);
        // // var_dump($contents);
        // $resa->close();
        // $conn->close();
        // echo json_encode($contents,JSON_UNESCAPED_UNICODE);



 }else if($dels){

    // $del = 'SELECT * FROM gouwuche WHERE gid='.$id.' AND name='.$name;

    $resd = $conn->query('DELETE FROM gouwuche');

    // $resa = $conn->query('select * from gouwuche where name="'.$names.'"');
    // $contents = $resa->fetch_all(MYSQLI_ASSOC);
    // // var_dump($contents);
    // $resa->close();
    // $conn->close();
    // echo json_encode($contents,JSON_UNESCAPED_UNICODE);



}else{
    echo 'fail';
 }
?>