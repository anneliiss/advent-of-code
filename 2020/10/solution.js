function solve(input, part) {

    let adapters = Object.values(input).map(el => parseInt(el));
    adapters.sort(function(a, b){return b-a}); //descending order
    let deviceJoltage = adapters[0] + 3;
    adapters.unshift(deviceJoltage);
    adapters.push(0); //charging outlet joltage
    let oneJoltDiff = [];
    let twoJoltDiff = [];
    let threeJoltDiff = [];
    for (let i = 1; i < adapters.length; i++) {
        let currentAdapter = adapters[i];
        let difference = adapters[i - 1] - adapters[i];
        switch (difference) {
            case 1:
                oneJoltDiff.push(currentAdapter);
                break;
            case 2:
                twoJoltDiff.push(currentAdapter);
                break;
            case 3:
                threeJoltDiff.push(currentAdapter);
        }
        
    }
    if (part == 1) {
        return oneJoltDiff.length * threeJoltDiff.length;
    }   
}

module.exports = {solve};