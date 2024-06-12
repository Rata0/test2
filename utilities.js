import { firstNameInput, lastNameInput, emailInput, passwordInput, passwordConfirmInput, birthdateInput } from "./app.js";
const formButton = document.getElementById('form-button');

export const clearForm = () => {
  const formFields = [firstNameInput, lastNameInput, emailInput, passwordInput, passwordConfirmInput, birthdateInput];
  formFields.forEach(field => {
    field.value = '';
    field.classList.remove('is-valid');
  });
}

export const areAllFieldsValid = () => {
  return (
    firstNameInput.classList.contains('valid') &&
    lastNameInput.classList.contains('valid') &&
    emailInput.classList.contains('valid') &&
    passwordInput.classList.contains('valid') &&
    passwordConfirmInput.classList.contains('valid') &&
    birthdateInput.classList.contains('valid')
  );
}

export const setFormButtonState = () => formButton.disabled = areAllFieldsValid() ? false : true;