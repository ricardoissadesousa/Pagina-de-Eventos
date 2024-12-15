// Exibe uma mensagem ao carregar a página
window.addEventListener('load', () => {
    console.log("Bem-vindo ao Abelvolks Eventos!");

    // Exemplo: Alerta de boas-vindas
    alert("Bem-vindo ao Abelvolks Eventos - Aproveite o maior evento automotivo do ano!");


document.querySelector('.contato-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio real do formulário
  
    // Aqui você pode incluir a lógica para enviar o email (se necessário)
    
    // Exibe a notificação
    alert('Email enviado com sucesso!');
    
    // Limpa os campos do formulário após o envio
    document.querySelector('.contato-form').reset();
  });
});



