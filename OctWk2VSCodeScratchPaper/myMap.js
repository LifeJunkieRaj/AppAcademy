

let myMap = function(array, cb) {
    let newArray = []

    for (let i = 0; i < array.length; i++) {
        let el = array[i]
        let res = cb(el, i, array);
        newArray.push(res);
    }
    return newArray;
};

let res = myMap([4, 9, 81, 25], Math.sqrt);

let newPeeps = myMap(peeps, function(el){
    return el.toUpperCase() + "!"
})
