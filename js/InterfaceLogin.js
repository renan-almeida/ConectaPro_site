document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('myModal');
    const showModalButton = document.getElementById('showModal');
    const closeModalButton = document.getElementById('closeModal');
    const clienteBtn = document.getElementById('clienteBtn');
    const prestadorBtn = document.getElementById('prestadorBtn');

    // Exibe o modal ao clicar no link
    showModalButton.addEventListener('click', (event) => {
        event.preventDefault();
        modal.style.display = 'block';
    });

    // Fecha o modal ao clicar no botão "X"
    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fecha o modal ao clicar fora do conteúdo
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Redireciona para a tela de cadastro de cliente
    clienteBtn.addEventListener('click', () => {
        window.location.href = 'InterfaceCadastroprestador.html'; // Substitua pelo caminho correto
    });

    // Redireciona para a tela de cadastro de prestador
    prestadorBtn.addEventListener('click', () => {
        window.location.href = 'InterfaceCadastroCliente.html'; // Substitua pelo caminho correto
    });
});
