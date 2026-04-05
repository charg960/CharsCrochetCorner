<?php
    $host = "localhost";
    $user = "root";
    $pass = "root"; // default for MAMP
    $dbname = "CharsCrochetCorner";

    $conn = new mysqli($host, $user, $pass, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    header("Content-Type: application/json");
?>
