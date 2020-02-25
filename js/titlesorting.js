var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];

// console.log(library.sort((a,b) => (a.title > b.title)? 1 : -1));
// console.log(library.sort((a,b) => (a.title > b.title)? -1 : 1));

library.sort((a, b) => ((a.title > b.title) ? 1 : -1));
console.log(library);


var library1 = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];

 library1.sort((a, b) => ((a.title < b.title) ? 1 : -1));
 console.log(library1);