<?php
$password = 'admin123'; // Password yang ingin di-hash
$hashedPassword = password_hash($password, PASSWORD_BCRYPT);
echo "Password: $password\n";
echo "Hashed Password: $hashedPassword\n";
?>
