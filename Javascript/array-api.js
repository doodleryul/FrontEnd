// Q1. make a string out of an array
console.log('\nQ1. make a string out of an array');
{
  const fruits = ['apple', 'banana', 'orange'];
  console.log(fruits.join(', '));
}

// Q2. make an array out of a string
console.log('\nQ2. make an array out of a string')
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  console.log(fruits.split());
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
console.log('\nQ3. make this array look like this: [5, 4, 3, 2, 1]');
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.reverse());
}

// Q4. make new array without the first two elements
// splice는 원본 array 자체를 바꿔버림 -> slice 사용할 것
console.log('\nQ4. make new array without the first two elements');

// old
console.log('\n#old');
{
  const array = [1, 2, 3, 4, 5];
  array.splice(0, 2); // 틀렸다...
  console.log(array);
}

// new
console.log('\n#new');
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.slice(0, 2));
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
console.log('\nQ5. find a student with the score 90');

// old
console.log('\n#old');
{
  for (let i=0; i<students.length; i++) {
    if (students[i].score == 90) {
      console.log(students[i]);
    }
  }
}

// new
console.log('\n#new');
{
  const result = students.filter(student => student.score === 90);
  console.log(result);
}


// Q6. make an array of enrolled students
console.log('\nQ6. make an array of enrolled students');

// old
console.log('\n#old');
{
  const studentsEnrolled = []
  for (value of students) {
    if (value.enrolled === true) {
      studentsEnrolled.push(value)
    };
  };
  console.log(studentsEnrolled);
}

// new
console.log('\n#new');
{
  const studentEnrolled = students.filter(student => student.enrolled);
  console.log(studentEnrolled);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
console.log("\nQ7. make an array containing only the students' scores");
// old
console.log('\n#old');
{
  const studentsScore = []
  for (value of students) {
    studentsScore.push(value.score)
  };
  console.log(studentsScore);
}

// new
console.log('\n#new');
{
  const studentScore = students.map(student => student.score);
  console.log(studentScore);
}

// Q8. check if there is a student with the score lower than 50
console.log('\nQ8. check if there is a student with the score lower than 50');

// old
console.log('\n#old');
{
  function checkScore(element) {
   if (element.score < 50) {
     return 'There is a student with the score lower than 50'
   } 
  }
  console.log(students.find(checkScore));
}

// new
console.log('\n#new');
{
  const checkScore = students.some(student => student.score <= 50);
  console.log(checkScore);
}
// Q9. compute students' average score
console.log("\nQ9. compute students' average score");

// old
console.log('\n#old');
{
  let total = 0; //const는 안됨 변경할 수 없는 readonly이기 때문
  for (value of students) {
    total += value.score
  };
  const average = (total / students.length);
  console.log(average);
}

// new
console.log('\n#new');
{
  const total = students.reduce((accum, corr) => accum + corr.score, 0);
  console.log(total/students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
console.log('\nQ10. make a string containing all the scores');

// old
console.log('\n#old');
{
  const studentsScoreStr = [];
  for (value of students) {
    studentsScoreStr.push(String(value.score))
  };
  console.log(studentsScoreStr.join());
}

// new
console.log('\n#new');
{
  const studentScore = students
  .map(student => student.score)
  .join() // .map(String);
  console.log(studentScore);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
console.log('\nQ10 sorted in ascending order');

// old
console.log('\n#old');
{
  const studentsScoreStr = [];
  for (value of students) {
    studentsScoreStr.push(String(value.score))
  };
 studentsScoreStr.sort();
 console.log(studentsScoreStr.join());
}

// new
console.log('\n#new');
// compareFunction(a, b)이 0보다 큰 경우, b를 a보다 낮은 인덱스로 소트합니다.
{
  const studentScoreSorted = students
  .map(student => student.score)
  .sort((a, b) => a - b)
  .join();
  console.log(studentScoreSorted);
}
