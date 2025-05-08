<?php
// salvar_mapa.php

// Conecta ao banco
$conn = new mysqli("localhost", "usuario", "senha", "nome_do_banco");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $input = json_decode(file_get_contents("php://input"), true);
  $id = intval($input['id']);
  $posX = $conn->real_escape_string($input['posX']);
  $posY = $conn->real_escape_string($input['posY']);

  // Atualiza no banco
  $query = "UPDATE estandes SET pos_x = '$posX', pos_y = '$posY' WHERE id = $id";
  if ($conn->query($query)) {
    echo json_encode(['status' => 'ok']);
  } else {
    echo json_encode(['status' => 'erro', 'msg' => $conn->error]);
  }
}
?>