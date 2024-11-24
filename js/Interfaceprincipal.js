// Selecionar elementos com as classes de texto
const textos = document.querySelectorAll('.titulo1, .titulo2, .subtitulo1');

// Função que verifica se o scroll chegou ao final da página
function animaSeScrollNoFinal() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // Adiciona a classe "animate" a todos os elementos
        textos.forEach(texto => texto.classList.add('animate'));
    }
}

// Adicionar o evento de rolagem
window.addEventListener('scroll', animaSeScrollNoFinal);
