function solve(input, part) {

    let rows = Object.values(input);
    let rowLength = rows[0].length;
    console.log(rowLength);
    let treeCount = 0;
    let col = 0;
    for (let row = 1; row < rows.length; row++) {
        col += 3;
        if(rowLength <= col) {
            col = col - rowLength; 
        }
        console.log(col);
        if (rows[row].charAt(col) == '#') {
            treeCount++;
        }
    }
    return treeCount;

}

module.exports = {solve};