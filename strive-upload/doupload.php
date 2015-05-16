<?php
header("Content-type: text/html; charset=utf-8");
$typelist=array('image/jpeg','image/jpg','image/png','image/gif'); //允许上传的类型
$path="./uploads/"; //定义文件上传的目录

//执行图片上传
//1. 获取图片上传信息
$upfile=$_FILES['pic'];
//2. 过滤上传文件的错误号
if($upfile['error']>0){
	switch($upfile['error']){
		case 1:
			$info="文件大小超过了php.ini中 upoad_max_filesize大小的限制";
			break;
		case 2:
			$info="文件大小超过了html表单中 MAX_FILE_SIZE大小的限制";
			break;
		case 3:
			$info="文件部分上传";
			break;
		case 4:
			$info="没有文件上传";
			break;
		case 6:
			$info="找不到临时文件夹";
			break;
		case 7:
			$info="文件写入失败";
			break;
	}
	die($info);	
}
//3. 本次上传文件大小的过滤
if($upfile['size']>10000000000000){
	die('上传文件超过限制');
}

//4. 类型的过滤
if(!in_array($upfile['type'],$typelist)){
	die('上传文件类型非法'.$upfile['type']);
}

//5. 上传后的文件名重新定义
$fileinfo=pathinfo($upfile['name']); //解析上传文件的名字
do{
	$newFile=date('YmdHis').rand(1000,9999).'.'.$fileinfo['extension'];	
}while(file_exists($path.$newFile));

//6. 执行文件上传
//判断是不是一个上传的文件
if(is_uploaded_file($upfile['tmp_name'])){
	//移动上传文件
	if(move_uploaded_file($upfile['tmp_name'],$path.$newFile)){
		echo '文件上传成功！';	
		echo '<h3><a href="file.html">继续上传</a></h3>';
	}else{
		die("文件上传失败了");	
	}
}else{
	die('不是一个上传文件');	
}
?>