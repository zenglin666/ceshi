<?php
	header('Access-Control-Allow-Origin:*');
	header('Content-type:text/html;charset=utf-8');
	
	//获取用户提交的数据
	$name = $_POST['username'];//获取用户名
	$password = $_POST['password'];//获取密码

	// setcookie('username',"$name",time()+7*24*60*60);
	// $name2 = $_COOKIE['username'];
	//进行数据库验证
	//连接数据库
	$conn = mysqli_connect('localhost','root','root','wbiao',3306);
	// //检查连接是否有问题
	
	if(mysqli_connect_error()){
		echo "fail";
	}else{
		
		$sql1="INSERT INTO info (name,pas) VALUES ('$name','$password')";
		$result=mysqli_query($conn,$sql1);
		echo $name;
		echo $password;
		
	}
	

?>