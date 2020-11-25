/*
    Write a function bestStudent() that takes any number of student objects, each with names for keys, and total points for values.
    The function should return the name of the student with the most points.
    See below for how student objects are structured.
*/
let bestStudent = (...objs) => {
    let highestPoints = 0;
    let winner = "";
    for (let i = 0; i < objs.length; i++) {
      let studObjs = objs[i];
      for (let key in studObjs) {
        let points = studObjs[key];
        let name = studObjs.name
        if (highestPoints < points) {
          highestPoints = points;
          winner = name;
        }
      }
    }
    return winner;
  }
    const student1 = {name: "Justin", points: 10000}
    const student2 = {name: "Geoff", points: 50};
    const student3 = {name: "Tom", points: 568};
    const student4 = {name: "Emily", points: 1700};
    const student5 = {name: "Corina", points: 1750}
    console.log(bestStudent(student2, student1, student3, student4, student5)) // returns "Justin"
        // Solution 1
      // Use reduce to compute the max number of points
      // const maxScore = students.reduce((acc, student) => {
      //   const score = student.points
      //   if (score > acc) {
      //     return score
      //   } else {
      //     return acc
      //   }
      // }, 0)
      // console.log('maxScore', maxScore)
      // // Use the max number of points to return the student
      // return students.filter(student => student.points === maxScore)[0].name
      // Solution 2
      // function bestStudent(...students){
      //     const bestStudent = students.reduce((acc, student) => {
      //         const points = student.points
      //         if(points > acc.points) {
      //           return student
      //         } else {
      //           return acc
      //         }
      //       })
      //       return bestStudent.name
      // }
  // Better Solution:
  // let bestStudent = function(...students) {
  //     let highScorer = students[0];
  //     for (let i = 1; i < students.length; i++) {
  //         if (highScorer["points"] < students[i]["points"]) {
  //             highScorer = students[i];
  //         }
  //     }
  //     return highScorer["name"];
  // }
