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

function costOfGroceries(nums) {
    let butter = 0
    let eggs = 0
    let milk = 0
    let bread = 0
    let cheese = 0
    let total = 0
    for (let i = 0; i < nums.length; i++) {
        let items = nums[i]
        if (items === 'butter') {
            butter += 1
        } else if (items === 'eggs') {
            eggs += 2
        } else if (items === 'milk') {
            milk += 3
        } else if (items === 'bread') {
            bread += 4
        } else if (items === 'cheese') {
            cheese += 5
        }
        total = cheese + bread + milk + eggs + butter
    }
    return total
}


function mostExpensiveGroceries(numsList) {
    let total = 0
    let highestIndex
    for (let i = 0; i < numsList.length; i++) {
        let subArr = numsList[i]
        let totalCost = costOfGroceries(subArr)
        if (total < totalCost) {
            total = totalCost
            higestIndex = i

        }
    }
    return higestIndex;
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
