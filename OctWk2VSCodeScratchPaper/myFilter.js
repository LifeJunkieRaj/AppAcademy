// let veggies = ["lettuce", "celery", "cabbage", "watercress"];


// let result = veggies.filter(function(ele){
//     return ele.includes("a");
// });

// console.log(result)

let veggies = ["lettuce", "celery", "cabbage", "watercress"];

let myFilter = function(array, cb) {
    let selectedItems = []

    for (let i = 0; i < array.length; i++) {
        if(cb(array[i], i, array) === true) {
            selectedItems.push(array[i]);
        }
    }
    return selectedItems;
}


myFilter(veggies, function(ele){
    return ele.includes("a");
});
