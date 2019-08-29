<?php

header('Content-type:text/html;charset=utf-8');
header('Access-Control-Allow-Origin:*');

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "wbiao";
//创建连接
$conn = mysqli_connect($servername,$username,$password,$dbname);

//检测连接
if(mysqli_connect_error()){
	die('连接失败');
}
// id: 2,
// name: "法国赫柏林旗舰店",

$sql = "CREATE TABLE info (
			name VARCHAR(300) NOT NULL,
			pas VARCHAR(30) NOT NULL
		
		)";

$result = mysqli_query($conn,$sql);
if($result){
	echo "表格创建成功";
}else{
	echo "表格创建失败";
};
?>