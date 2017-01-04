<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "agri";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT Db, User FROM db";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["Db"]. " - Name: " . $row["User"]."<br>";
    }
} else {
    echo "0 results";
}
$conn->close();
?> 