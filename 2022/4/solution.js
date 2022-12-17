function solve(input, part) {
    let pairs = Object.values(input);
    let partTwoOverlapCount = pairs.length;
    let partOneContainCount = 0;
    pairs.forEach((pair) => {
        let elves = pair.split(',');
        let [firstElfStart, firstElfFinish] = elves[0].split('-');
        let [secondElfStart, secondElfFinish] = elves[1].split('-');
        //if one's start is before the other's end, they don't overlap
        if (Number(firstElfStart) > Number(secondElfFinish) || Number(secondElfStart) > Number(firstElfFinish)) partTwoOverlapCount--;
        if ((Number(firstElfStart) >= Number(secondElfStart) && Number(firstElfFinish) <= Number(secondElfFinish))
            || (Number(secondElfStart) >= Number(firstElfStart) && Number(secondElfFinish) <= Number(firstElfFinish))) partOneContainCount++;
    })
    if (part === 1) return partOneContainCount;
    if (part === 2) return partTwoOverlapCount;
}

module.exports = {solve};