// Write a function `countScores(people)` that takes in an array of score
// objects (people) as its input. A score object has two key-value pairs:
// the scorer (string) and a point value (number). `countScores(people)` should
// return an object that has key-value pairs listing each person who scored as a key
// and the sum of the total points for the game as their value.

let countScores = (people) => {
    let scoreBoard = {};
    //Set an empty object within which to collet the key-value pairs of all names with value "name" and scores with value amount.
    for (let i = 0; i < people.length; i++) {
    //Set up a for loop to iterate through each object in an array (called people)
        let object = people[i];
    //We initialize a variable object that pulls the value of the entire object from each index
        let name = object.name;
    //We initialize a variable name that can identify the value of the specific key "name" in each object
        let score = object.score;
    //We initialize a variable score that can identify the value of the specifc key "score" in each object
        if (scoreBoard[name]) {
            scoreBoard[name] += score;
    //We set a conditional that checks our created object scoreBoard to see if the key name in the people object is in our our scoreBoard object (This includes the full key-value pair so "name" and it's value "actual name").  If it exists in our object scoreBoard, we just up the score variable by one which.
        } else {
            scoreBoard[name] = score;
    //If it isn't in our object scoreBoard, then we set our object scoreBoard to score which will now make it include the object from the people object along with it's key-value pairs "name" amd "score"
        }
    }
    return scoreBoard;
    //We return our newly filled array with all the objects that now only have one unique value for each key "name" and the number of times their value "score" appear in the array.
}


let ppl = [{name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }


let peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
