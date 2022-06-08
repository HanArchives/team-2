////////////////
// Select All //
////////////////
const selectAllButtonOne = document.querySelector('.select-all-one');
const selectAllButtonTwo = document.querySelector('.select-all-two');
const selectAllButtonThree = document.querySelector('.select-all-three');

function checkAll(selector) {
  const checkboxes = document.querySelectorAll(selector);
  for (const checkbox of checkboxes) {
    checkbox.checked = !this.checked;
  }
}

if (selectAllButtonOne) {
  selectAllButtonOne.addEventListener('click', () => {
    // parameter die je mee geeft aan functie checkAll
    checkAll('.question-1 input[type="checkbox"]');
  });
}

if (selectAllButtonTwo) {
  selectAllButtonTwo.addEventListener('click', () => {
    checkAll('.question-2 input[type="checkbox"]');
  });
}

if (selectAllButtonThree) {
  selectAllButtonThree.addEventListener('click', () => {
    checkAll('.question-3 input[type="checkbox"]');
  });
}

/// ///////////////////////////////////
// Progresive enhancement/disclosure //
/// ///////////////////////////////////
const buttonNextQuestionAge = document.querySelector('.btn-next-1');
const buttonNextQuestionSize = document.querySelector('.btn-next-2');
const questionOne = document.querySelector('.first');
const questionTwo = document.querySelector('.second');
const questionThree = document.querySelector('.third');
const buttonSubmit = document.querySelector('.btn-submit');

// Onclick show and scroll to next question

buttonNextQuestionAge.addEventListener('click', () => {
  questionTwo.style.display = 'block';
  questionTwo.scrollIntoView({ behavior: 'smooth' });
});

buttonNextQuestionSize.addEventListener('click', () => {
  questionThree.style.display = 'block';
  questionThree.scrollIntoView({ behavior: 'smooth' });
});

function hideSections() {
  questionTwo.classList.add('hide');
  questionThree.classList.add('hide');
}

window.addEventListener('load', hideSections);

////////////////////////////////////////
// show select all button if JS is on //
////////////////////////////////////////
function hideButtons() {
  selectAllButtonOne.classList.add('show');
  selectAllButtonTwo.classList.add('show');
  selectAllButtonThree.classList.add('show');
}

window.addEventListener('load', hideButtons);

//////////////////////////////////
// Next button vissible onClick //
//////////////////////////////////
questionOne.addEventListener('click', () => {
  buttonNextQuestionAge.style.visibility = 'visible';
  buttonNextQuestionAge.style.opacity = '1';
});

questionTwo.addEventListener('click', () => {
  buttonNextQuestionSize.style.visibility = 'visible';
  buttonNextQuestionSize.style.opacity = '1';
});

// prevent buttons in questionnaire from submitting
const buttons = document.querySelectorAll('.questionnaire button');

buttons.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
  });
});

//////////////////////////////////
// Atleast one checkbox checked //
//////////////////////////////////
buttonSubmit.addEventListener('click', (event) => {
  let isFormValid = true;
  const errorOne = document.querySelector('.error-1');
  const errorTwo = document.querySelector('.error-2');
  const errorThree = document.querySelector('.error-3');

  if (document.querySelectorAll('[name="gender"]:checked').length < 1) {
    isFormValid = false;
    errorOne.style.display = 'block';
    event.preventDefault();
  }

  if (document.querySelectorAll('[name="age"]:checked').length < 1) {
    isFormValid = false;
    errorTwo.style.display = 'block';
    event.preventDefault();
  }

  if (document.querySelectorAll('[name="size"]:checked').length < 1) {
    isFormValid = false;
    errorThree.style.display = 'block';
    event.preventDefault();
  }

  return isFormValid;
});
