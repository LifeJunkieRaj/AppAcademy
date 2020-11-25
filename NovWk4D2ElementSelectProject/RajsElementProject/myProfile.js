window.addEventListener("DOMContentLoaded", (event) => {
console.log("This is my profile page!")

let h1 = document.createElement("h1");
h1.setAttribute("id", "mocha-man");
h1.setAttribute("class", "myName")
let myInfo = document.createTextNode("Raj Michael-David Hudek");
h1.appendChild(myInfo);
document.body.appendChild(h1);

let myDetails = document.createElement("ul");
myDetails.setAttribute("id", "mocha-mans-life");
myDetails.setAttribute("class", "myDeets");
document.body.appendChild(myDetails)

let myDeetsArr = [
    "<li class='detail'>I love learning to code</li>",
    "<li class='detail'>I can type 85 wpm</li>",
    "<li class='detail'>I love flying helicopters</li>",
    "<li class='detail'>I love SCUBA Diving</li>",
    "<li class='detail'>I love pretending I still do any of this stuff</li>",
    "<li class='detail'>I like loving life</li>"
]
const liString = myDeetsArr.join(" ");
const liEl = document.getElementById("mocha-mans-life");
liEl.innerHTML = liString

const clockDiv = document.createElement("div");
clockDiv.setAttribute("id", "raj-o-clock");
document.body.appendChild(clockDiv);
let time = () => {
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    clockDiv.innerHTML = "The following seemingly random set of numbers is a clock " + hours + ":" + minutes + ":" + seconds
}
setInterval(time, 500)
});

// You can use the following to add class name to all the li's in your myDeetsArr
// let elements = document.querySelectorAll("li")
// elements.forEach(el => {
    // el.className = 'detail'
// })
