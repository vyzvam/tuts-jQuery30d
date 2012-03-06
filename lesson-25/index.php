<?php


if ( isset($_POST["q"])) {
	include "functions.php";

	connect();

	$actors = getActorsByLastName($_POST["q"]);

	print_r($actors);
}

include("views/index.tmpl.php");



?>