(() => {

  const inputName = document.querySelector('.name');
  const inputCardNumber = document.querySelector('.card__number');
  const inputMonth = document.querySelector('.month');
  const inputYear = document.querySelector('.year');
  const inputCvc = document.querySelector('.input__cvc');
  const displayCardNumber = document.querySelectorAll('.number > span');
  const displayName = document.querySelector('.nome');
  const displayDateValidade = document.querySelector('.validade');
  const displayCvc = document.querySelector('.card__back > span');
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
      displayName.textContent = input.value;
    }
  }

  const validadeCardNumber = (event) => {
    const input = event.currentTarget;
    const regex = /\d{16}/;

    const testCardNumberTest = regex.test(input.value);

    if(!testCardNumberTest && input.value != 16) {
      submitButton.setAttribute('disabled', 'disabled');
      inputCardNumber.classList.add('error');
      inputCardNumber.nextElementSibling.classList.add('error--active');
    } else {
      submitButton.removeAttribute('disabled', 'disabled');
      inputCardNumber.classList.remove('error');
      inputCardNumber.nextElementSibling.classList.remove('error--active');
      displayCardNumber[0].textContent = input.value.slice(0,4)
      displayCardNumber[1].textContent = input.value.slice(4,8);
      displayCardNumber[2].textContent = input.value.slice(8,12);
      displayCardNumber[3].textContent = input.value.slice(12,16);
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
      
      if (inputYear.value) {
        displayDateValidade.textContent = `${inputMonth.value}/${inputYear.value}`;
      } else {
        displayDateValidade.textContent = `${inputMonth.value}/00`;
      }
    }
  }

  const validadeYear = (event) => {
    const input = event.currentTarget.value;

    if(input == '' || input.length != 2) {
      submitButton.setAttribute('disabled', 'disabled');
      inputYear.classList.add('error');
      inputYear.nextElementSibling.classList.add('error--active');
    } else {
      submitButton.removeAttribute('disabled', 'disabled');
      inputYear.classList.remove('error');
      inputYear.nextElementSibling.classList.remove('error--active');

      if (inputMonth.value) {
        displayDateValidade.textContent = `${inputMonth.value}/${inputYear.value}`;
      } else {
        displayDateValidade.textContent = `00/${inputYear.value}`;
      }
    }
  }

  const ValidaCvc = (event) => {
    const input = event.currentTarget.value;
    if (input == '' || input.length != 3) {
      submitButton.setAttribute('disabled', 'disabled');
      inputCvc.classList.add('error');
      inputCvc.nextElementSibling.classList.add('error--active');
    } else {
      submitButton.removeAttribute('disabled', 'disabled');
      inputCvc.classList.remove('error');
      inputCvc.nextElementSibling.classList.remove('error--active');
      displayCvc.textContent = input;
    }
  }

  inputName.addEventListener('input', validadeName);
  inputCardNumber.addEventListener('input', validadeCardNumber);
  inputMonth.addEventListener('input', validadeMonth);
  inputYear.addEventListener('input', validadeYear);
  inputCvc.addEventListener('input', ValidaCvc);
})();