const textInput = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');
 
textInput.addEventListener('input', event => {
  const userName = event.currentTarget.value;
  if (userName.split('').every(nam => nam === ' ')) {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = userName.trimEnd();
  }
});
