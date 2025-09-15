const apiUrl = 'http://localhost:3000/filmes'
export async function buscarInformacoes() {

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`)
        }
        const dados = await response.json();
        console.log('Dados recebidos com sucesso:', dados);

        return dados;
    } catch (error) {
        console.error('Falha ao buscar informações', error);
    }
}