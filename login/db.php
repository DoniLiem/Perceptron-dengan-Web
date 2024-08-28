<?php
$host = 'localhost';
$db = 'SPK_JST';
$user = 'root'; // Sesuaikan dengan username MySQL Anda
$pass = '';     // Sesuaikan dengan password MySQL Anda

$dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";

try {
    $pdo = new PDO($dsn, $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>
