function solve(input, part) {

    let rows = Object.values(input);
    let validPwCount = 0;
    rows.forEach(row=> {
        let elements = row.split(": ");
        let rules = elements[0].split(" ");
        let limits = rules[0].split("-");
        let lowerLim = parseInt(limits[0]);
        let upperLim = parseInt(limits[1]);
        let neededLetterRegExp =  new RegExp(rules[1], "g");
        let password = elements[1];
        var neededLettersInPw = password.match(neededLetterRegExp);
        if (neededLettersInPw && neededLettersInPw.length >= lowerLim && neededLettersInPw.length <= upperLim) {
            validPwCount++;
        }
    });
    return validPwCount;

}

module.exports = {solve};