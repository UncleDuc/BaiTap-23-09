
//  Tính năng đăng ký
// Hàm kiểm tra email hợp lệ
function validateEmail(email) {
    const  emailRegex = /[\w\.]+@\w+(\.\w+)+/i;
    return emailRegex.test(email);
  }
  
  // Hàm kiểm tra password hợp lệ (ít nhất 6 ký tự)
  function validatePassword(password) {
    return password.length >= 6;
  }
  
  // Hàm xác nhận password
  function confirmPassword(password, confirmPassword) {
    return password === confirmPassword;
  }
  
  // Hàm kiểm tra xem email đã tồn tại trong localStorage hay chưa
  function isEmailRegistered(email) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    return users.some(user => user.email === email);
  }
  
  // Hàm lưu tài khoản vào localStorage
  function saveUser(email, password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
  }
  
  // Hàm chuyển hướng đến trang đăng nhập
  function ToLogin() {
    window.location.href = "login.html";
  }
  
  // Hàm xử lý khi người dùng nhấn nút đăng ký
    const Register = document.getElementById("FormRegister").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPasswordInput = document.getElementById("ConfirmPassword").value;
  
    if(!validateEmail(email) || !validatePassword(password)){
        alert('vui lòng nhập thông tin !');
        return;
    }

    // Kiểm tra email hợp lệ
    if (!validateEmail(email)) {
      alert("Email không hợp lệ!");
      return;
    }
  
    // Kiểm tra password hợp lệ
    if (!validatePassword(password)) {
      alert("Mật khẩu phải có ít nhất 6 ký tự!");
      return;
    }
  
    // Kiểm tra xác nhận password
    if (!confirmPassword(password, confirmPasswordInput)) {
      alert("Mật khẩu xác nhận không khớp!");
      return;
    }
  
    // Kiểm tra email đã được đăng ký
    if (isEmailRegistered(email)) {
      alert("Email đã được sử dụng!");
      return;
    }
  
    // Lưu tài khoản vào localStorage
    saveUser(email, password);
  
    // Chuyển hướng đến trang đăng nhập
    ToLogin();
  });


// Tính năng đăng nhập
function validateEmail(email) {
    const  emailRegex = /[\w\.]+@\w+(\.\w+)+/i;
    return emailRegex.test(email);
  }
  
  // Hàm kiểm tra password hợp lệ (ít nhất 6 ký tự)
function validatePassword(password) {
    return password.length >= 6;
}

function saveEmailPass (){
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.some(user=>user.email ===email && user.password === password);
}

function moveToMainPage(){
  return window.location.href = 'main.html';
}

    const Login = document.getElementById('FormLogin').addEventListener("submit",function(event){
    event.preventDefault();
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const rememberMe = document.getElementById('Remember').checked;
    // kiểm tra thông tin từ localStorage

    if(!validateEmail(email)){
      alert('Email khong hop le');
      return;
    }
    
    if(!validatePassword(password)){
      alert('mat khau khong lop le');
      return;
    }
    
    if(!saveEmailPass(email,password)){
      alert('thong tin dang nhap sai !');
    }

    // Có nút mắt xem để xem lại mật khẩu dưới dạng Text
    document.getElementById('TogglePass').addEventListener("click", function(event) {
      event.preventDefault();
      const passwordInput = document.getElementById('password');
      const icon = document.querySelector("#TogglePass i");
      if (passwordInput.type === 'password') {
          passwordInput.type = 'text';
          icon.classList.remove('fa-eye-slash');
          icon.classList.add('fa-eye');
      } else {
          passwordInput.type = 'password';
          icon.classList.remove('fa-eye');
          icon.classList.add('fa-eye-slash');
      }
  });

    // Ghi nhớ tài khoản trong 24 giờ
    if (rememberMe) {
      const expirationTime = Date.now() + 24 * 60 * 60 * 1000; // 24 giờ
      localStorage.setItem('rememberMe', JSON.stringify({ email, expirationTime }));
  }

    alert('dang nhap thanh cong !');
    moveToMainPage();
});


