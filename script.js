const inputs = document.querySelectorAll('input'),
  verifyOTPbtn = document.querySelector('button');

inputs.forEach((input, idx) => {
  input.addEventListener('keydown', (e) => {
    const currentInput = input,
      nextInput = input.nextElementSibling,
      prevInput = input.previousElementSibling;

    const inputKeyCode = e.keyCode || e.which;

    const notDigit = inputKeyCode < 48 || inputKeyCode > 58;

    

    if (e.code === 'Tab' && nextInput && nextInput.disabled !== true) {
      nextInput.focus();
    }
    if (e.code === 'Delete') {
      currentInput.value = '';
    }

    if (e.code === 'Backspace') {
      currentInput.value = '';
      if (prevInput) {
        currentInput.setAttribute('disabled', true);
        prevInput.focus();
        e.preventDefault();
      }
    }

    if (notDigit) {
      // Prevent the default behavior of the key press
      e.preventDefault();
    }

    if (!notDigit && currentInput.value !== '') {
      e.preventDefault();
      currentInput.value = e.key;
    }
  });
});

inputs.forEach((input, idx) => {
  input.addEventListener('keyup', (e) => {
    const currentInput = input,
      nextInput = input.nextElementSibling,
      prevInput = input.previousElementSibling;

    let inputKeyCode = e.keyCode || e.which;

    const notDigit = inputKeyCode < 49 || inputKeyCode > 57;

    if (!notDigit && nextInput && nextInput.hasAttribute('disabled')) {
      nextInput.removeAttribute('disabled');
      nextInput.focus();
    }

    if (!notDigit && nextInput && currentInput.value !== '') {
      nextInput.removeAttribute('disabled');
      nextInput.focus();
    }

    if (!inputs[3].disabled && inputs[3].value !== '') {
      verifyOTPbtn.removeAttribute('disabled');
    } else {
      verifyOTPbtn.setAttribute('disabled', true);
    }
  });
}); 

//  focus the first input box
window.addEventListener('load', () => inputs[0].focus());
