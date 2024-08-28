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

// Mengambil nilai bobot terakhir dari tabel
$sql = "SELECT w1, w2, w3, w4, w5, w6, w7, w8, w9, wb FROM bobot ORDER BY id DESC LIMIT 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo json_encode($row);
} else {
    echo json_encode([]);
}

$conn->close();
?>
