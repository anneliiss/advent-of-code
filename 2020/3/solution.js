function solve(input, part) {

    let rows = Object.values(input);
    let treeCount = countTrees(rows, 1, 3);
    if (part == 1) {
        return treeCount;
    }
    return treeCount * countTrees(rows, 1, 1) * countTrees(rows, 1, 5) * countTrees(rows, 1, 7) * countTrees(rows, 2, 1);  
    
}

function countTrees(rows, rowIncr, colIncr) {
    
    let rowLength = rows[0].length;
    let treeCount = 0;
    let col = 0;
    for (let row = rowIncr; row < rows.length; row += rowIncr) {
        col += colIncr;
        if (rowLength <= col) {
            col = col - rowLength; 
        }
        if (rows[row].charAt(col) == '#') {
            treeCount++;
        }
    }
    return treeCount;
}

module.exports = {solve};