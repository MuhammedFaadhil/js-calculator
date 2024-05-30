

    const cal = document.querySelector('.calculator')
    const display = cal.querySelector('.display');
    const buttons = cal.querySelectorAll('.button');
 
    let num = '';
    let operator = '';
    let num1 = '';
   
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const btntxt = button.textContent;
           
            if (button.classList.contains('number')) {
                num += btntxt;
                display.textContent = num;
            }
            if (button.classList.contains('operator')) {
                operator = btntxt;
                num1 = num;
                num = '';
            }
            if (button.classList.contains('clear')) {
                num = '';
                num1 = '';
                operator = '';
                display.textContent ='0';
                
            }
           
            if (button.classList.contains('equals')) {
                let result;
               
                switch (operator) {
                    case '+':
                        result = parseFloat(num1) + parseFloat(num);
                       
                        break;
                    case '-':
                        result = num1 - num;
                        break;
                    case 'x':
                        result = num1 * num;
                        break;
                    case '/':
                        result = num1 / num;
                }
                display.textContent = result;
               num = result;
               num1 = '';
               operator = '';
            }
        });
    });
