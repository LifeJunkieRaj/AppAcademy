function getDate() {
    const date = new Date();
    return ["getFullYear", "getMonth", "getDate"].map((v) => date[v]()).join("-");
}

console.log(getDate(14))
console.log(getDate(12-19-1979))
