<?php
$conn = new mysqli("localhost", "usuario", "senha", "nome_do_banco");

$dados = json_decode(file_get_contents("php://input"), true);
$id = intval($dados['id']);

$sql = "DELETE FROM usuarios WHERE id=$id";

if ($conn->query($sql)) {
  echo json_encode(['status' => 'ok']);
} else {
  echo json_encode(['status' => 'erro', 'msg' => $conn->error]);
}