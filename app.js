const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  // Exercise 2

  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

  function isAdult(age) {
    if (age >= 18) {
        return 'Adult';
    } else {
        return 'Minor';
    }
}

console.log('Exercise 2:', isAdult(21));

// Exercise 3 

function isCharAVowel(char) {
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    return true;
  } else {
    return false;
  }
}

console.log(isCharAVowel('a'))



// Exercise 4

function generateEmail(name, domain) {
  return `${name}@${domain}`;
}

console.log('Exercise 3:', generateEmail("johnsmith", "example.com")); 


// Exercise 5

function greetUser(name, timeOfDay) {
  return `Good ${timeOfDay}, ${name}!`;
}

console.log('Exercise 5:', greetUser("Sam", "morning"));

// Exercise 6

function maxOfThree(num1, num2, num3) {
  let largest = num1;

  if (num2 > largest) {
    largest = num2;
  }

  if (num3 > largest) {
    largest = num3;
  }

  return largest;
}


console.log('Exercise 6 :', maxOfThree(5, 10, 8));

// Exercise 7

function calculateTip(billAmount, tip) {
  return (billAmount * (tip / 100));
}

console.log('Exercise 7 :', calculateTip(40, 20));

// Exercise 8 
// not sure if this the the correct way to do it as 

function convertTemperature(temp, scale) {
  if (scale === 'C') {
    return ((temp * 1.8) + 32);
  } else {
    return ((temp - 32) / 1.8);
  }
}

console.log('Exercise 8', convertTemperature(32, "C"));

// // Exercise 9

function basicCalculator(num1, num2, operationType) {
  if (operationType === 'add') {
    return num1 + num2;
  } else if (operationType === 'subtract') {
    return num1 - num2;
  } else if (operationType === 'multiply') {
    return num1 * num2;
  } else if (operationType === 'divide') {
    return num1 / num2;
  }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract")); 

