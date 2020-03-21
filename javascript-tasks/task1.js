// order = lastName, firstName middleName
let fullName = "Sokari, Isaac Tamunoipirinye";

let courses = ["HTML", "CSS", "Javascript", "Design"];

let returnedNumbers = [];
function evenOrOdd() {
  if (courses.length !== 0 && courses.length % 2 === 1) {
    for (let i = 1; i <= 200; i += 2) {
      returnedNumbers.push(i);
    }
  } else if (courses.length !== 0 && courses.length % 2 === 0) {
    for (let i = 0; i <= 200; i += 2) {
      returnedNumbers.push(i);
    }
  }
  return returnedNumbers;
}

console.log(evenOrOdd());

/* Chose to return an array to save space on the console. */
