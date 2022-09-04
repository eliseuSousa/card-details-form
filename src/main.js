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
  const submitButton = document.querySelector('#submit');

  const validadeName = (event) => {
    const input = event.currentTarget;
    const regex = /^(?![ ])(?!.*[ ]{2})((?:e|da|do|das|dos|de|d'|D'|la|las|el|los)\s*?|(?:[A-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð'][^\s]*\s*?)(?!.*[ ]$))+$/

    const testName = regex.test(input.value);

    if(!testName) {
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

    if(input.value.length < 16) {
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

  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const erros = document.querySelectorAll('.error--active');

    const formulario = document.querySelector('form');
    formulario.remove();

    const containerDireito = document.querySelector('.container__direito');
    const novaDiv = document.createElement('div');
    novaDiv.classList.add('success');
    novaDiv.innerHTML = `<img class="success__icone" src="./images/icon-complete.svg" alt="Icon complete">
    <div class="texto">
      <h1 class="texto__agradecimento">Thank you!</h1>
      <p class="texto__paragrafo">We've added your card details</p>
    </div>
    <button class="success__finalizar botao">Continue</button>`;

    containerDireito.appendChild(novaDiv);
    
  })
})();