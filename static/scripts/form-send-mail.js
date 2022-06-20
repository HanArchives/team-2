////////////
// Pop-up-mail //
////////////
const buttonSentMail = document.querySelector('.contact-form-btn');
const popUp = document.querySelector('.pop-up-mail');
const formContact = document.querySelector('.contact-form');

const showPopUp = buttonSentMail.addEventListener('click', () => {
  popUp.style.display = 'block';
  formContact.classList.add('background-blur');
});
