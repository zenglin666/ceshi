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
// img: "./img/ganwb02.png",
// detail: "瑞士艺术制表大师爱保时(EPOS)-Emotion...",
// caizhi: "真皮蓝色牛皮",
// price: 5050,
// num: 1
// wb_remark: 备注
//使用sql语句建表
$sql = "CREATE TABLE wb_list (
			wb_id INT(6) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
			wb_title VARCHAR(300) NOT NULL,
			wb_detail VARCHAR(30) NOT NULL,
			wb_name VARCHAR(30) NOT NULL,
			wb_img VARCHAR(300) NOT NULL,
			wb_caizhi VARCHAR(30) NOT NULL,
			wb_price VARCHAR(30) NOT NULL,
			wb_num VARCHAR(30) NOT NULL,
			wb_remark VARCHAR(30) NOT NULL,
			submission_date TIMESTAMP
		)";

$result = mysqli_query($conn,$sql);
if($result){
	echo "表格创建成功";
}else{
	echo "表格创建失败";
};
?>