// Cria uma array vazia para armazenar os livros
let livros = []

// Define a URL da API de onde os dados dos livros serão buscados
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

// Chama a função para buscar os livros da API
getBuscarLivrosDaAPI();

// Define uma função assíncrona que busca os livros da API
async function getBuscarLivrosDaAPI() {
    // Faz uma requisição para a URL definida e espera pela resposta
    const res = await fetch(endpointDaAPI)

    // Converte a resposta em um formato JSON e armazena na variável 'livros'
    livros = await res.json()

    // Aplica um desconto nos livros (a função 'aplicarDesconto' deve estar definida em outro lugar)
    let livrosComDesconto = aplicarDesconto(livros)

    // Exibe os livros na tela (a função 'exibirOsLivrosNaTela' deve estar definida em outro lugar)
    exibirOsLivrosNaTela(livrosComDesconto)
}