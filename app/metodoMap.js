// Define a função que aplica um desconto nos livros
function aplicarDesconto(livros) {
    // Define a taxa de desconto como 30%
    const desconto = 0.3

    // Cria uma nova lista de livros com o desconto aplicado
    livrosComDesconto = livros.map(livro => {
        // Retorna um novo objeto livro com o preço reduzido pelo desconto
        return {
            ...livro, // Copia todas as propriedades do livro original
            preco: livro.preco - (livro.preco * desconto) // Aplica o desconto ao preço
        }
    })

    // Retorna a nova lista de livros com o desconto aplicado
    return livrosComDesconto
}