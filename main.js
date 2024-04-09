let display = document.querySelector('.display');
let buttons = Array.from(document.querySelectorAll('button'));

buttons.map((button) => {
    button.addEventListener('click', (e) => {
        switch(e.target.textContent) {
            case "AC": 
                display.textContent = "0";
                break;
            case "=":
                try {
                    display.textContent = eval(display.textContent);
                } catch (e) {
                    display.textContent = "Error!";
                }
                /* display.textContent = eval(display.textContent); */
                break;
            case "%":
                let passedText = display.textContent + "/100";
                display.textContent = eval(passedText);
                break;
            case "+/-":
                display.textContent = "-";
                break;
            default: 
                if (display.textContent === "0" && e.target.textContent !== ".") {
                    display.textContent = e.target.textContent;
                } else {
                    display.textContent += e.target.textContent;
                }
        }
        console.log(button);
        console.log(buttons);
    });
});