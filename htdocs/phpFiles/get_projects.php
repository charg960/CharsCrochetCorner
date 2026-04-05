<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "CharsCrochetCorner";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(["error" => "Connection failed"]);
    exit;
}

/* -------------------
   1. GET PROJECTS
-------------------- */
$projectSql = "
    SELECT p.Project_ID, p.Name, p.Artist, d.Label AS Difficulty, d.Emoji,
           p.Size, p.Main_Image, p.Main_Image_Alt
    FROM Projects p
    JOIN Difficulty d ON p.Difficulty_ID = d.Difficulty_ID
    ORDER BY p.Project_ID
";

$projectResult = $conn->query($projectSql);
$projects = [];

while ($row = $projectResult->fetch_assoc()) {
    $pid = (int)$row["Project_ID"];
    $projects[$pid] = $row;
    $projects[$pid]["Materials"] = [];
    $projects[$pid]["Patterns"] = [];
    $projects[$pid]["Images"] = [];
    $projects[$pid]["Directions"] = [];
}

/* -------------------
   2. MATERIALS
-------------------- */
$materialSql = "
    SELECT Material_ID, Project_ID, Name
    FROM Materials
    ORDER BY Project_ID, Material_ID
";

$result = $conn->query($materialSql);

while ($row = $result->fetch_assoc()) {
    $pid = (int)$row["Project_ID"];
    $projects[$pid]["Materials"][] = [
        "Name" => $row["Name"]
    ];
}

/* -------------------
   3. PATTERNS
-------------------- */
$patternSql = "
    SELECT Pattern_ID, Project_ID, Link
    FROM Patterns
    ORDER BY Project_ID, Pattern_ID
";

$result = $conn->query($patternSql);

while ($row = $result->fetch_assoc()) {
    $pid = (int)$row["Project_ID"];
    $projects[$pid]["Patterns"][] = [
        "Link" => $row["Link"]
    ];
}

/* -------------------
   4. IMAGES
-------------------- */
$imagesSql = "
    SELECT Image_ID, Project_ID, Image_Link, Caption
    FROM Images
    ORDER BY Project_ID, Image_ID
";

$result = $conn->query($imagesSql);

while ($row = $result->fetch_assoc()) {
    $pid = (int)$row["Project_ID"];
    $projects[$pid]["Images"][] = [
        "Image_Link" => $row["Image_Link"],
        "Caption" => $row["Caption"]
    ];
}

/* -------------------
   5. DIRECTIONS
-------------------- */
$dirSql = "
    SELECT Direction_ID, Project_ID, File_Path, Page_Number
    FROM Directions
    ORDER BY Project_ID, Page_Number
";

$result = $conn->query($dirSql);

while ($row = $result->fetch_assoc()) {
    $pid = (int)$row["Project_ID"];
    $projects[$pid]["Directions"][] = [
        "File_Path" => $row["File_Path"],
        "Page_Number" => (int)$row["Page_Number"]
    ];
}

/* -------------------
   RETURN JSON
-------------------- */

$conn->close();

echo json_encode(array_values($projects));
?>
