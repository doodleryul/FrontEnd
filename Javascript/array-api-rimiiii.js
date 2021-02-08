// The answers I solved.


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
{
  const array = [1, 2, 3, 4, 5];
  array.splice(0, 2);
  console.log(array);
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
console.log(students.slice(2));
console.log(students[0].score);

// Q5. find a student with the score 90
console.log('\nQ5. find a student with the score 90');
{
  for (let i=0; i<students.length; i++) {
    if (students[i].score == 90) {
      console.log(students[i]);
    }
  }
}


// Q6. make an array of enrolled students
console.log('\nQ6. make an array of enrolled students');
{
  const studentsEnrolled = []
  for (value of students) {
    if (value.enrolled === true) {
      studentsEnrolled.push(value)
    };
  };
  console.log(studentsEnrolled);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
console.log("\nQ7. make an array containing only the students' scores");
{
  const studentsScore = []
  for (value of students) {
    studentsScore.push(value.score)
  };
  console.log(studentsScore);
}

// Q8. check if there is a student with the score lower than 50
console.log('\nQ8. check if there is a student with the score lower than 50');
{
  function checkScore(element) {
   if (element.score < 50) {
     return 'There is a student with the score lower than 50'
   } 
  }
  console.log(students.find(checkScore));
}

// Q9. compute students' average score
console.log("\nQ9. compute students' average score");
{
  let total = 0; //const는 안됨 변경할 수 없는 readonly이기 때문
  for (value of students) {
    total += value.score
  };
  const average = (total / students.length);
  console.log(average);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
console.log('\nQ10. make a string containing all the scores');
{
  const studentsScoreStr = [];
  for (value of students) {
    studentsScoreStr.push(String(value.score))
  };
  console.log(studentsScoreStr);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
console.log('\nQ10 sorted in ascending order');
{
  const studentsScoreStr = [];
  for (value of students) {
    studentsScoreStr.push(String(value.score))
  };
 studentsScoreStr.sort();
 console.log(studentsScoreStr);
}
