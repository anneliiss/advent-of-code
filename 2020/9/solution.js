function solve(input, part) {

    let xmasData = Object.values(input);
    let preambleLength = 25; //5 for solving example, 25 for actual puzzle
    
    for (let i = preambleLength; i < xmasData.length; i++) {
        let isFollowingRules = false;
        let currentNr = xmasData[i];
        let lowerLim = i - preambleLength;
        let arrayToCheck = xmasData.slice(lowerLim, i);
        for (let j = 0; j < arrayToCheck.length; j++) {
            let searchableNr = currentNr - arrayToCheck[j];
            if (arrayToCheck.includes(searchableNr.toString())) {
                isFollowingRules = true;
                break;
            }
        }
        if (!isFollowingRules) {
            return currentNr;
        }
    }

}


module.exports = {solve};