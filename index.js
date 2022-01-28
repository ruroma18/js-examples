const trafficLight = function (trafficColor) {
  if (trafficColor === 'red') {
    console.log('Stop');
  }
  else if (trafficColor === 'yellow') {
    console.log('Wait');
  }
  else if (trafficColor === 'green') {
    console.log('Go')
  }
  else {
    console.log('ERROR color')
  }
}

const enterTrafficColor = prompt('Enter traffic color');
const result = trafficLight(enterTrafficColor);
console.log(result);


const calculator = function (num1, num2, arithmeticOperator) {
  switch (arithmeticOperator) {
    case '+':
      console.log(num1 + num2);
      break;
    case '-':
      console.log(num1 - num2);
      break;
    case '*':
      console.log(num1 * num2);
      break;
    case '/':
      console.log(num1 / num2);
      break;
    default:
      console.log('ERROR operator');

  }
}

const enterNum1 = +prompt('Enter first number');
const enterNum2 = +prompt('Enter second number');
const enterArithmeticOperator = prompt('Enter arithmetic operator');
result = calculator(enterNum1, enterNum2, enterArithmeticOperator);


const checkSeason = function (numberOfMonth) {
  switch (numberOfMonth) {
    case 12:
    case 1:
    case 2:
      console.log('Winter');
      break;
    case 3:
    case 4:
    case 5:
      console.log('Spring');
      break;
    case 6:
    case 7:
    case 8:
      console.log('Summer');
      break;
    case 9:
    case 10:
    case 11:
      console.log('Autumn');
      break;
    default:
      console.log('Use correct month number');
      break;
  }
}

const enterMonthNumber = +prompt('Enter number of month');
const result = checkSeason(enterMonthNumber);








