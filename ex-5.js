const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(acc, cur) {
  return acc + cur;
}

let mean = [];
let numStudent = students.length;
for (let index = 0; index < students.length; index++) {
  mean.push(students[index].score);
}

console.log(mean.reduce(getAverageStudentScore, 0) / students.length); // Output: 87.5
