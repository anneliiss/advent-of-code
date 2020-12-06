function solve(input, part) {

    let groups = Object.values(input);
    let yesCountsSum = 0;

    groups.forEach(group => {
        let lettersCountMap = new Map();
        let groupMembersLetters = group.trim().split("\n");
        let nrOfGroupMembers = groupMembersLetters.length;
        let groupLetters = group.replace(/\s+/g, "").split("");

        groupLetters.forEach(letter => {
            
            if (lettersCountMap.has(letter)) {
                lettersCountMap.set(letter, lettersCountMap.get(letter) + 1);
            } else {
                lettersCountMap.set(letter, 1);
            }

        })

        for (let [letter, count] of lettersCountMap.entries()) {
            if (part == 1) {
                yesCountsSum++;
            } else if (part == 2) {
                if (count == nrOfGroupMembers) {
                    yesCountsSum++;
                } 
            }
        }

    })
 
    return yesCountsSum;
}

module.exports = {solve};