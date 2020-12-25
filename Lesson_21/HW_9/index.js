export const finishForm = () => {
  const loginForm = document.querySelector('.login-form');
  const newForm = document.createElement('input');
  const passwordForm = document.querySelector('input[name="password"]');

  newForm.setAttribute('type', 'text');
  newForm.setAttribute('name', 'login');
  passwordForm.setAttribute('type', 'password');
  loginForm.prepend(newForm);
};

finishForm();
