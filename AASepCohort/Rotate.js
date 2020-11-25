let rotate = function (array, num) {
    if (num > 0) {
        for (let index = 0; index < num; index++) {
            let el = array.pop();
            array.unshift(el);
        }
    } else {
        let el = array.shift();
        array.push(el);

    }
}




let arr = ['a', 'b', 'c', 'd', 'e'];
rotate(arr, 2);
console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
rotate(animals, -1);
console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
