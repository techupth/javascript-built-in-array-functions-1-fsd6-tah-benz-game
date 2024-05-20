const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  let average = students.reduce(together, 0);
  return average / students.length;
}

function together(acc, students) {
  return acc + students.score;
}

let result = getAverageStudentScore(students);

console.log(result); // Output: 87.5
