<?php
	header('Access-Control-Allow-Origin:*');
	header('Content-type:text/html;charset=utf-8');
	
	//获取用户提交的数据
	$name = $_POST['username'];//获取用户名
	$password = $_POST['password'];//获取密码

	
	
	//进行数据库验证
	//连接数据库
	$conn = mysqli_connect('localhost','root','root','wbiao',3306);
	// //检查连接是否有问题
	
	if(mysqli_connect_error()){
		echo "fail";
	}else{
		$sql1="SELECT * FROM info WHERE name='$name'AND pas=$password";
		$result=mysqli_query($conn,$sql1);
		
		if( mysqli_num_rows($result)>0 ){
			echo 1;
		}else{
			echo 2;
		}
		
		
	}
	
	
?>