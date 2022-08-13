(() => {

  const inputName = document.querySelector('.name');
  const inputCardNumber = document.querySelector('.card__number');
  const inputMonth = document.querySelector('.month');
  const inputYear = document.querySelector('.year');
  const submitButton = document.querySelector('.submit');

  const validadeName = (event) => {
    const input = event.currentTarget;
    const regex = /^(?![ ])(?!.*[ ]{2})((?:e|da|do|das|dos|de|d'|D'|la|las|el|los)\s*?|(?:[A-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð'][^\s]*\s*?)(?!.*[ ]$))+$/

    const testName = regex.test(input.value);

    if(!testName) {
      submitButton.setAttribute('disabled', 'disabled');
      inputName.classList.add('error');
      inputName.nextElementSibling.classList.add('error--active');

    } else {
      submitButton.removeAttribute('disabled', 'disabled');
      inputName.classList.remove('error');
      inputName.nextElementSibling.classList.remove('error--active');
    }
  }

  const validadeCardNumber = (event) => {
    const input = event.currentTarget;
    const regex = /\d{16}/;

    const testCardNumberTest = regex.test(input.value);

    if(!testCardNumberTest) {
      submitButton.setAttribute('disabled', 'disabled');
      inputCardNumber.classList.add('error');
      inputCardNumber.nextElementSibling.classList.add('error--active');
    } else {
      submitButton.removeAttribute('disabled', 'disabled');
      inputCardNumber.classList.remove('error');
      inputCardNumber.nextElementSibling.classList.remove('error--active');
    }
  }

  const validadeMonth = (event) => {
    const input = event.currentTarget.value;
    
    if(input == '' || input.length != 2 || parseInt(input) > 12 || parseInt(input) < 1) {
      submitButton.setAttribute('disabled', 'disabled');
      inputMonth.classList.add('error');
      inputYear.nextElementSibling.classList.add('error--active');
    } else {
      submitButton.removeAttribute('disabled', 'disabled');
      inputMonth.classList.remove('error');
      inputYear.nextElementSibling.classList.remove('error--active');
    }
  }

  inputName.addEventListener('input', validadeName);
  inputCardNumber.addEventListener('input', validadeCardNumber);
  inputMonth.addEventListener('input', validadeMonth);
})();