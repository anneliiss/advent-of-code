function solve(input, part) {

    let rules = Object.values(input);
    let visitedIndexes = [];
    let accumulator = 0;

    for (let i = 0; i < rules.length;) {

        if (visitedIndexes.includes(i)) {
            return accumulator;
        }

        let instruction = rules[i].substr(0, 3);
        let instructionArgument = parseInt(rules[i].substr(4));

        visitedIndexes.push(i);

        switch (instruction) {
            case "acc":
                accumulator += instructionArgument;
                i++;
                break;
            case "nop":
                i++;
                break;
            case "jmp":
                i += instructionArgument;
                break;

        }
        
    }


}




module.exports = {solve};