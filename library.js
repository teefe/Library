const tittle = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('Read');
const BTN = document.getElementById('BTN');
let newTitle;
let newAuthor;
let newPages;
let newRead;
let myLibrary = [];

function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

tittle.addEventListener('change',()=>{
    newTitle = tittle.value;
    myLibrary.push(newTitle);
    console.log(newTitle)
})

author.addEventListener('change',()=>{
    newAuthor = author.value;
    console.log(newAuthor)
})

pages.addEventListener('change',()=>{
    newPages = pages.value;
    console.log(newPages)
})
read.addEventListener('change',()=>{
    newRead = read.checked;
    console.log(newRead)
})

