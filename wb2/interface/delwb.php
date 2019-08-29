<?php

require('./model/_connect.php');

$id = $_REQUEST['id'];
// $detail = $_REQUEST['detail'];
// $idea = $_REQUEST['idea'];

// $sql = "INSERT INTO wq_list (wq_title,wq_detail,wq_idea) VALUES ('$title','$detail','$idea')";
// $result = mysqli_query($conn,$sql);

	//删除名字叫wangwu的人
	echo $title;
	$sqlDelect = "DELETE FROM wb_list WHERE wb_id='$id'";
	// //执行删除语句
	$result =  mysqli_query($conn,$sqlDelect);
if($result){
	echo '1';
	echo '删除成功';
}else{
	echo '0';
	echo '删除失败';
}

?>