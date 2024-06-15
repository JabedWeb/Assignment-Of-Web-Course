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
