// Seleciona o botão pelo seu ID e o armazena na variável 'btnOrdenarPorPreco'
let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')

// Adiciona um ouvinte de evento ao botão que escuta por cliques e chama a função 'ordenarLivrosPorPreco' quando o botão é clicado
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

// Define a função que será chamada quando o botão for clicado
function ordenarLivrosPorPreco() {
    // Ordena a array 'livros' pelo preço, do menor para o maior
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    
    // Exibe os livros ordenados na tela (a função 'exibirOsLivrosNaTela' deve estar definida em outro lugar)
    exibirOsLivrosNaTela(livrosOrdenados)
}