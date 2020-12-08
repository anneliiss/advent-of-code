function solve(input, part) {

    let rules = Object.values(input);
    let infinityReached = false;
    let visitedIndexes = [];
    var nonAccs = [];
    let accumulator = 0;
    let originalInstruction = true;


    for (let i = 0; i < rules.length;) {

        originalInstruction = true;

        let currIndex = i;
        
        let instruction = rules[i].substr(0, 3);
        let instructionArgument = parseInt(rules[i].substr(4));
        
        visitedIndexes.push(currIndex);

        if (infinityReached) {
            if (instruction != "acc") {
                instruction = (instruction == "jmp" ? "nop" : "jmp");
                infinityReached = false;
                originalInstruction = false;
            }
        }

        switch (instruction) {
            case "acc":
                accumulator += instructionArgument;
                i++;
                break;
            case "nop":
                if (originalInstruction && !nonAccs.includes([currIndex, visitedIndexes])) {
                    nonAccs.push([currIndex, visitedIndexes, accumulator]);
                }
                i++;
                break;
            case "jmp":
                if (originalInstruction && !nonAccs.includes([currIndex, visitedIndexes])) {
                    nonAccs.push([currIndex, visitedIndexes, accumulator]);
                }
                i += instructionArgument;
                break;

        }

        if (visitedIndexes.includes(i)) {
            if (part == 1) {
                return accumulator;
            }
            infinityReached = true;
            let temp = nonAccs.shift();
            i = temp[0];
            visitedIndexes = temp[1];
            accumulator = temp[2];
        }
    }
    return accumulator;
}

module.exports = {solve};