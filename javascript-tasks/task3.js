function yuGiOh(num) {
  // test if input is a number|integer
  if (typeof num !== "number") {
    return `${num} is not a number.`;
  } else if (num % 1 !== 0) {
    return `${num} is not an integer.`;
  }

  // create array of numbers from 1 to num
  let numArr = [];
  for (i = 1; i <= num; i++) {
    numArr.push(i);
  }

  // tests for divisibility and number replacement
  numArr.map((num) => {
    if (num % 2 === 0 && num % 3 !== 0 && num % 5 !== 0) {
      numArr.splice(numArr.indexOf(num), 1, "yu");
    } else if (num % 2 !== 0 && num % 3 === 0 && num % 5 !== 0) {
      numArr.splice(numArr.indexOf(num), 1, "gi");
    } else if (num % 2 !== 0 && num % 3 !== 0 && num % 5 === 0) {
      numArr.splice(numArr.indexOf(num), 1, "oh");
    } else if (num % 2 === 0 && num % 3 === 0 && num % 5 !== 0) {
      numArr.splice(numArr.indexOf(num), 1, "yu-gi");
    } else if (num % 2 === 0 && num % 3 !== 0 && num % 5 === 0) {
      numArr.splice(numArr.indexOf(num), 1, "yu-oh");
    } else if (num % 2 !== 0 && num % 3 === 0 && num % 5 === 0) {
      numArr.splice(numArr.indexOf(num), 1, "gi-oh");
    } else if (num % 2 === 0 && num % 3 === 0 && num % 5 === 0) {
      numArr.splice(numArr.indexOf(num), 1, "yu-gi-oh");
    } 
  });

  console.log(numArr);
  return numArr;
}

yuGiOh(100);
yuGiOh(69);
