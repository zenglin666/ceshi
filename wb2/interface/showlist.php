<?php
	require('./model/_connect.php');

	//查询语句
	$sql = "SELECT * FROM wb_list";
	$result = mysqli_query($conn,$sql);
	$rows = mysqli_num_rows($result);
	$res_arr = array();//里面存放结果中的所有行
	if($rows>0){
		while($rows>0){//7
			$row = mysqli_fetch_assoc($result);//结果中的一行
			$rows--;
			array_push($res_arr,$row);
		}
	}else{
		array_push($res_arr,null);		
	}
	//把结果转码返回
	echo json_encode(array('datalist'=>$res_arr));
?>