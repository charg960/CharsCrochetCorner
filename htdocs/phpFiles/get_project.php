<?php
include 'db_connection.php';

$id = isset($_GET['id']) ? intval($_GET['id']) : 0;

// Fetch project
$sql = "SELECT p.*, d.Emoji FROM Projects p
        JOIN Difficulty d ON p.Difficulty_ID = d.Difficulty_ID
        WHERE Project_ID = $id";
$result = $conn->query($sql);

if ($result && $row = $result->fetch_assoc()) {
    // Materials
    $materials = [];
    $matRes = $conn->query("SELECT * FROM Materials WHERE Project_ID = $id ORDER BY Set_Number");
    while($m = $matRes->fetch_assoc()) $materials[] = $m;

    // Patterns / Directions
    $patterns = [];
    $patRes = $conn->query("SELECT * FROM Patterns WHERE Project_ID = $id ORDER BY Pattern_ID");
    while($p = $patRes->fetch_assoc()) $patterns[] = $p;

    $row['Materials'] = $materials;
    $row['Patterns'] = $patterns;

    echo json_encode($row);
} else {
    echo json_encode(['error' => 'Project not found']);
}
?>
