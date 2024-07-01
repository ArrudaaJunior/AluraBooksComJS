// Define a função que calcula o valor total dos livros disponíveis
function calcularValorTotalDeLivrosDisponiveis(livros) {
    // Usa o método reduce para somar os preços de todos os livros
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)
}