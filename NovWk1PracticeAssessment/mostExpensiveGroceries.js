// Most Expensive Groceries
// You are compiling a price checker for a grocery store. The grocery prices are as follows:
// butter: $1, eggs: $2, milk: $3, bread: $4, cheese: $5
// First, create a function called costOfGroceries(grocieries) which takes a single array of grocery items and returns the total cost.
// Then, write a function mostExpensiveGroceries(groceriesList) that takes in a 2-dimensional array of grocery items and returns the index of the sub-array with the highest cost.
// This problem is worth 7 points. It is possible to get partial points on this problem.
// butter: $1
// eggs: $2
// milk: $3
// bread: $4
// cheese: $5

//Sri's Version
let costOfGroceries= (groceries)=>{
    let total= 0;
    let costs= {
        butter: 1, eggs: 2, milk: 3, bread: 4, cheese: 5
    };
    groceries.forEach((item)=>{
        total+= costs[item];
    })
    return total;
}

function mostExpensiveGroceries(numsList) {
    let total = 0
    for (let i = 0; i < numsList.length; i++) {
        let subArr = numsList[i]
        let totalCost = costOfGroceries(subArr)
        if (total < totalCost) {
            total = totalCost
            highestIndex = i

        }
    }
    return highestIndex;
}

// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE
const groceriesA = ['cheese', 'butter', 'eggs'];
const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
const groceriesC = ['cheese', 'bread'];
const groceriesD = ['eggs', 'butter'];
costOfGroceries(groceriesA); // 8
costOfGroceries(groceriesB); // 13
costOfGroceries(groceriesC); // 9
costOfGroceries(groceriesD); // 3
mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]);
let score = 0;
if (costOfGroceries(groceriesA) === 8) score++;
if (costOfGroceries(groceriesB) === 13) score++;
if (costOfGroceries(groceriesC) === 9) score++;
if (costOfGroceries(groceriesD) === 3) score++;
if (mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]) === 1) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD]) === 0) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD, groceriesC]) === 2) score++;
console.log("You have scored " + score + "/7 points.");
