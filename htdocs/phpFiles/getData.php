<?php 
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
file_put_contents(__DIR__ . "/debug_error.txt", "Debug log start\n", FILE_APPEND);
header("Access-Control-Allow-Credentials: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Orgin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");

$host = "localhost";
$user = "root";
$pass = "root";
$dbname = "myrecipes";

$conn = new mysqli($host, $user, $pass, $dbname);
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Database connection failed"]);
    exit();
}

// Read json input
$input = json_decode(file_get_contents("php://input"), true);

// Prepare SQL
$sql = $_POST["param"];
$stmt = $conn->prepare($sql);
$stmt->execute();
$result = $stmt->get_result();

$users = [];
while ($row = $result->fetch_assoc()) {
    $users[] = $row;
}

$stmt->close();
$conn->close();

echo json_encode($users);
?>