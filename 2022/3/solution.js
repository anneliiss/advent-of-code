function solve(input, part) {
    let rucksacks = Object.values(input);
    if (part === 1) return partOne(rucksacks);
    if (part === 2) return partTwo(rucksacks);
}

function partOne(rucksacks) {
    let partOneAnswer = 0;
    rucksacks.forEach((rucksack) => {
        let itemsCount = rucksack.length;
        let firstCompartment = [...rucksack.substring(0, itemsCount / 2)];
        let secondCompartment = [...rucksack.substring(itemsCount / 2)];
        let repeatingItem = firstCompartment.find((item) => secondCompartment.includes(item));
        partOneAnswer += calculatePriority(repeatingItem);
    })
    return partOneAnswer;
}

function partTwo(rucksacks) {
    let partTwoAnswer = 0;
    for (let i = 0; i < rucksacks.length - 2; i+=3) {
        console.log(i);
        let firstElf = [...rucksacks[i]];
        let secondElf = [...rucksacks[i + 1]];
        let thirdElf = [...rucksacks[i + 2]];
        let badge = firstElf.find((item) => secondElf.includes(item) && thirdElf.includes(item));
        partTwoAnswer += calculatePriority(badge);
    }
    return partTwoAnswer;
}

function calculatePriority(item) {
    let value = item.charCodeAt(0);
    //letter A has ASCII code 065, B 066 and so on until Z which is 090, then a has ASCII code 097, b 098 and so on.
    //so in case the value is <=90, it is uppercase and 38 should be subtracted to get the value for this exercise.
    //in case the value is >=97, it is lowercase and 96 should be subtracted
    if (value <= 90) return (value - 38)
    else if (value >= 97) return (value - 96)
}

module.exports = {solve};