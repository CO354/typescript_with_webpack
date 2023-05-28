import isEmail from 'validator/lib/isEmail';
const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', function (event: Event) {
  event.preventDefault();

  // essa funcao esta chamando ela mesma com this que por sua vez vai executar
  hideErrorMessages(this);

  // verificando os campos vazios
  checkForEmptyField(username, email, password, password2);
  checkEmail(email);
  checkEqualPasswords(password, password2);

  if (shouldSendForm(this)) console.log('Formulario enviado');
});

//checkPasswords verificando se os password conferem
function checkEqualPasswords(
  password: HTMLInputElement,
  password2: HTMLInputElement,
): void {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'Senha nao batem');
    showErrorMessage(password2, 'Senha nao batem');
  }
}
// verificando o email
function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, 'Email Invalido');
}

// A Funcao criada para verificar os campos vazios

function checkForEmptyField(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'Campo nao pode ficar vazia');
  });
}

// NESSA A funcao responsavel para ocultar os erros
function hideErrorMessages(form: HTMLFormElement): void {
  // veja bem esta sendo concatenado o SHOW_ERROR_MESSAGES, eh uma classe tambem
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
}

// A funcao que mostra os erros
function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerHTML = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;

  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    .forEach(() => (send = false));
  return send;
}

// PARA DEBUGAR USE ISSO ABAIXO
/*
showErrorMessage(username, 'MENSAGEM');
// Aqui esta chamando o form que ela mesma propria para ja ocular os errors

hideErrorMessages(form);
*/
// showErrorMessage(username, 'MENSAGEM');
// hideErrorMessages(form);
