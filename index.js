// const trafficLight = function (trafficColor) {
//   if (trafficColor === 'red') {
//     return 'Stop';
//   }
//   else if (trafficColor === 'yellow') {
//     return 'Wait';
//   }
//   else if (trafficColor === 'green') {
//     return 'Go';
//   }
//   else {
//     return 'ERROR color';
//   }
// }

// const enterTrafficColor = prompt('Enter traffic color');
// const result = trafficLight(enterTrafficColor);
// console.log(result);


// const calculator = function (num1, num2, arithmeticOperator) {
//   switch (arithmeticOperator) {
//     case '+':
//       return num1 + num2;
//       break;
//     case '-':
//       return num1 - num2;
//       break;
//     case '*':
//       return num1 * num2;
//       break;
//     case '/':
//       return num1 / num2;
//       break;
//     default:
//       return 'ERROR operator';
//   }
// }

// const enterNum1 = +prompt('Enter first number');
// const enterNum2 = +prompt('Enter second number');
// const enterArithmeticOperator = prompt('Enter arithmetic operator');
// result = calculator(enterNum1, enterNum2, enterArithmeticOperator);
// console.log(result);

const checkSeason = function (numberOfMonth) {
  switch (numberOfMonth) {
    case 12:
    case 1:
    case 2:
      return 'Winter';
      break;
    case 3:
    case 4:
    case 5:
      return 'Spring';
      break;
    case 6:
    case 7:
    case 8:
      return 'Summer';
      break;
    case 9:
    case 10:
    case 11:
      return 'Autumn' ;
      break;
    default:
      return 'Use correct month number';
      break;
  }
}

const enterMonthNumber = +prompt('Enter number of month');
const result = checkSeason(enterMonthNumber);
console.log(result);








