//A given rucksack always has the same number of items in each of its two compartments, so the first half of the
//characters represent items in the first compartment, while the second half of the characters represent items
//in the second compartment.
//Lowercase item types a through z have priorities 1 through 26.
//Uppercase item types A through Z have priorities 27 through 52.
//Find the item type that appears in both compartments of each rucksack.
//What is the sum of the priorities of those item types?
function solve(input, part) {
    let rucksacks = Object.values(input);
    let partOneAnswer = 0;
    rucksacks.forEach((rucksack) => {
        let itemsCount = rucksack.length;
        let firstCompartment = [...rucksack.substring(0, itemsCount / 2)];
        let secondCompartment = [...rucksack.substring(itemsCount / 2)];
        let repeatingItem = firstCompartment.find((item) => secondCompartment.includes(item));
        let value = repeatingItem.charCodeAt(0);
        //letter A has ASCII code 065, B 066 and so on until Z which is 090, then a has ASCII code 097, b 098 and so on.
        //so in case the value is <=90, it is uppercase and 38 should be subtracted to get the value for this exercise.
        //in case the value is >=97, it is lowercase and 96 should be subtracted
        if (value <= 90) partOneAnswer += (value - 38)
        else if (value >= 97) partOneAnswer += (value - 96)
    })
    if (part === 1) return partOneAnswer;

}

module.exports = {solve};