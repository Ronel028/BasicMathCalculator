// Declare variable for input
let firstNumber = document.getElementById('firstNumber');
let secondNumber = document.getElementById('secondNumber');

//Declare variable for Button operator
let add = document.getElementById('add');
let subtract = document.getElementById('subtract');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');
// -----------------------------------------------------------------------

let result = document.getElementById('result');
let calculate = document.getElementById('calculate');

let operatorName = document.getElementById('op-name');
// function to calculate
let answer;
add.addEventListener('click', function(){
    operatorName.innerHTML = 'Addition';
    answer = parseFloat(firstNumber.value) + parseFloat(secondNumber.value);
})
subtract.addEventListener('click', function(){
    operatorName.innerHTML = 'Subtraction';
    answer = parseFloat(firstNumber.value) - parseFloat(secondNumber.value);
})
multiply.addEventListener('click', function(){
    operatorName.innerHTML = 'Multiplication';
    answer = parseFloat(firstNumber.value) * parseFloat(secondNumber.value);
})
divide.addEventListener('click', function(){
    operatorName.innerHTML = 'Division';
    answer = (parseFloat(firstNumber.value) / parseFloat(secondNumber.value)).toFixed(2);
})
// -----------------------------------------------------------------------------------

// function to display answer
calculate.addEventListener('click', function(){
    if (add.click){
        result.innerHTML = answer;
    }
    else if (subtract.click){
        result.innerHTML = answer;
    }
    else if (multiply.click){
        result.innerHTML = answer;
    }
    else if (divide.click){
        result.innerHTML = answer;
    }
    else{
        result.innerHTML = 'Enter a number';
    }
})

let btn = document.querySelectorAll('button');

btn.forEach(button =>{
    button.addEventListener('click', function(){
        btn.forEach(button => {button.classList.remove('active')});
        button.classList.add('active');
    });
});