document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (usuario === "login@login.com" && senha === "123") {
        var mensagemErro = document.getElementById("mensagemErro");
        mensagemErro.textContent = "Login feito com sucesso!";
        mensagemErro.style.color = "green";
    } else {
        var mensagemErro = document.getElementById("mensagemErro");
        mensagemErro.textContent = "Usuário ou senha incorretos. Por favor, tente novamente.";
        mensagemErro.style.color = "yellow";
    }
});
