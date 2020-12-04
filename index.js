let fs = require('fs');

let year = 2020;
let day = 1;
let args = process.argv.slice(2);
for (let arg of args) {
    let n = Number(arg);
    if (n > 2000) {
        year = n;
    }
    else if (n > 0) {
        day = n;
    }
}

let path = `./${year}/${day}`;
if (fs.existsSync(path)) {
    let text;
    if (day == 4) {
        text = fs.readFileSync(path + `/input.txt`)
                .toString()
                .split('\n\n')
                .map(s => s.replace(/\r$/, ''))
                .filter(s => s.length > 0);
    } else {
        text = fs.readFileSync(path + `/input.txt`)
                .toString()
                .split('\n')
                .map(s => s.replace(/\r$/, ''))
                .filter(s => s.length > 0);
    }
    let solution = require(path + `/solution`);
    for(let part of [1,2]) {
        let answer = solution.solve(text, part);
        console.log(`${year} day ${day} part ${part}: ${answer}`)
    }
    
} else {
    console.log(`./${year}/${day} not found`);
}

