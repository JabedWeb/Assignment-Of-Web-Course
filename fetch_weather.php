<?php
// Read the JSON file
$jsonData = file_get_contents('weather.json');

// Decode the JSON data into an associative array
$weatherData = json_decode($jsonData, true);

// Encode the data back to JSON format for AJAX response
echo json_encode($weatherData);
?>
