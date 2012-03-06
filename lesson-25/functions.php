<?php
	
function connect() {
	global $pdo;
	$pdo = new PDO("mysql:host=localhost;dbname=sakila", "root", "password");
}

function getActorsByLastName($letter) {
	global $pdo;

	$stmt = $pdo->prepare("
				SELECT actor_id, first_name, last_name
				FROM actor 
				WHERE last_name LIKE :letter
				LIMIT 50
			");

	$stmt->execute( array(":letter" => $letter . "%") );
	return $stmt->fetchAll( PDO::FETCH_OBJ );

}

?>