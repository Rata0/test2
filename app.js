import { setFormButtonState } from "./utilities.js";
// Поля ввода
export const firstNameInput = document.getElementById('first-name');
export const lastNameInput = document.getElementById('last-name');
export const emailInput = document.getElementById('email');
export const passwordInput = document.getElementById('password');
export const passwordConfirmInput = document.getElementById('password-confirm');
export const birthdateInput = document.getElementById('birth-day');
// Поля ошибки
const firstNameError = document.getElementById('first-name-error');
const lastNameError = document.getElementById('last-name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const passwordConfirmError = document.getElementById('password-confirm-error');
const birthdateError = document.getElementById('birth-day-error');

const nameAndSurnameReg = /^[а-яА-Я\s]+$/;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

firstNameInput.addEventListener('input', () => {
  if (!nameAndSurnameReg.test(firstNameInput.value) || firstNameInput.value.length < 4 || firstNameInput.value.length > 20) {
    firstNameError.textContent = 'Имя должно содержать только буквы и быть длиной от 4 до 20 символов';
    firstNameInput.classList.add('invalid');
    firstNameInput.classList.remove('valid');
  } else {
    firstNameError.textContent = '';
    firstNameInput.classList.remove('invalid');
    firstNameInput.classList.add('valid');
  }


  setFormButtonState();
});

lastNameInput.addEventListener('input', () => {
  if (!nameAndSurnameReg.test(lastNameInput.value) || lastNameInput.value.length < 4 || lastNameInput.value.length > 20) {
    lastNameError.textContent = 'Фамилия должна содержать только буквы и быть длиной от 4 до 20 символов';
    lastNameInput.classList.add('invalid');
    lastNameInput.classList.remove('valid');
  } else {
    lastNameError.textContent = '';
    lastNameInput.classList.remove('invalid');
    lastNameInput.classList.add('valid');
  }

  setFormButtonState();
});

emailInput.addEventListener('input', () => {
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = 'Пожалуйста, введите корректный email-адрес';
    emailInput.classList.add('invalid');
    emailInput.classList.remove('valid');
  } else {
    emailError.textContent = '';
    emailInput.classList.remove('invalid');
    emailInput.classList.add('valid');
  }

  setFormButtonState();
});

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  let errorMessage = '';

  if (password.length < 8) {
    errorMessage += 'Пароль должен содержать минимум 8 символов, ';
  }

  if (!/[A-Z]/.test(password)) {
    errorMessage += 'пароль должен содержать как минимум одну заглавную букву, ';
  }

  if (!/[a-z]/.test(password)) {
    errorMessage += 'пароль должен содержать как минимум одну строчную букву, ';
  }

  if (!/\d/.test(password)) {
    errorMessage += 'пароль должен содержать как минимум одну цифру, ';
  }

  if (!/[@$!%*?&]/.test(password)) {
    errorMessage += 'пароль должен содержать как минимум один специальный символ, ';
  }

  if (errorMessage.length > 0) {
    errorMessage = errorMessage.slice(0, -2);
    passwordError.textContent = errorMessage;
    passwordInput.classList.add('invalid');
    passwordInput.classList.remove('valid');
  } else {
    passwordError.textContent = '';
    passwordInput.classList.remove('invalid');
    passwordInput.classList.add('valid');
  }

  setFormButtonState();
});

passwordConfirmInput.addEventListener('input', () => {
  const passwordValue = passwordInput.value;
  const confirmationValue = passwordConfirmInput.value;

  if (passwordValue !== confirmationValue) {
    passwordConfirmError.textContent = 'Пароль и подтверждение пароля должны совпадать';
    passwordConfirmInput.classList.add('invalid');
    passwordConfirmInput.classList.remove('valid');
  } else {
    passwordConfirmError.textContent = '';
    passwordConfirmInput.classList.remove('invalid');
    passwordConfirmInput.classList.add('valid');
  }

  setFormButtonState();
});

birthdateInput.addEventListener('input', () => {
  const birthDate = new Date(birthdateInput.value);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();

  if (age < 18) {
    birthdateError.textContent = 'Возраст должен быть не младше 18 лет.';
    birthdateInput.classList.add('invalid');
    birthdateInput.classList.remove('valid');
  } else {
    birthdateError.textContent = '';
    birthdateInput.classList.remove('invalid');
    birthdateInput.classList.add('valid');
  }

  setFormButtonState();
});
