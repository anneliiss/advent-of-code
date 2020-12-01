function solve(input, part) {

    let nrs = Object.values(input).map(el => parseInt(el));
    nrs.sort(function(a, b){return a-b}); //sort numbers in ascending order 
    for (const nr of nrs) { //tried nrs.forEach(), but the return statement in it didn't work
        let i = nrs.findIndex(el => el >= 2020 - nr); 
        if (i > 0 ) {
            if (nr + nrs[i] == 2020 && part == 1) {
                return nr * nrs[i];
            }
            for (const secondNr of nrs.slice(0, i + 1)) {
                let j = nrs.findIndex(el => el == 2020 - nr - secondNr); 
                if (j > 0 && part == 2) {
                    return nr * secondNr * nrs[j];
                }
            }
        }
    }
}

module.exports = {solve};