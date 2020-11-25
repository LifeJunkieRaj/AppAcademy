/*

    Write a function bestStudent() that takes any number of student objects, each with names for keys, and total points for values.
    The function should return the name of the student with the most points.
    If no students are passed to the function, return null;
    See below for how student objects are structured.

    const student1 = { name: "Geoff", points: 50 };
    const student2 = { name: "Justin", points: 1000 };
    const student3 = { name: "Tom", points: 568 };
    const student4 = { name: "Emily", points: 700 };
    const student5 = { name: "Corina", points: 750 };

    console.log(bestStudent(student1, student2, student3, student4, student5)) // returns "Justin"


*/

// let bestStudent = (...students) => {
//     if (students.length === 0) {
//         return null;
//     } else if (students.length === 1) {
//         return ;
//     }
//     let topStudent = null
//     let pointCount = null
//     students.forEach(student => {
//         let points = student.points
//         let person = student.name
//         if (pointCount < points) {
//             pointCount = points;
//             topStudent = person;
//          }
//      })
//      return topStudent;
//  }

let bestStudent = (...students) => {

    if (!students.length) {
    return null;
    }

    let best
    let min = null

    for (let i = 0; i < students.length; i++){
        let el = students[i]

        if (min === null || el.points > min ){
            min = el.points
            best = el.name
        }
    }
    return best
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = bestStudent;
} catch (e) {
    module.exports = null;
}
