<?php

if ( count($_POST) > 0) {
	include "functions.php";
	connect();

	if ( isset($_POST["q"]) ) {

		
		$actors = getActorsByLastName( $_POST["q"] );

		if ( isXHR() ) {echo json_encode($actors); return;}
	}

	if ( isset($_POST["actor_id"]) && isXHR() ) {
			$info = getActorInfo($_POST['actor_id']);
			echo $info->film_info; 
			return;
	}
}


include("views/index.tmpl.php");



?>