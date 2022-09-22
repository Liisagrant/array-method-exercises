/*
Exercise 3: Get online students with a mark >= 75

Filter students that have a mark ('mark') above 75 and that
are online students (isOnline)

An array 'students' has been provided for you.

A variable 'filteredStudents' has been provided for you. You should
set your .filter result to this variable.

*/

const students = [
  {
    studentName: "Ola",
    mark: 50,
    isOnline: false,
  },
  {
    studentName: "Kari",
    mark: 80,
    isOnline: true,
  },
  {
    studentName: "Nora",
    mark: 60,
    isOnline: false,
  },
];

const filteredStudents = students.filter((student) => student.mark >= 75 && student.isOnline === true);

console.log(filteredStudents);
