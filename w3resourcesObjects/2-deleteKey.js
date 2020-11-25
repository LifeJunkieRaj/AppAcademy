let deleteKey = (obj) => {
    delete obj.rollno
    return obj
}

var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

console.log(deleteKey(student))
