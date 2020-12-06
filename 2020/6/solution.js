function solve(input, part) {

    let groups = Object.values(input);
    let yesCounts = [];
    groups.forEach(group => {
        let uniqueLetters = [];
        let groupLetters = group.replace(/\s+/g, "").split("");
      
        groupLetters.forEach(letter => {
            
            if (!uniqueLetters.includes(letter)) {
                uniqueLetters.push(letter);
            }

        }) 
        yesCounts.push(uniqueLetters.length);
    })
    let result = yesCounts.reduce(function(a, b){
        return a + b;
    }, 0);  
    return result;
    
}

module.exports = {solve};