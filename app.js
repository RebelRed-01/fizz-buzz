let maxVal = parseInt(prompt('Please enter the number you would like to FizzBuzz up to: '));
let numbers = document.getElementById('numbers');


for (let i = 1; i <= maxVal; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        numbers.innerText += ' Fizz Buzz,';
    } else if (i % 3 === 0) {
        numbers.innerText += ' Fizz,';
    } else if (i % 5 === 0) {
        numbers.innerText += ' Buzz,';
    } else {
        numbers.innerText += ` ${i},`;
    }


}
