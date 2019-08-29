<?php
header('Content-type:text/html;charset=utf-8');
header('Access-Control-Allow-Origin:*');
//连接数据库
$servername = "localhost";
$username = "root";
$password = "root";


//创建连接
$conn = mysqli_connect($servername,$username,$password);
//检测连接
if(mysqli_connect_error()){
	die('连接失败');
}
echo "连接成功";
?>