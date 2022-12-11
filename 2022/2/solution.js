//A - rock
//B - paper
//C - scissors

//X - rock 1p - lose 0p
//Y - paper 2p - draw 3p
//Z - scissors 3p - win 6p

//rock > scissors > paper > rock
function solve(input, part) {
    let rounds = Object.values(input);
    let permsForFirstPart =
        //opponent is rock
        {'A X': 4, //rock 1p + draw 3p
        'A Y': 8, //paper 2p + win 6p
        'A Z': 3, //scissors 3p + lose 0p
        //opponent is paper
        'B X': 1, //rock 1p + lose 0p
        'B Y': 5, //paper 2p + draw 3p
        'B Z': 9, //scissors 3p + win 6p
        //opponent is scissors
        'C X': 7, //rock 1p + win 6p
        'C Y': 2, //paper 2p + lose 0p
        'C Z': 6}; //scissors 3p + draw 3p
    let resultsForFirstPart = rounds.map(round => permsForFirstPart[round]);
    if (part === 1) return resultsForFirstPart.reduce((a, c) => a + c, 0);
    let permsForSecondPart =
        //opponent is rock
        {'A X': 3, //scissors 3p + lose 0p
        'A Y': 4, //rock 1p + draw 3p
        'A Z': 8, //paper 2p + win 6p
        //opponent is paper
        'B X': 1, //rock 1p + lose 0p
        'B Y': 5, //paper 2p + draw 3p
        'B Z': 9, //scissors 3p + win 6p
        //opponent is scissors
        'C X': 2, //paper 2p + lose 0p
        'C Y': 6, //scissors 3p + draw 3p
        'C Z': 7}; //rock 1p + win 6p
    let resultsForSecondPart = rounds.map(round => permsForSecondPart[round]);
    if (part === 2) return resultsForSecondPart.reduce((a, c) => a + c, 0);

}

module.exports = {solve};