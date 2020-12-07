function solve(input, part) {

    let rules = Object.values(input);
    let bagsMap = new Map(); //key - color of the inner bag, values - colors of the bag the key bag can be inside of.
    let emptyBags = [];
    let myBag = "shiny gold";
    let outermostBags = new Set();
    
    rules.forEach(rule => {
        let bagColors =  rule.match(/\S+\s\S+\s(?=bags?)/g);
        let outerBag = bagColors[0].trim();
        if (bagColors[1].includes("no other")) {
            emptyBags.push(outerBag);
        } else {
            for (let i = 1; i < bagColors.length; i++) {
                let innerBag = bagColors[i].trim();
                if (bagsMap.has(innerBag)) {
                    bagsMap.get(innerBag).push(outerBag);
                }
                else {
                    bagsMap.set(innerBag, [outerBag]);
                }
            
            }  
        }
        
    })

    outermostBags = getOuterBags(bagsMap, outermostBags, myBag);
    outermostBags.delete(myBag);
    return outermostBags.size;


}

function getOuterBags(bagsMap, outermostBags, currentBag) {
    
    
    if (outermostBags.has(currentBag)) {
        return outermostBags;
    }

    if (!bagsMap.get(currentBag)) {
        //current bag is not inside any other bags
        outermostBags.add(currentBag);
        return outermostBags;
    }

    let currentBagsArray = bagsMap.get(currentBag); //all bags that directly hold the current bag

    for (let i = 0; i < currentBagsArray.length; i++) {
        const outerBag = currentBagsArray[i];

        let temp = getOuterBags(bagsMap, outermostBags, outerBag);
        temp.forEach(bag => {
            outermostBags.add(bag);
        })
        outermostBags.add(currentBag);
    }
    return outermostBags;

}



module.exports = {solve};