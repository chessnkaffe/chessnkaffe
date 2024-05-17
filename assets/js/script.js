// script.js
function submitForm() {
    const nameInput = document.getElementById('name');
    const attendeesList = document.getElementById('attendeesList');

    const name = nameInput.value;
    if (name.trim() !== '') {
        attendeesList.innerHTML += `<li>${name}</li>`;
        nameInput.value = '';
    }
}

//login - registration look
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

//to change class active when register
registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active')
});

//to change class non-active when login
loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active')
});

//to make active when click Login btn
btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup')
});

//to make active when click Login btn
iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup')
});