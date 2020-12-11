function solve(input, part) {

    let rowsArray = Object.values(input).map(el => el.split(""));

    let hasNewChanges = true; 
    let occupiedSeatsCount = 0;
  
    while (hasNewChanges) {
 
        let changeResult = changeState(rowsArray)
        rowsArray = changeResult[0];

        hasNewChanges = changeResult[1];
        if (!hasNewChanges) {
            occupiedSeatsCount = changeResult[2];
            
        }
    } 
   
    return occupiedSeatsCount;
}

function changeState(rowsArray){
    let columnsLength = rowsArray[0].length;
    let hasNewChanges = false;
    let occupiedSeatsCount = 0;
    let newState = [];
    let result = []; //first position will be newState array, second hasNewChanges boolean, third position occupiedSeatsCount
    for (let row = 0; row < rowsArray.length; row ++) {
        newState.push([]);
        for (let col = 0; col < columnsLength; col++) {
            let currentSeat = rowsArray[row][col];
            if (currentSeat == "."){
                newState[row].push(".");
                continue;
            } 
            let adjacentOccupiedSeatsNr = getAdjacentOccupiedSeatsNr(rowsArray, row, col);
            if (currentSeat == "L") {
                if (adjacentOccupiedSeatsNr == 0) {
                    newState[row].push("#");
                    occupiedSeatsCount++;
                    hasNewChanges = true;
                    
                } else {
                    newState[row].push("L");
                }
            } else {
                if (adjacentOccupiedSeatsNr > 3) {
                    newState[row].push("L");
                    hasNewChanges = true;
                } else {
                    newState[row].push("#");
                    occupiedSeatsCount++;
                }

            }
            
        }
    }

    result.push(newState);
    result.push(hasNewChanges);
    result.push(occupiedSeatsCount);

    return result;
}

function getAdjacentOccupiedSeatsNr(rowsArray, currentRow, currentCol) {
    let firstRowToCheck = (currentRow == 0) ? currentRow : currentRow - 1;
    let firstColToCheck = (currentCol == 0) ? currentCol : currentCol - 1;
    
    let finalRowToCheck = (currentRow == rowsArray.length - 1) ? currentRow : currentRow + 1;
    let finalColToCheck = (currentCol == rowsArray[0].length - 1) ? currentCol : currentCol + 1;

    let adjacentOccupiedSeatsNr = 0;

    for (let row = firstRowToCheck; row <= finalRowToCheck; row++) {
        for (let col = firstColToCheck; col <= finalColToCheck; col++) {
            if (row == currentRow && col == currentCol){
                continue;
            }
            let adjacentSeat = rowsArray[row][col];
            if (adjacentSeat == "#") {
                adjacentOccupiedSeatsNr++;
            }
        }
        
    }
    return adjacentOccupiedSeatsNr;
}


module.exports = {solve};