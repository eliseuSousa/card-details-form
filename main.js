(() => {

  const inputName = document.querySelector('.name');
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

  inputName.addEventListener('input', validadeName);

})();