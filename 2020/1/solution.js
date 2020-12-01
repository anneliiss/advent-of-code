function solve(input, part) {

    let nrs = Object.values(input).map(el => parseInt(el));
    for (const nr of nrs) { //tried nrs.forEach(), but the return statement in it didn't work
        let i = nrs.findIndex(el => el == 2020 - nr); 
        if (i > 0 && part == 1) {
            return nr * nrs[i];
        }
    }
}

module.exports = {solve};