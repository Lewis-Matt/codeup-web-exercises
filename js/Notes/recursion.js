"use strict";
// From Eloquent JS pg. 51

/* Start from 1 and repeatedly either adding 5 or multiplying by 3, and infinite set of numbers can be produced. Write a function, given a number, that tries to find a sequence of such additions and multiplications that produces that number. For example, 13 can be reached by first multiplying by 3 and then adding 5 twice, whereas the number 15 cannot be reached at all.*/

function findSolution(target) {
    function find(current, history) {
        if (current === target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}
console.log(findSolution(13));
// Note that this program doesn't necessarily find the shortest sequence: it is satisfied when it finds any sequence at all.

// So, what is actually happening here?
/*
- The inner function find does the actual recursing. It takes 2 args, the current number and a string that records how that number was reached. If it finds a solution, it returns a string that shows how to get to the target. If there is no solution, it returns null.

- To do this, the function performs one of three actions. If the current number is the target number, the current history is a way to reach that target, so it is returned.
- If the current number is > target, there is no point in exploring this branch because adding/multiplying will only make it bigger, so return null.
- If current is still below target, the function tries both possible paths that start from the current numberr by calling itself twice, once for addition and once for multiplication. If the first call returns something that isn't null, it is returned. Otherwise the second call is returned, regardless of whether it produces a string or null.
*/

// Example of all the calls to find, looking for a solution to the number 13:

/*
* find(1, "1")
*   find(6, "(1 + 5)")
*       find(11, "((1 + 5) + 5)")
*           find(16, "(((1 + 5) + 5) + 5)")
*               TOO BIG
*           find(33, "(((1 + 5) + 5) * 3)")
*               TOO BIG
*       find(18, "((1 + 5) * 3)")
*           TOO BIG
*   find(3, "(1 * 3)")
*       find(8, "((1 * 3) + 5)")
*           find(13, "(((1 * 3) + 5) + 5)")
*               FOUND!
*/