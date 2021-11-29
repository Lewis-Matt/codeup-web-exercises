// Exercise: Create 5 different variables that holds 5 different student grades as numbers. (ex: let laurasGrade = 99)
// Write a function that accepts the grades, and returns the letter grade.
// Scoring: A: 90 + , B: 80 - 89, C: 70-79, D: 60 - 69, F: 60 -

function grade(studentsGrade) {
    if (studentsGrade >= 90) {
        return 'A';
    } else if (studentsGrade >= 80) {
        return 'B';
    } else if (studentsGrade >= 70) {
        return 'C';
    } else if (studentsGrade >= 60) {
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

// function example(…) {
//     return condition1 ? value1
//         : condition2 ? value2
//         : condition3 ? value3
//         : value4;
// }
//
// // Equivalent to:
//
// function example(…) {
//     if (condition1) { return value1; }
//     else if (condition2) { return value2; }
//     else if (condition3) { return value3; }
//     else { return value4; }
// }

function gradeTernary(studentsGrade) {
    return studentsGrade >= 90 ? 'A'
        : studentsGrade >= 80 ? 'B'
            : studentsGrade >= 70 ? 'C'
                : studentsGrade >= 60 ? 'D'
                    : 'F';
}

console.log(`Matt's grade: ${gradeTernary(mattsGrade)}`);
console.log(`Fred's grade: ${gradeTernary(fredsGrade)}`);
console.log(`Dave's Grade: ${gradeTernary(davesGrade)}`);
console.log(`Erin's grade: ${gradeTernary(erinsGrade)}`);
console.log(`Jeff's grade: ${gradeTernary(jeffsGrade)}`);