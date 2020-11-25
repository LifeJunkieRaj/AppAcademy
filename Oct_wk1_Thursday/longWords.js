let longWords = function(words) {
    return words.filter(function(word){ // We return the indices of the array "words" by naming the indices "word" with a function inside the array#filter method.
        return word.length > 5; // We now compare length of the individual indices (word) we got from the above line of code to the number 5 and if they are greater than 5 we return them as array which the array#filter set up for us.
    })
}


console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]
