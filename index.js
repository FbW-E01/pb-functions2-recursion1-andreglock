/* function sum(number) { // Non recursive solution
    return number.reduce(function(accumulator, current) {
        return accumulator + current;
    });
}; */

function sum(numbers) {
    const lastNumber = numbers.pop();
    if (lastNumber === undefined) { return 0 }
    return lastNumber + sum(numbers);
};

const array = [1, 2, 3, 4, 5, 6];

console.log(sum(array));