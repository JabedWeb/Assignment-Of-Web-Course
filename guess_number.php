<?php
session_start();
if (!isset($_SESSION['randomNumber'])) {
    echo "Game not started yet.";
    exit;
}

$guess = intval($_POST['guess']);
$_SESSION['attempts']++;

if ($guess < $_SESSION['randomNumber']) {
    echo "Too low!";
} elseif ($guess > $_SESSION['randomNumber']) {
   echo "Too high!";
} else {
    echo "Correct! You guessed the number in " . $_SESSION['attempts'] . " attempts.";
    session_unset();
    session_destroy();
}
?>
