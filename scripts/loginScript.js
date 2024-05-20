function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    if (email === 'login@login.com' && password === '1234567') {
        alert('Login bem-sucedido!');
    } else {
        errorMessage.textContent = 'Email ou senha incorretos!';
        errorMessage.classList.add('show');
    }
}
