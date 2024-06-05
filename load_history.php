<?php
$data = json_decode(file_get_contents('php://input'), true);
$username = $data['username'];

$file = "C:/OSPanel/domains/kursovayamatrixTRPO/{$username}.txt";
$history = [];
if (file_exists($file)) {
  $history = explode(PHP_EOL.PHP_EOL, file_get_contents($file));
}

echo json_encode(['history' => $history]);
?>
