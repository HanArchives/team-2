////////////
// Pop-up //
////////////
const buttonAddDoggo = document.querySelector('.add-submit');
const popUp = document.querySelector('.pop-up');
const formAddDoggo = document.querySelector('.form-add-doggo');

const showPopUp = buttonAddDoggo.addEventListener('click', () => {
  popUp.style.display = 'block';
  formAddDoggo.classList.add('background-blur');
});
