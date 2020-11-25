// butter: $1
// eggs: $2
// milk: $3
// bread: $4
// cheese: $5

function costOfGroceries(groceries) {
    let itemPrices = {
        butter: 1,
        eggs: 2,
        milk: 3,
        bread: 4,
        cheese: 5
    };
    let total = 0

    groceries.forEach((items) => {
        total += itemPrices[items]
    });
    return total
}


function mostExpensiveGroceries(numsList) {
    let highestPrice = 0
    let highestIndex;

    for (let i = 0; i < numsList.length; i++) {
        let item = numsList[i];
        let cost = costOfGroceries(item)
        if (highestPrice < cost) {
            highestPrice = cost;
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
console.log(costOfGroceries(groceriesA)); // 8
console.log(costOfGroceries(groceriesB)); // 13
console.log(costOfGroceries(groceriesC)); // 9
console.log(costOfGroceries(groceriesD)); // 3
console.log(mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]));
let score = 0;
if (costOfGroceries(groceriesA) === 8) score++;
if (costOfGroceries(groceriesB) === 13) score++;
if (costOfGroceries(groceriesC) === 9) score++;
if (costOfGroceries(groceriesD) === 3) score++;
if (mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]) === 1) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD]) === 0) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD, groceriesC]) === 2) score++;
console.log("You have scored " + score + "/7 points.");
