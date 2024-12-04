// Seleção dos elementos
var modal = document.getElementById("myModal");
var btn = document.getElementById("showModal");
var span = document.getElementById("closeModal");

// Quando o usuário clicar em "Não tenho conta", abre o modal
btn.onclick = function(event) {
    event.preventDefault(); // Impede que o link faça o recarregamento da página
    modal.style.display = "block"; // Exibe o modal
}

// Quando o usuário clicar no "x", fecha o modal
span.onclick = function() {
    modal.style.display = "none"; // Fecha o modal
}

// Quando o usuário clicar fora do modal, fecha o modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; // Fecha o modal
    }
}

// Ações para os botões dentro do modal
document.getElementById("clienteBtn").onclick = function() {
    alert("Você escolheu criar uma conta de Cliente.");
    modal.style.display = "none"; // Fecha o modal
};

document.getElementById("prestadorBtn").onclick = function() {
    alert("Você escolheu criar uma conta de Prestador de Serviço.");
    modal.style.display = "none"; // Fecha o modal
};
