//Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

// let readingStatus = array => {
//     let arr = [];
//     for (let i = 0; i < array.length; i++) {
//         let objects = array[i]
//         arr.push(Object.values(objects))
//     }
//     return arr;
// }

let readingStatus = library => {
    let array = [];
    for (let i = 0; i < library.length; i++) {
        let obj = library[i];
        let author = obj.author
        let title = obj.title
        let readingStatus = obj.readingStatus
        if (readingStatus) {
            array.push(`I am reading ${title} which was written by ${author}`)
        } else {
            array.push(`I am a loser and don't like to read`)
        }
    }
    return array;
}


var library = [{
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
];

console.log(readingStatus(library));
