let logBetweenStepper = function(min, max, step) {
    for (let i = min; i <= max; i = i + step) {
        console.log(i);
    }
}


logBetweenStepper(5, 9, 1); // prints out:
5
6
7
8
9


logBetweenStepper(-10, 15, 5)  // prints out:
-10
-5
0
5
10
15
