// signalChecker
// Want to make a function that will let me see if a currency pair's price has fluctuated more than a point
// in a 24 hour period.

let myForEach = function(obj, cb) {
    for (let key in obj) {
        let value = obj[key];
        cb(value);
    }
}

let forexMajorPairs = {"GBPUSD":1.30327, "EURUSD":1.17546, "USDJPY":105.114, "USDCHF":0.91243, "USDCAD":1.31387};

myForEach(forexMajorPairs, function(value){
    let nonVolatile = [];
    if (value <= value + 1 || value >= value - 1)
        nonVolatile.push(value)

        return nonVolatile;
});
