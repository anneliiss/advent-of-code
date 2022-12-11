
//rock - 1p
//paper - 2p
//scissors - 3p

//A - rock
//B - paper
//C - scissors

//X - rock?
//Y - paper?
//Z - scissors?

//lose - 0p
//draw - 3p
//win - 6p

//rock > scissors > paper > rock
function solve(input, part) {
    let opponentOptions = ['A', 'B', 'C'];
    let myOptions = ['X', 'Y', 'Z'];

    let perms =
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
    let rounds = Object.values(input);
    //console.log(rounds);
    let results = rounds.map(round => perms[round]);
    console.log(results);
    if (part === 1) return results.reduce((a, c) => a + c, 0);

}

module.exports = {solve};