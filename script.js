const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
const passwordInput = document.getElementById('password');
const eye = document.getElementById('eye');

// tirar reload

document.getElementById('login-form').addEventListener('submit', (event)=> {
event.preventDefault();
});

// trocar olho e ocultar senha

const showPassword = () => {
    if (passwordInput.type === 'password') {
        passwordInput.setAttribute('type', 'text');
        eye.classList.replace('fa-eye', 'fa-eye-slash'); 
    } else {
        passwordInput.setAttribute('type', 'password');
        eye.classList.replace('fa-eye-slash', 'fa-eye'); 
    }
};

eye.addEventListener('click', showPassword);

document.getElementById('ig-icon').addEventListener('click',()=>{
    window.open("https://www.instagram.com/vgtech_solutions/", "_blank");
});

document.getElementById('tt-icon').addEventListener('click',()=>{
    window.open("https://x.com/home", "_blank");
});



  