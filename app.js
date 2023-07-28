console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FIZZBUZZ');
    } else if (i % 3 === 0) {
      console.log('FIZZ');
    } else if (i % 5 === 0) {
      console.log('BUZZ');
    } else {
      console.log(i);
    }
  }
  

// Exercise 3 Section

//  Part 1: While Loop
let i = 1;
while (i <= 100) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}

// Part 2: Do-While Loop
let num = 1;
do {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log('FIZZBUZZ');
  } else if (num % 3 === 0) {
    console.log('FIZZ');
  } else if (num % 5 === 0) {
    console.log('BUZZ');
  } else {
    console.log(num);
  }
  num++;
} while (num <= 100);




// Exercise 4 Section

let value = Math.round(Math.random() * 500); 
let n = Math.round(Math.random() * (500 - 100) + 100); 

let foundValue = false;

for (let i = 1; i <= n; i++) {
  if (i === value) {
    foundValue = true;
    console.log('Found value!');
    break;
  }
}

if (!foundValue) {
  console.log('Did not find value');
}


// Exercise 5 Section

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let rangeLimit = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= rangeLimit; i++) {
  if (i % fizzDivisor === 0 && i % buzzDivisor === 0) {
    console.log('FIZZBUZZ');
  } else if (i % fizzDivisor === 0) {
    console.log('FIZZ');
  } else if (i % buzzDivisor === 0) {
    console.log('BUZZ');
  } else {
    console.log(i);
  }
}



