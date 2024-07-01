// Seleciona todos os elementos com a classe 'btn' e armazena na variável 'botoes'
const botoes = document.querySelectorAll('.btn')

// Adiciona um ouvinte de evento a cada botão, que chama a função 'filtrarLivros' quando o botão é clicado
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

// Define a função que será chamada quando um botão de filtro for clicado
function filtrarLivros() {
    // Obtém o botão que foi clicado usando 'this.id' e armazena na variável 'elementoBtn'
    const elementoBtn = document.getElementById(this.id)
    
    // Obtém o valor do botão clicado, que representa a categoria a ser filtrada
    const categoria = elementoBtn.value
    
    // Filtra os livros com base na categoria ou disponibilidade
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    
    // Exibe os livros filtrados na tela
    exibirOsLivrosNaTela(livrosFiltrados)
    
    // Se a categoria for 'disponivel', calcula e exibe o valor total dos livros disponíveis
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
}

// Define a função que filtra os livros por categoria
function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

// Define a função que filtra os livros por disponibilidade (livros com quantidade maior que 0)
function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

// Define a função que exibe o valor total dos livros disponíveis na tela
function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}