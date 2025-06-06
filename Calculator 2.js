document.addEventListener('DOMContentLoaded', function() {
    let display = document.querySelector('.display');
    let buttons = document.querySelectorAll('button');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            let buttonText = this.innerText;

            if (buttonText === 'AC') {
                display.value = '';
                resetDisplayBg();
            } else if (buttonText === '←') {
                display.value = display.value.slice(0, -1);
                resetDisplayBg();
            } else if (buttonText === '=') {
                try {
                    display.value = eval(display.value);
                    display.style.backgroundColor = '#6bcfbe';  // light color on result
                } catch {
                    display.value = 'Error';
                    display.style.backgroundColor = '#f74848';  // light red for error
                }
            } else {
                display.value += buttonText;
                resetDisplayBg();
            }
        });
    });

    function resetDisplayBg() {
        display.style.backgroundColor = '#c4ea96'; // original bg color
    }
});
