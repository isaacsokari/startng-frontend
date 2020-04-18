function yuGiOh(num) {
  // test if input is a number|integer
  if (typeof num !== "number") {
    return `${num} is not a number.`;
  } else if (num % 1 !== 0) {
    return `${num} is not an integer.`;
  }

  // create array of numbers or strings using given conditions
  let numArr = [];
  for (i = 1; i <= num; i++) {
    if (i % 2 === 0 && i % 3 !== 0 && i % 5 !== 0) {
      numArr.push("yu");
    } else if (i % 2 !== 0 && i % 3 === 0 && i % 5 !== 0) {
      numArr.push("gi");
    } else if (i % 2 !== 0 && i % 3 !== 0 && i % 5 === 0) {
      numArr.push("oh");
    } else if (i % 2 === 0 && i % 3 === 0 && i % 5 !== 0) {
      numArr.push("yu-gi");
    } else if (i % 2 === 0 && i % 3 !== 0 && i % 5 === 0) {
      numArr.push("yu-oh");
    } else if (i % 2 !== 0 && i % 3 === 0 && i % 5 === 0) {
      numArr.push("gi-oh");
    } else if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
      numArr.push("yu-gi-oh");
    } else {
      numArr.push(i);
    }
  }

  console.log(numArr);
  return numArr;
}

yuGiOh(100);
yuGiOh(30);
