let display = document.querySelector('.display');
let buttons = document.querySelectorAll('button');
let action = '';
let numOne = '';
let numTwo = '';
let result = '';

for (let e of buttons) {
    e.addEventListener('click', () => {
        if (!e.className.includes('btn-orange') && action === '') {
            numOne += e.textContent;
            display.textContent = numOne;
        } else if (numOne !== '' && e.className.includes('btn-orange')) {
            action = e.textContent;
        } else if (numOne !== '' && action !== '') {
            numTwo += e.textContent;
            display.textContent = numTwo;
        }
        switch (action) {
            case "AC":
                display.textContent = "0";
                numOne = '';
                numTwo = '';
                action = '';
                break;
            case "-":
                result = numOne - numTwo;
                break;
            case "+":
                result = Number(numOne) + Number(numTwo);
                break;
            case "=":
                result = String(result);
                if (result.length > 11) {
                    result = result.slice(0, 11);
                    display.textContent = result;
                } else {
                    display.textContent = result;
                }
                numOne = result;
                action = '';
                numTwo = '';
                break;
            case "*":
                result = numOne * numTwo;
                break;
            case "/":
                result = numOne / numTwo;
                break;
            case "%":
                result = numOne - (numOne * numTwo / 100);
                break;
            case "√":
                result = Math.sqrt(Number(numOne));
                break;
            default: 
                break;
        }
    });
}


/* Варіант 2 */

/* let buttons = Array.from(document.querySelectorAll('button'));

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
}); */