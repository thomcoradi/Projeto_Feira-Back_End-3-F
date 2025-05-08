document.querySelectorAll('.btnSalvar').forEach(botao => {
    botao.addEventListener('click', () => {
      const linha = botao.closest('tr');
      const id = linha.dataset.id;
      const nome = linha.children[0].textContent.trim();
      const email = linha.children[1].textContent.trim();
  
      fetch('editar_usuario.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, nome, email })
      })
      .then(res => res.json())
      .then(data => {
        if (data.status === 'ok') {
          alert('Usuário atualizado com sucesso!');
        } else {
          alert('Erro ao atualizar: ' + data.msg);
        }
      });
    });
  });
  
  document.querySelectorAll('.btnExcluir').forEach(botao => {
    botao.addEventListener('click', () => {
      if (!confirm('Tem certeza que deseja excluir este usuário?')) return;
  
      const linha = botao.closest('tr');
      const id = linha.dataset.id;
  
      fetch('excluir_usuario.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      })
      .then(res => res.json())
      .then(data => {
        if (data.status === 'ok') {
          linha.remove();
          alert('Usuário excluído.');
        } else {
          alert('Erro ao excluir: ' + data.msg);
        }
      });
    });
  });