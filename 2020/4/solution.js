function solve(input, part) {

    let passports = Object.values(input);
    let validPassportCount = 0;
    passports.forEach(passport => {
        if (includesAllRequiredFields(passport)) {
            if (part == 1) {
                validPassportCount++;
            } else if (part == 2 && allRequiredFieldsAreValid(passport)) {
                validPassportCount++;
            }
        } 
    })
    return validPassportCount;  
    
}

function includesAllRequiredFields(passport) {

    let includesByr = passport.includes('byr:');
    let includesIyr = passport.includes('iyr:');
    let includesEyr = passport.includes('eyr:');
    let includesHgt = passport.includes('hgt:');
    let includesHcl = passport.includes('hcl:');
    let includesEcl = passport.includes('ecl:');
    let includesPid = passport.includes('pid:');

    return includesByr && includesIyr && includesEyr && includesHgt && includesHcl && includesEcl && includesPid;
}

function allRequiredFieldsAreValid(passport) {
    let fields = passport.split(/\s+/);
    let fieldMap = new Map();
    fields.forEach(field => {
        let el = field.split(':');
        fieldMap.set(el[0], el[1]);
    })
    
    let byr = parseInt(fieldMap.get('byr'));
    let iyr = parseInt(fieldMap.get('iyr'));
    let eyr = parseInt(fieldMap.get('eyr'));
    let hgt = fieldMap.get('hgt');
    let hgtNr = parseInt(hgt.split(/\D/)[0]); 
    let hcl = fieldMap.get('hcl');
    let ecl = fieldMap.get('ecl');
    let pid = fieldMap.get('pid');
    
    let validEcls = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];

    let byrIsValid = (1920 <= byr && byr <= 2002);
    let iyrIsValid = (2010 <= iyr && iyr <= 2020);    
    let eyrIsValid = (2020 <= eyr && eyr <= 2030);
    let hgtIsValid = (hgt.endsWith('cm') && 150 <= hgtNr && hgtNr <= 193) || (hgt.endsWith('in') && 59 <= hgtNr && hgtNr <= 76);
    let hclIsValid = /[#][0-9|a-f]{6}/.test(hcl);
    let eclIsValid = validEcls.includes(ecl);
    let pidIsValid = (pid.length == 9);

    return byrIsValid && iyrIsValid && eyrIsValid && hgtIsValid && hclIsValid && eclIsValid && pidIsValid;
}


module.exports = {solve};