function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    errorMessage.textContent = '';

    // Dummy authentication, replace with your actual authentication logic
    if (username === 'admin' && password === 'password123') {
        // Redirect to welcome page or perform any other action
        window.location.href = '../menu/menu.html';
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
}
