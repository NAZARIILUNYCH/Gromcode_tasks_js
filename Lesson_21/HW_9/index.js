export const finishForm = () => {
  const loginForm = document.querySelector('.login-form');
  const newForm = document.createElement('input');
  const passwordForm = document.querySelector('input[name="password"]');

  newForm.setAttribute('type', 'text');
  newForm.setAttribute('name', 'login');

  loginForm.prepend(newForm);

  passwordForm.setAttribute('type', 'password');
  passwordForm.setAttribute('name', 'password');
};

finishForm();
