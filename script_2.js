function factorial(n) {
  if(n === 0) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
};

let number = prompt("De quel nombre veux-tu calculer la factorielle ?");
console.log(factorial(number));