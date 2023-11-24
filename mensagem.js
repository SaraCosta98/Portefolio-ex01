 // Função para exibir a mensagem por 10 segundos
 window.onload = function() {
    var mensagemTemporizada = document.getElementById('temporizada');
    mensagemTemporizada.style.display = 'block';
    setTimeout(function() {
        mensagemTemporizada.style.display = 'none';
    }, 5000); // Tempo em milissegundos (10 segundos)
};