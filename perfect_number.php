<?php
if (isset($_POST['number'])) {
    $number = intval($_POST['number']);
    $sum = 0;
    for ($i = 1; $i < $number; $i++) {
        if ($number % $i == 0) {
            $sum += $i;
        }
    }
    if ($sum == $number) {
        echo "$number is a perfect number.";
    } else {
        echo "$number is not a perfect number.";
    }
}
?>




//cookies init
setcookie("username","Rayhan",time()+24*60*60-1);


//session
session_start();
$_SESSION["username"]="Rayhan"

//setCookies
setcookie("cart","5",time()+7*24*60*60)
$name=$_COOKIE["username"]



//remove  cookies
setcookie("cart","5",time()+7*24*60*60-1)

//remove session
unset($_SESSION["username"]);












