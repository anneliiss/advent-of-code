function solve(input, part) {

    let boardingPasses = Object.values(input);
    let seatIds = [];
    boardingPasses.forEach(boardingPass => {
        let temp = boardingPass.replace(/F/g, "L").replace(/B/g, "U").replace(/R/g, "U");
        let rowLetters = temp.substr(0, 7).split("");
        let colLetters = temp.substr(7, 3).split("");
        let rowNr = binarySearch(rowLetters, 0, 0, 127);
        let colNr = binarySearch(colLetters, 0, 0, 7);
        let seatId = rowNr * 8 + colNr;
        seatIds.push(seatId);
        
    })
    return Math.max(...seatIds);  
    
}

function binarySearch(array, index, low, high) {

    let currentLetter = array[index];


    if (index == array.length - 1) {
        if (currentLetter == "L") {
            return low;
        } else {
            return high;
        }
    }
    
    let mid = Math.floor((low + high) / 2); 

    if (currentLetter == "L") { 
        return binarySearch(array, index + 1, low, mid);
    }
    else {
        return binarySearch(array, index + 1, mid + 1, high);
    }
}

module.exports = {solve};