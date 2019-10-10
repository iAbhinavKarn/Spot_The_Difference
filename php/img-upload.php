<?php
$date = date('mdYHis', time());
if(is_array($_FILES)) {
	if(is_uploaded_file($_FILES['img1']['tmp_name']) && is_uploaded_file($_FILES['img2']['tmp_name'])) 
	{
		$fileName_1 = $date . '__1' . '.' . pathinfo($_FILES['img1']['name'], PATHINFO_EXTENSION);
		$fileName_2 = $date . '__2' . '.' . pathinfo($_FILES['img2']['name'], PATHINFO_EXTENSION);
		$sourcePath = $_FILES['img1']['tmp_name'];
		$targetPath = "../users/uploads/". $fileName_1;
		$sourcePath1 = $_FILES['img2']['tmp_name'];
		$targetPath1 = "../users/uploads/". $fileName_2;
		if(move_uploaded_file($sourcePath,$targetPath) && move_uploaded_file($sourcePath1,$targetPath1)) 
		{
			$exec_command = "/usr/bin/python3.6 ../script/i_diff.py ../users/uploads/". $fileName_1. " ../users/uploads/" . $fileName_2;
			$output = shell_exec("python3 ../script/i_diff.py ../users/uploads/". $fileName_1. " ../users/uploads/" . $fileName_2);
			echo $output;
		}
		else
		{
			echo "Failed to move files";
		}
	}
	else
	{
		echo "Failed to upload files";
	}
}
else
{
	echo "No files found";
}
?>