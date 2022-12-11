//p1: Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?
//p2: Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?
function solve(input, part) {
    let caloriesPerElves = Object.values(input);
    let totalCalsPerElf = caloriesPerElves
        .map(calorieString => calorieString.split('\n').reduce((a, c) => Number(a) + Number(c), 0))
        .sort((a, b) => b - a);
    if (part === 1) return totalCalsPerElf.at(0);
    if (part === 2) {
        return totalCalsPerElf.at(0) + totalCalsPerElf.at(1) + totalCalsPerElf.at(2);
    }

}

module.exports = {solve};