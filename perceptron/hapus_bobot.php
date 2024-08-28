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

// Menghapus semua data bobot dari tabel
$sql = "DELETE FROM bobot";

if ($conn->query($sql) === TRUE) {
    echo "Nilai bobot berhasil dihapus";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
