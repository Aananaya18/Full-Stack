    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.display-btn, .display-btn-op');
    const clearBtn = document.querySelector('.display-btn-clear');
    const backspaceBtn = document.querySelector('.display-btn-remove');
    const calculateBtn = document.querySelector('.calculate');

    buttons.forEach(button => {
        button.addEventListener('click',() => {
            display.value += button.textContent;
        });
    });
    clearBtn.addEventListener('click', () => {
        display.value = '';
    });
    backspaceBtn.addEventListener('click', () => {
        display.value = display.value.slice(0,-1);
    });
    calculateBtn.addEventListener('click', () => {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = 'Error';
        }
    });