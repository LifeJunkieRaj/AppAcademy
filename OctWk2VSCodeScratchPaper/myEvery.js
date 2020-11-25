

let veggies = ["lettuce", "celery", "cabbage", "watercress"];

function myEvery(array, cb) {
    for (let i = 0; i < array.length; i++) {
        if (cb(array[i]) === false) {
            return false;
        }
    }
    return true;
}

function containsE(ele) {
    return ele.includes("a");
}

console.log(myEvery(veggies, containsE));
