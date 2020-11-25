 let maxValue = function(nums) {
     let nowMax = null;
     nums.forEach(function(num){ // the array#forEach method and other methods are equivalent to "char = arr[i]" in a for loop: It allows us to see the value of each index in the array.
         if (nowMax === null || num > nowMax) {
             nowMax = num; // We redeclare the value of nowMax if num is great than nowMax (which happened in the if statement).  Remember to redeclare we have to have the variable being redeclared on the left side of the "=".
         }
     });
     return nowMax;
 }



console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3, -7, 3 ])); // 3
console.log(maxValue([])); // null

