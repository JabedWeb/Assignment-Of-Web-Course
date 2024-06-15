<?php
session_start();
$_SESSION['randomNumber'] = rand(1, 50);
$_SESSION['attempts'] = 0;
echo "Game started! Try to guess the number.";
?>
