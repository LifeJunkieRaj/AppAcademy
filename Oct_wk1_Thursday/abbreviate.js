
let abbreviate = function(word) {
    let vowels = "aeiou";
    let noVowels = "";
    for (let i = 0; i < word.length; i++) {
        let vwlChkr = word[i];
        if (!vowels.includes(vwlChkr.toLowerCase())) {
        noVowels += vwlChkr;
        }
    }
    return noVowels;
}



console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'
