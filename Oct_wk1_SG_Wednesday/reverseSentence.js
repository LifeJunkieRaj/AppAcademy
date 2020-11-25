let reverseSentence = function(sentence) {
    let arr = sentence.split(" ");
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        let reverseArr = arr[i]
        newArr.push(reverseArr);

    }
    return newArr.join(" ");
}



console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'
