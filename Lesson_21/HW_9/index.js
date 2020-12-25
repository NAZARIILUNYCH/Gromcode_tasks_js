export const finishForm = () => {
  const loginForm = document.querySelector('.login-form');
  const newForm = document.createElement('input');
  const passwordForm = document.querySelector('.login-form > input[name="password"]');

  newForm.type = 'text';
  newForm.name = 'login';
  passwordForm.type = 'password';
};

finishForm();
