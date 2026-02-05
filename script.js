const authModal = document.querySelector('.auth-model');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const loginBtnModal = document.querySelector('.login-btn-model');
const closeBtnModel = document.querySelector('.close-btn-model');

registerLink.addEventListener('click', () => authModal.classList.add('slide'));
loginLink.addEventListener('click', () => authModal.classList.remove('slide'));

loginBtnModal.addEventListener('click', () => authModal.classList.add('show'));
closeBtnModel.addEventListener('click', () => authModal.classList.remove('show'));
