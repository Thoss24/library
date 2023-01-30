const form = document.getElementById('library-form-validation');
const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error') //#mail + span.error , #country + span.error, #postal-code + span.error, #password + span.error, #confirm-password + span.error'

const password = document.getElementById('psw');
const confirmPassword = document.getElementById('confirm-password');
const passwordError = document.querySelector('#psw + span.error');
const confirmPasswordError = document.querySelector('#confirm-password + span.error');
const submitButton = document.getElementById('submit-button');


email.addEventListener('input', (e) => {
    if (email.validity.valid) {
        emailError.textContent = ""
        emailError.className = "error"
        email.style.backgroundColor = "white"
    } else {
        showError();
        e.preventDefault()
    }
});

form.addEventListener('submit', (e) => {
    if (!email.validity.valid) {
        showError();
        e.preventDefault()
    }
});

function showError() {
    if (email.validity.valueMissing) {
        emailError.textContent = "Enter email address"
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Enter valid email address"
        email.style.backgroundColor = "#fdd"
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
        email.style.backgroundColor = "#fdd"
    }
    emailError.className = "error active"
}

confirmPassword.addEventListener('input', (e) => {
    if (confirmPassword.value === password.value) {
        passwordError.classList.remove('error')
        confirmPasswordError.classList.remove('error')
    } else {
    checkPasswords()
    e.preventDefault()
    }
});

function checkPasswords() {
    if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = "Passwords do not match"
        passwordError.textContent = "Passwords do not match"
    }    
    else {
        passwordError.textContent = ""
        confirmPasswordError.textContent = ""
    }
    confirmPasswordError.className = "error active" 
    passwordError.className = "error active"
}

form.addEventListener("onsubmit", (e) => {
    if (email.validity.valid && confirmPassword.value === password.value) {
        loadLibraryPage()
    };
    loadLibraryPage()
    e.preventDefault()
});

function loadLibraryPage() {
    location.href='../library/index.html'
};

