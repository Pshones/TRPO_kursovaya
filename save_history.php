<?php
$data = json_decode(file_get_contents('php://input'), true);
$username = $data['username'];
$historyEntry = $data['historyEntry'];

$file = "C:/OSPanel/domains/kursovayamatrixTRPO/{$username}.txt";
file_put_contents($file, $historyEntry, FILE_APPEND);
?>
