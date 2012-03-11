<?php
	
function isXHR() {
	return isset( $_SERVER["HTTP_X_REQUESTED_WITH"] );
}

function connect() {
	global $pdo;
	$pdo = new PDO("mysql:host=localhost;dbname=sakila", "root", "password");
}

function getActorsByLastName($letter) {
	global $pdo;

	$query = '
				SELECT actor_id, first_name, last_name
				FROM actor 
				WHERE last_name LIKE :letter
				LIMIT 50
			 '
	;	

	$stmt = $pdo->prepare($query);

	$stmt->execute( array(':letter' => $letter . '%') );

	return $stmt->fetchAll( PDO::FETCH_OBJ );

}

function getActorInfo( $actor_id ) {
	global $pdo;

	$query = '
				SELECT * FROM actor_info
				WHERE actor_id = :actor_id
			 '
	;

	$stmt = $pdo->prepare($query);
	$stmt->execute( array(':actor_id' => $actor_id) );

	return $stmt->fetch( PDO::FETCH_OBJ );
}

?>