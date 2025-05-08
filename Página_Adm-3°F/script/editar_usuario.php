<?php
$conn = new mysqli("localhost", "usuario", "senha", "nome_do_banco");

$dados = json_decode(file_get_contents("php://input"), true);
$id = intval($dados['id']);
$nome = $conn->real_escape_string($dados['nome']);
$email = $conn->real_escape_string($dados['email']);

$sql = "UPDATE usuarios SET nome='$nome', email='$email' WHERE id=$id";

if ($conn->query($sql)) {
  echo json_encode(['status' => 'ok']);
} else {
  echo json_encode(['status' => 'erro', 'msg' => $conn->error]);
}