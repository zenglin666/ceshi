<?php

require('./model/_connect.php');
$id = $_REQUEST['id'];
// $title = $_REQUEST['title'];
// $detail = $_REQUEST['detail'];
// $name = $_REQUEST['name'];
// $img  = $_REQUEST['img'];
// $caizhi = $_REQUEST['caizhi'];
// $price = $_REQUEST['price'];
$num = $_REQUEST['num'];
// $remark = $_REQUEST['remark'];

//修改数量
$sql = "UPDATE wb_list SET wb_num='{$num}' WHERE wb_id='{$id}'";
//修改多个
// $sql = "UPDATE wb_list SET wb_num='{$num}',wb_name ='{$name}' WHERE wb_id='{$id}'";

//执行更新语句
$result = mysqli_query($conn,$sql);
//修改表中的数据
if($result){
	echo '1';
	echo '修改成功';
}else{
	echo '0';
	echo '修改失败';
}

?>