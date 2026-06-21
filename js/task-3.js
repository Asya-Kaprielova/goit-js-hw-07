const name = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
name.addEventListener('input', () => {
    const trimmedValue = event.target.value.trim();
    nameOutput.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
});