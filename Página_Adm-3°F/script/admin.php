<?php
$conn = new mysqli("localhost", "usuario", "senha", "nome_do_banco");
$result = $conn->query("SELECT * FROM usuarios");
?>

<table>
  <thead>
    <tr>
      <th>Nome</th>
      <th>Email</th>
      <th>Ações</th>
    </tr>
  </thead>
  <tbody id="listaUsuarios">
    <?php while ($row = $result->fetch_assoc()): ?>
      <tr data-id="<?= $row['id'] ?>">
        <td contenteditable="true"><?= htmlspecialchars($row['nome']) ?></td>
        <td contenteditable="true"><?= htmlspecialchars($row['email']) ?></td>
        <td>
          <button class="btnSalvar">Salvar</button>
          <button class="btnExcluir">Excluir</button>
        </td>
      </tr>
    <?php endwhile; ?>
  </tbody>
</table>

<script src="admin.js"></script>
