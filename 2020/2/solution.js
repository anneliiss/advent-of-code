function solve(input, part) {

    let rows = Object.values(input);
    let validPwCount = 0;
    rows.forEach(row=> {
        let elements = row.split(": ");
        let rules = elements[0].split(" ");
        let limits = rules[0].split("-");
        let firstLim = parseInt(limits[0]);
        let secondLim = parseInt(limits[1]);
        let neededLetter = rules[1];
        let password = elements[1];
        if (part == 1) {
            let neededLetterRegExp =  new RegExp(neededLetter, "g");
            var neededLettersInPw = password.match(neededLetterRegExp);
            if (neededLettersInPw && neededLettersInPw.length >= firstLim && neededLettersInPw.length <= secondLim) {
                validPwCount++;
            }
        } else if (part == 2) {
            let charAtFirstLim = password.charAt(firstLim - 1);
            let charAtSecondLim = password.charAt(secondLim - 1);
            if ((charAtFirstLim != charAtSecondLim) && (charAtFirstLim == neededLetter || charAtSecondLim == neededLetter)) {
                validPwCount++;
            }
        }
        
    });
    return validPwCount;

}

module.exports = {solve};