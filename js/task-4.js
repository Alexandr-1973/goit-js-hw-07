const registerForm = document.querySelector('.login-form');

registerForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trimEnd();
  const password = form.elements.password.value.trimEnd();

  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  }

  console.log({ email, password });
  form.reset();
}
