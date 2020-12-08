function solve(input, part) {

    let rules = Object.values(input);
    let bagsMap = new Map(); 
    //for part 1: key - color of the inner bag, values - colors of the bag the key bag can be inside of.
    //for part 2: key - color of the outer bag, values - colors of the bags that must be inside of the key bag. 

    let emptyBags = [];
    let myBag = "shiny gold";
    let relevantBags = new Set();
    
    rules.forEach(rule => {
        let bagColors =  rule.match(/(\d\s)?\S+\s\S+\s(?=bags?)/g);
        let outerBag = bagColors[0].trim();
        
        if (bagColors[1].includes("no other")) {
            emptyBags.push(outerBag);
        } else {
            for (let i = 1; i < bagColors.length; i++) {
                let innerBag = bagColors[i].trim().substr(2);
                let innerBagNr = parseInt(bagColors[i].trim().substr(0, 1));

                if (part == 1) {
                    if (bagsMap.has(innerBag)) {
                        bagsMap.get(innerBag).push([outerBag, -1]);
                    }
                    else {
                        bagsMap.set(innerBag, [[outerBag, -1]]);
                    }
                } else if (part == 2) {
                    if (bagsMap.has(outerBag)) {
                        bagsMap.get(outerBag).push([innerBag, innerBagNr]);
                    } else {
                        bagsMap.set(outerBag, [[innerBag, innerBagNr]]);
                    }

                }
                        
            }  
        }
        
    })

    relevantBags = getRelevantBags(bagsMap, relevantBags, [myBag, 0], part);

    if (part == 2) {
        let sum = 0;
        relevantBags[0][2].forEach(bag => {
            sum += bag[3];
        })
        return sum;

    }

    if (part == 1) {
        let newSet = new Set();
        relevantBags.forEach(bag => {newSet.add(bag[0])})

        newSet.delete(myBag);

        return newSet.size;
    }
    


}

function getRelevantBags(bagsMap, relevantBags, currentBag, part) {

    if (currentBag.length == 2) {
        currentBag.push([], currentBag[1]);
    }

    let currentBagColor = currentBag[0];

    if (!bagsMap.get(currentBagColor)) {
        //part 1: current bag is not inside any other bags
        //part 2: current bag does not have any other bags inside of it
        return [currentBag];
    }

    let currentDirectBagsArray = bagsMap.get(currentBagColor); 
    //part 1: all bags that directly hold the current bag
    //part 2: all bags that must be directly within the current bag



    for (let i = 0; i < currentDirectBagsArray.length; i++) {
        const nextBag = currentDirectBagsArray[i];

        let temp = getRelevantBags(bagsMap, relevantBags, nextBag, part);

        
        temp.forEach(bag => {
            if (part == 1) {
                relevantBags.add(bag);
            } else if (part == 2) {
                if (!currentBag[2].includes(bag)) {
                    currentBag[2].push(bag);
                    currentBag[3] += (currentBag[1] * bag[3]);
                }
                
            }
            
        })

    }
    if (part == 1) {
        relevantBags.add(currentBag);
        return relevantBags;  
    } else if (part == 2) {
        return [currentBag];
    }
    

}



module.exports = {solve};