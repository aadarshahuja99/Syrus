<?php

	$con = mysqli_connect('127.0.0.1','root','');

	if (!$con) {
		echo "Not connected";
	}

	if (!mysqli_select_db($con,'Hackathon')) {
		echo 'Database not connected';
	}
	$Name = $_POST['name'];
	$age = $_POST['age'];
	$Geo = $_POST['geo'];
	$Disease = $_POST['disease'];

	$sql = "INSERT INTO diseases(name,age,geo,disease) VALUES ('$Name','$age','$Geo','$Disease')";

	if(!mysqli_query($con,$sql))
	{
		echo "Not Inserted";
	}

	header("refresh:2; url=form.html");

?>
