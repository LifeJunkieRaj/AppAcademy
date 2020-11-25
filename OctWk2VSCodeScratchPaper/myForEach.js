

let myForEach = function(array, cb) {
    for (let i = 0; i < array.length; i++) {
        let el = array[i];
        cb(el, i, array);
    }
}



let peeps = ["raj", "keely", "dre", "dee dee", "bri"];

myForEach(peeps, function(el, i){
    console.log(el.toUpperCase())
});
