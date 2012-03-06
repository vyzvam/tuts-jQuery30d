<?php include("_partials/header.php"); ?>

<h1>Search actors by last name</h1>

<form action="index.php" method="post">
	<select id="q" name="q">
		<?php
			$alphabet = str_split("abcdefjhijklmnopqrstuvwxyz");

			foreach ($alphabet as $letter) {
				echo "<option value='$letter'>$letter</option>";
			}
		?>
	</select>
	<button type="submit">Go!</button>
</form>


<?php include("_partials/footer.php"); ?>