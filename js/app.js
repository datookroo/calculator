function add(num1, num2){
   return num1 + num2;
};

function subtract(num1, num2){
    return num1 - num2;
 };

function multiply(num1, num2){
    return num1 * num2;
};

function divide(num1, num2){
    return num1 / num2;
};

function operate(oper, x, y){
    switch(oper){
        case '+':
            return add(x, y);
        case '-':
            return subtract(x, y);
        case '*':
            return multiply(x, y);
        case '÷':
            return divide(x, y);    
    };
};

const x = document.querySelector('#x');
const y = document.querySelector('#y');
y.textContent = '0';
// let Y = y.textContent.split('');
let X = x.textContent.split('');
let Y = y.textContent.split('');

let operation = [];
let operator;
let equall;

const btn = document.querySelectorAll('.num');
const oper = document.querySelectorAll('.oper');
const equal = document.querySelector('.equal');
const cle = document.querySelector('#one');
const del = document.querySelector('#two')



btn.forEach((button) => {
    button.addEventListener('click', () => {
        
        if(Y.length >= 1 && button.textContent == '.'){
            if(!Y.includes('.')){
                Y.push(button.textContent)
            }
        }else if(Y.length == 1 && Y[0] == '0'){
            delete Y[0];
            Y.push(button.textContent)
        }else {
            Y.push(button.textContent)
        };

        y.textContent = Y.join('');
        
        
    });
});

oper.forEach((button) => {
    button.addEventListener('click', () => {
        
            operator = button.textContent;
            X.push(y.textContent)
            X.push(operator)
            operation.push(y.textContent);
            x.textContent = X[0] + X[1];
        
            y.textContent = '0';
            Y = y.textContent.split('')
    });
});

equal.addEventListener('click', () => {
    if(X.length >= 1 && Y.length >= 1){
        equall = equal.textContent;
        X.push(y.textContent);
        X.push(equall);
        operation.push(y.textContent)
        x.textContent = x.textContent + X[2] + X[3];
        y.textContent = operate(operator, Number(operation[0]), Number(operation[1]))
        X = x.textContent.split('');
        operation = [];
    };
});

del.addEventListener('click', () => {
    Y.pop();
    y.textContent = Y.join('');
})

cle.addEventListener('click', () => {
    if(!X.length > 1){
        y.textContent = '0'
        x.textContent = ''
    }else {
        y.textContent = '0'
        Y = y.textContent.split('')
        x.textContent = ''
    }
    
});














