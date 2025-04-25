const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

  function isAdult(age) {
    if (age >= 18) {
        return 'Adult';
    } else {
        return 'Minor';
    }
}

console.log('Exercise 2:', isAdult(21));

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



