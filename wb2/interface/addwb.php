<?php

require('./model/_connect.php');
$id = $_REQUEST['id'];
$title = $_REQUEST['title'];
$detail = $_REQUEST['detail'];
$name = $_REQUEST['name'];
$img  = $_REQUEST['img'];
$caizhi = $_REQUEST['caizhi'];
$price = $_REQUEST['price'];
$num = $_REQUEST['num'];
$remark = $_REQUEST['remark'];

$sql = "INSERT INTO wb_list (wb_id,wb_title,wb_detail,wb_name,wb_img,wb_caizhi,wb_price,wb_num,wb_remark) 
VALUES ('$id','$title','$detail','$name','$img','$caizhi','$price','$num','$remark')";
$result = mysqli_query($conn,$sql);
if($result){
	echo '1';
	echo '添加成功';
}else{
	echo '0';
	echo '添加失败';
}

?>