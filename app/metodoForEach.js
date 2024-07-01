// Seleciona o elemento HTML onde os livros serão inseridos e o armazena na variável 'elementoParaInserirLivros'
const elementoParaInserirLivros = document.getElementById('livros')

// Seleciona o elemento HTML onde o valor total dos livros disponíveis será mostrado
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

// Define a função que exibe os livros na tela
function exibirOsLivrosNaTela(listaDeLivros) {
    // Limpa o conteúdo do elemento que mostra o valor total dos livros disponíveis
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = ''
    
    // Limpa o conteúdo do elemento onde os livros serão inseridos
    elementoParaInserirLivros.innerHTML = ''
    
    // Percorre cada livro na lista de livros
    listaDeLivros.forEach(livro => {
        // Verifica se o livro está disponível e define a classe CSS para a imagem do livro
        let disponibilidade = livro.quantidade > 0 ? 'livros__imagens' : 'livros__imagens indisponivel'
        
        // Adiciona o HTML do livro ao elemento 'elementoParaInserirLivros'
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
            <img class="${disponibilidade}" src="${livro.imagem}"
              alt="${livro.alt}" />
            <h2 class="livro__titulo">
              ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags">
              <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `
    })
}

// function verificarDisponibilidadeDoLivro(livro) {
//   if (livro.quantidade > 0){
//     return 'livros__imagens'
//   } else {
//     return 'livros__imagens indisponivel'
//   }
// }
