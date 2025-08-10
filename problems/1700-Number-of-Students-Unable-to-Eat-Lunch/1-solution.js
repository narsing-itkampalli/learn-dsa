import { runTest } from "../index.js";

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let i = 0;
    let j = 0;

    while(i < students.length) {
        if(students[0] === sandwiches[j]) {
            students.shift();
            j++;
            i = 0;
        }else {
            students.push(students.shift());
            i++;
        }
    }

    return students.length;
};

runTest(countStudents);