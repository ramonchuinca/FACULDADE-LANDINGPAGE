  // Função para obter parâmetros da URL (caso necessário)
//   function obterParametroUrl(parametro) {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get(parametro);
// }

// // Função para preencher a tabela com os dados recebidos
// function preencherTabela() {
    //     const dados = {
        //         nome: obterParametroUrl('nome'),
        //         email: obterParametroUrl('email'),
        //         telefone: obterParametroUrl('telefone'),
        //         endereco: obterParametroUrl('endereco'),
        //         dia: obterParametroUrl('dia'),
        //         cpf: obterParametroUrl('cpf'),
        const tabela = document.getElementById('receber-dados');
        const loading = document.querySelector('.loading')
        
//     };

    // Iterar sobre os dados e criar as linhas da tabela
    
    
    // Chamar a função para preencher a tabela quando a página carregar
    async function preencherTabela(){
        tabela.classList.add('hide')
        try {
            const url = "https://sheetdb.io/api/v1/bgqh0keo4tt7e"
            const token = "nv7dkcbkk5pl6xkuol8by3weqpdpcuexj78tohgr"
            const res = await fetch(url) 
            const resJson = await res.json()
            console.log('teste',resJson)
            resJson.forEach(chave => {
                const valor = chave.email;
                const linha = `<tr>
                <td>${chave.nome}</td>
                <td>${chave.email}</td>
                <td>${chave.telefone}</td>
                <td>${chave.dia}</td>
                <td>${chave.endereco}</td>
                <td>${chave?.cpf}</td>
                <td><button class="btn-delete">Deletar</button></td>
                </tr>`;
                tabela.innerHTML += linha;
                
            }); 
            loading.classList.add('hide')
            tabela.classList.remove('hide')

                   

             // Adicionar event listeners para os botões de deletar
        const btnDeletar = document.querySelectorAll('.btn-delete');
        btnDeletar.forEach(btn => {
            btn.addEventListener('click', function() {
                const row = this.closest('tr'); // Encontra a linha pai do botão clicado
                row.remove(); // Remove a linha da tabela
            });
        });
        } catch (error) {
            
        }

}
window.onload = function() {
    preencherTabela();
};