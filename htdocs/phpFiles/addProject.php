<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') exit();

require "db.php";

function send($status, $message, $extra = []) {
    echo json_encode(array_merge(["status"=>$status,"message"=>$message], $extra));
    exit;
}

// form fields
$name = $_POST["name"] ?? "";
$alt = $_POST["alt"] ?? "";
$artist = $_POST["artist"] ?? "";
$difficulty = $_POST["difficulty"] ?? 1;
$size = $_POST["size"] ?? "";

if (!$name || !$size) send("error", "Name and size required");
if (!isset($_FILES["mainImage"])) send("error", "Main image missing");
if (!isset($_FILES["directions"]) || count($_FILES["directions"]["tmp_name"]) === 0) send("error", "Directions missing");

// directories
$imageDir = __DIR__ . "/../../public/images/";
$patternDir = __DIR__ . "/../../public/patterns/";

if (!is_dir($imageDir)) mkdir($imageDir, 0777, true);
if (!is_dir($patternDir)) mkdir($patternDir, 0777, true);

// MAIN IMAGE
$mainName = uniqid() . "_" . $_FILES["mainImage"]["name"];
$mainDiskPath = $imageDir . $mainName;           // disk location stays the same
$mainURLPath = "/images/" . $mainName;

if (!move_uploaded_file($_FILES["mainImage"]["tmp_name"], $mainDiskPath)) {
    send("error", "Failed to save main image");
}

// insert project
$stmt = $conn->prepare("
    INSERT INTO Projects (Name, Artist, Difficulty_ID, Size, Main_Image, Main_Image_Alt)
    VALUES (?, ?, ?, ?, ?, ?)
");
$stmt->bind_param("ssisss", $name, $artist, $difficulty, $size, $mainURLPath, $alt);
if (!$stmt->execute()) send("error", $stmt->error);

$projectID = $stmt->insert_id;

// insert into Images
$caption = $alt ?: $name;
$stmt2 = $conn->prepare("
    INSERT INTO Images (Project_ID, Image_Link, Caption)
    VALUES (?, ?, ?)
");
$stmt2->bind_param("iss", $projectID, $mainURLPath, $caption);
$stmt2->execute();

// DIRECTIONS
foreach ($_FILES["directions"]["tmp_name"] as $i => $tmp) {
    if (!$tmp) continue;

    $fileName = uniqid() . "_" . $_FILES["directions"]["name"][$i];
    $fileDiskPath = $patternDir . $fileName;           // disk path stays the same
    $fileURLPath = "/patterns/" . $fileName;

    if (!move_uploaded_file($tmp, $fileDiskPath)) {
        send("error", "Failed to save direction file");
    }

    $page = $i + 1;

    $stmt3 = $conn->prepare("
        INSERT INTO Directions (Project_ID, File_Path, Page_Number)
        VALUES (?, ?, ?)
    ");
    $stmt3->bind_param("isi", $projectID, $fileURLPath, $page);
    $stmt3->execute();
}

send("success", "Project added successfully", ["id"=>$projectID]);
?>
