// Exercise: Create 5 different variables that holds 5 different number grades. (ex: let laurasGrade = 99)
// Write a function that accepts the five number grades grades, and returns each of their letter grades based on their number grades.
// Scoring: A: 90 + , B: 80 - 89, C: 70-79, D: 60 - 69, F: 60 -

function grade(studentsGrade) {
    if(studentsGrade >= 90) {
        return 'A';
    } else if (studentsGrade >= 80) {
        return 'B';
    } else if(studentsGrade >= 70) {
        return 'C';
    } else if(studentsGrade >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}
let mattsGrade = 69;
let fredsGrade = 40;
let davesGrade = 95;
let erinsGrade = 88;
let jeffsGrade = 77;
console.log(grade(mattsGrade));
console.log(grade(fredsGrade));
console.log(grade(davesGrade));
console.log(grade(erinsGrade));
console.log(grade(jeffsGrade));