let propertiesList = obj => {
    let keys = Object.keys(obj)
    return keys.join(" ");
}

var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

console.log(propertiesList({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}))
console.log(propertiesList(student));
