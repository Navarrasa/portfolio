
function handleScroll() {
    // seleciona todos os elementos com a classe 'fade-in'
    const elements = document.querySelectorAll('.fade-in');
    // calcula a altura da janela do navegador
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        // verifica se o elemento está visível na janela do navegador
        // e adiciona a classe 'visible' se estiver
        const rect = element.getBoundingClientRect();
        if (rect.top <= windowHeight * 0.8) {
            element.classList.add('visible');
        }
    });
}

// adiciona o evento de scroll e load para chamar a função handleScroll
// quando a página é carregada ou rolada
// isso garante que os elementos sejam exibidos corretamente ao carregar a página
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
    