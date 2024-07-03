document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btnVoltar').addEventListener('click', function() {
        console.log('Botão de voltar clicado');
        window.history.back(); // Volta para a página anterior no histórico do navegador
    });
});