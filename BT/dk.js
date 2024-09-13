function signup() {
    var username = document.getElementById('signup-username').value;
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;

    if (!username || !email || !password) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }

    // Kiểm tra định dạng email
    if (!kiemTraEmail(email)) {
        alert("Email không hợp lệ. Vui lòng nhập lại!");
        return;
    }

    // Nếu mọi thứ hợp lệ
    console.log("Đăng ký thành công:");
    console.log("Tên:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    // Xóa nội dung các trường input sau khi đăng ký
    document.getElementById('signup-username').value = '';
    document.getElementById('signup-email').value = '';
    document.getElementById('signup-password').value = '';

    alert("Đăng ký thành công!");
}

// Giả sử đây là hàm kiểm tra định dạng email
function kiemTraEmail(email) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}