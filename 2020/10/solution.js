function solve(input, part) {

    let adapters = Object.values(input).map(el => parseInt(el));
    adapters.sort(function(a, b){return b-a}); //descending order
    let deviceJoltage = adapters[0] + 3;
    adapters.unshift(deviceJoltage);
    adapters.push(0); //charging outlet joltage

    let oneJoltDiff = [];
    let threeJoltDiff = [];

    let groupLengthCounts = [0, 0, 0, 0]
    let currentGroup = new Array();

    for (let i = 1; i < adapters.length; i++) {
        let currentAdapter = adapters[i];
        let difference = adapters[i - 1] - adapters[i];
        switch (difference) {
            case 1:
                currentGroup.push(currentAdapter);
                oneJoltDiff.push(currentAdapter);
                break;
            case 3:
                threeJoltDiff.push(currentAdapter);
                if (currentGroup.length > 0) {
                    let len = currentGroup.length - 1;
                    groupLengthCounts[len]++;
                    currentGroup = new Array();
                }
        }
        
    }

    if (currentGroup.length > 0) {
        let len = currentGroup.length - 1;
        groupLengthCounts[len]++;
    }
    let result;

    if (part == 1) {
        result = oneJoltDiff.length * threeJoltDiff.length;
    } else if (part == 2) {
        result = Math.pow(2, groupLengthCounts[1]) * Math.pow(4, groupLengthCounts[2]) * Math.pow(7, groupLengthCounts[3]);
    }
    return result;
}

module.exports = {solve};