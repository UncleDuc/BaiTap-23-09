
const FormRegister = document.getElementById('FormRegister');
if (FormRegister) {
    FormRegister.addEventListener("submit", (event) => {
        event.preventDefault();

        const InputEmail = document.getElementById('email').value;
        const InputPassword = document.getElementById('password').value;
        const ConfirmPassword = document.getElementById('ConfirmPassword').value;

        function validateEmail(InputEmail) {
            const regex = /[\w\.]+@\w+(\.\w+)+/i;
            return regex.test(InputEmail);
        }

        function validatePassword(password) {
            return password.length >= 6;
        }

        function confirmPassword(password, confirmPassword) {
            return password === confirmPassword;
        }

        function isEmailCreated(email) {
            return localStorage.getItem(email) !== null;
        }

        
        if (!InputEmail.value || !InputPassword.value || !ConfirmPassword.value) {
            alert('Vui lòng nhập đủ thông tin!');
            return;
        }

        if (!validateEmail(InputEmail.value)) {
            alert('Email không hợp lệ!');
            return;
        }

        if (!validatePassword(InputPassword.value)) {
            alert('Mật khẩu phải lớn hơn 6 ký tự!');
            return;
        }

        if (!confirmPassword(InputPassword.value, ConfirmPassword.value)) {
            alert('Mật khẩu không khớp!');
            return;
        }

        if (isEmailCreated(InputEmail.value)) {
            alert('Email đã được dùng để đăng ký!');
            return;
        }

        localStorage.setItem(InputEmail.value, InputPassword.value);
        alert('Đăng ký thành công!');
        window.location.href = 'Login.html';
    });
}


// tinh nang dang nhap

const FormLogin = document.getElementById('FormLogin');
if(FormLogin){
    FormLogin.addEventListener("submit",(event)=>{
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const StorageEmail = localStorage.getItem('email');
        const StoragePassword = localStorage.getItem('password');
        // 1 kiem tra su hop le thong tin nguoi dung
        if(email === StorageEmail && password === StoragePassword){
            alert('Đăng nhập thành công !');
           if(document.getElementById("Remember").checked){
            localStorage.setItem("Remember", true);
            window.location.href = "main.html";
           };
        } else{
            alert('Thông tin đăng nhập không đúng !');
            return;
        }
        //2 co nut mat de xem lai mat khau duoi dang text
        const Toggle = document.getElementById('TogglePass');
        Toggle.addEventListener("click",function(){
            const passwordInPut = document.getElementById('password');
            const type = passwordInPut.getAttribute('type') === 'password'?'text' : 'password';
            passwordInPut.setAttribute('type',type);
            this.textContent = type === 'password' ? 'hiện' : ' ẩn';
        });
        
    })
}
