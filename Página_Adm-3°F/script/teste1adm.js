function abrirModal() {
    document.getElementById('modalExclusao').style.display = 'flex';
  }
  
  function fecharModal() {
    document.getElementById('modalExclusao').style.display = 'none';
  }
  
  function salvarMapa() {
    const toast = document.getElementById('toastSucesso');
    toast.style.display = 'block';
    setTimeout(fecharToast, 3000); // Fecha o toast após 3 segundos
  }
  
  function fecharToast() {
    document.getElementById('toastSucesso').style.display = 'none';
  }

  document.querySelectorAll('.estand').forEach(stand => {
    stand.addEventListener('mousedown', function (e) {
      e.preventDefault();
      const offsetX = e.clientX - stand.offsetLeft;
      const offsetY = e.clientY - stand.offsetTop;
  
      function mouseMove(e) {
        stand.style.left = `${e.clientX - offsetX}px`;
        stand.style.top = `${e.clientY - offsetY}px`;
      }
  
      function mouseUp(e) {
        document.removeEventListener('mousemove', mouseMove);
        document.removeEventListener('mouseup', mouseUp);
  
        // Enviar nova posição para o servidor
        const id = stand.dataset.id; // por ex: data-id="2"
        const posX = stand.style.left;
        const posY = stand.style.top;
  
        fetch('salvar_mapa.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id, posX, posY })
        }).then(res => res.json()).then(data => {
          console.log('Salvo:', data);
        });
      }
  
      document.addEventListener('mousemove', mouseMove);
      document.addEventListener('mouseup', mouseUp);
    });
  });