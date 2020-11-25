let alternatingWords = function(array) {
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            array[i] = array[i].toUpperCase();
        } else {
            array[i] = array[i].toLowerCase();
        }
    }
}



let words1 = ['Belka', 'STRELKA', 'laika', 'DEZIK', 'Tsygan'];
alternatingWords(words1);
console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik', 'TSYGAN' ]

let words2 = ['Yellowstone', 'Yosemite', 'Zion', 'Acadia'];
alternatingWords(words2);
console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia' ]
