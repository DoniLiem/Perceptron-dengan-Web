<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "SPK_JST";

// Membuat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Memeriksa koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Mendapatkan nilai bobot dari POST request
$w1 = $_POST['w1'];
$w2 = $_POST['w2'];
$w3 = $_POST['w3'];
$w4 = $_POST['w4'];
$w5 = $_POST['w5'];
$w6 = $_POST['w6'];
$w7 = $_POST['w7'];
$w8 = $_POST['w8'];
$w9 = $_POST['w9'];
$wb = $_POST['wb'];

// Menyimpan nilai bobot ke tabel
$sql = "INSERT INTO bobot (w1, w2, w3, w4, w5, w6, w7, w8, w9, wb) VALUES ('$w1', '$w2', '$w3', '$w4', '$w5', '$w6', '$w7', '$w8', '$w9', '$wb')";

if ($conn->query($sql) === TRUE) {
    echo "Nilai bobot berhasil disimpan";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
