// Function to handle signup
function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    if (username && password) {
        // Save user data in LocalStorage
        localStorage.setItem(username, password);
        alert('Đăng ký thành công!');
        // Switch to login page
        document.getElementById('signup-container').style.display = 'none';
        document.getElementById('login-container').style.display = 'block';
    } else {
        alert('Vui lòng nhập đầy đủ thông tin!');
    }
}

// Function to handle login
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Check if user exists in LocalStorage
    const storedPassword = localStorage.getItem(username);
    if (storedPassword && storedPassword === password) {
        alert('Đăng nhập thành công!');
        window.location.href = './HomePage.html'; // Redirect to Home page after login
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng!');
    }
}
