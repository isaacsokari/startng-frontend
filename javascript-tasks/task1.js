// lastName, firstName middleName
let fullName = "Sokari, Isaac Tamunoipirinye";

let courses = ["HTML", "CSS", "Javascript", "Design"];

if (courses.length !== 0 && courses.length % 2 === 1) {
  for (let i = 1; i <= 200; i += 2) {
    console.log(i);
  }
} else if (courses.length !== 0 && courses.length % 2 === 0) {
  for (let i = 0; i <= 200; i += 2) {
    console.log(i);
  }
}
