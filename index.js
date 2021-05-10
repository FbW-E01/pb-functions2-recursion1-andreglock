function sum(number) {
    return number.reduce(function(accumulator, current) {
        return accumulator + current;
    });
};

const array = [1, 2, 3, 4, 5, 6];

console.log(sum(array));