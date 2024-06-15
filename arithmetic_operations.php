<?php
if (isset($_POST['number1']) && isset($_POST['number2'])) {
    $number1 = floatval($_POST['number1']);
    $number2 = floatval($_POST['number2']);
    $addition = $number1 + $number2;
    $subtraction = $number1 - $number2;
    $multiplication = $number1 * $number2;
    $division = $number2 != 0 ? $number1 / $number2 : 'Undefined (Division by zero)';
    $modulus = $number2 != 0 ? $number1 % $number2 : 'Undefined (Division by zero)';
    echo "Addition: $addition<br>Subtraction: $subtraction<br>Multiplication: $multiplication<br>Division: $division<br>Modulus: $modulus";
}
?>
