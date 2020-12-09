function solve(input, part) {

    let xmasData = Object.values(input).map(el => parseInt(el));
    let preambleLength = 25; //5 for solving example, 25 for actual puzzle
    
    for (let i = preambleLength; i < xmasData.length; i++) {
        let isFollowingRules = false;
        let currentNr = xmasData[i];
        let lowerLim = i - preambleLength;
        let arrayToCheck = xmasData.slice(lowerLim, i);
        for (let j = 0; j < arrayToCheck.length; j++) {
            let searchableNr = currentNr - arrayToCheck[j];
            if (arrayToCheck.includes(searchableNr)) {
                isFollowingRules = true;
                break;
            }
        }
        if (!isFollowingRules) { 
            var invalidNr = currentNr;
            break;
        }
    }

    if (part == 1) {
        return invalidNr;
    } 

    let contiguousArray = [];

    for (let i = 0; i < xmasData.length; i++) {
        let currentNr = xmasData[i];

        contiguousArray.push(currentNr);
        while (getSum(contiguousArray) > invalidNr) {
            contiguousArray.shift();
        }

        if (getSum(contiguousArray) == invalidNr) {
            return Math.min(...contiguousArray) + Math.max(...contiguousArray);
        } 
    }
}

function getSum(arr){
    return arr.reduce(function(a, b) {
        return a + b;
    }, 0)
}


module.exports = {solve};