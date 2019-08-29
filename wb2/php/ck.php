<?php
	header('Content-type:text/html;charset=utf-8');
	header('Access-Control-Allow-Origin:*');
	//获取用户提交的数据
	$name2 = $_POST['username'];//获取用户名
	$conn = mysqli_connect('localhost','root','root','wbiao',3306);
	//检查连接是否有问题
	if(mysqli_connect_error()){
		echo "fail";
	}else{
		//连接成功
		$sql = "SELECT * FROM info WHERE name='$name2' ";
		//获取查询结构
		$result = mysqli_query($conn,$sql);
		//看结果有几行
		$row = mysqli_num_rows($result);
		if($row>0){
			
			echo 1;
		}else{
			echo 0;
		}
	}
?>