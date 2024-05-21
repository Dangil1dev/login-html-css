document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir o envio do formulário

    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    const mensagemErro = document.getElementById('mensagemErro');

    if (senha !== confirmarSenha) {
        mensagemErro.textContent = 'As senhas não coincidem!';
        mensagemErro.style.color = 'red';
    } else {
        mensagemErro.textContent = 'Registrado com sucesso!';
        mensagemErro.style.color = 'green';
    }
});
