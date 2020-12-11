function solve(input, part) {

    let rowsArray = Object.values(input).map(el => el.split(""));

    let hasNewChanges = true; 
    let occupiedSeatsCount = 0;
  
    while (hasNewChanges) {
 
        let changeResult = changeState(rowsArray, part);
        rowsArray = changeResult[0];

        hasNewChanges = changeResult[1];
        if (!hasNewChanges) {
            occupiedSeatsCount = changeResult[2];
            
        }
    } 
   
    return occupiedSeatsCount;
}

function changeState(rowsArray, part){
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
            let adjacentOccupiedSeatsNr;
            let occupiedSeatsCountLimit;
            if (part == 1) {
                adjacentOccupiedSeatsNr = getDirectAdjacentOccupiedSeatsNr(rowsArray, row, col);
                occupiedSeatsCountLimit = 4;
            } else if (part == 2) {
                adjacentOccupiedSeatsNr = getAdjacentOccupiedSeatsNr(rowsArray, row, col);
                occupiedSeatsCountLimit = 5;
            }
            
            if (currentSeat == "L") {
                if (adjacentOccupiedSeatsNr == 0) {
                    newState[row].push("#");
                    occupiedSeatsCount++;
                    hasNewChanges = true;
                    
                } else {
                    newState[row].push("L");
                }
            } else {
                if (adjacentOccupiedSeatsNr >= occupiedSeatsCountLimit) {
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

function getDirectAdjacentOccupiedSeatsNr(rowsArray, currentRow, currentCol) {
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


function getAdjacentOccupiedSeatsNr(rowsArray, currentRow, currentCol) {
    let adjacentOccupiedSeatsNr = 0;
    
    for (let rowDir = -1; rowDir < 2; rowDir++){
        for (let colDir = -1; colDir < 2; colDir++) {
            if (rowDir == 0 && colDir == 0) {
                continue;
            }
            let firstChair = getFirstChairInGivenDirection(rowsArray, currentRow, currentCol, rowDir, colDir);
            if (firstChair == "#") {
                adjacentOccupiedSeatsNr++;
            }
            
        }
    }
    return adjacentOccupiedSeatsNr;
}

function getFirstChairInGivenDirection(rowsArray, currentRow, currentCol, rowDir, colDir){
    
    let rowLim = (rowDir == 0) ? rowDir : currentRow;
    let colLim = (colDir == 0) ? colDir : currentCol;

    if (rowDir > 0) {
        rowLim = rowsArray.length - (currentRow + 1);
    } 
    if (colDir > 0){
        colLim = rowsArray[0].length - (currentCol + 1);
    }

    let directionIsDiagonal = (rowDir != 0 && colDir != 0);

    for (let row = Math.abs(rowDir); row <= rowLim; row++) {
        for (let col = Math.abs(colDir); col <= colLim; col++) {
            
            let spot = rowsArray[currentRow + (row * rowDir)][currentCol + (col * colDir)];

            if (spot == ".") {
                if (directionIsDiagonal && row < rowLim && col < colLim) {
                    row++;
                } else if (directionIsDiagonal) {
                    return ".";
                }
                continue;
            }
            return spot;
        }
        
    }
    return ".";
}

module.exports = {solve};