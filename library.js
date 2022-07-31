let myLibrary = [];
let newTitle;
let newAuthor;
let newPages;
let newRead;

const tittle = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('Read');
const BTN = document.getElementById('BTN');
const myForm = document.querySelector('.form') 

function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

const theBook = new Book(newTitle,newAuthor,newPages,newRead)

function addBookToLibrary() {
    myLibrary.push(theBook)
    console.log(theBook)
}

BTN.addEventListener('onclick',()=>{
    addBookToLibrary()
})

tittle.addEventListener('change',()=>{
    newTitle = tittle.value;
    theBook.title = newTitle;
})

author.addEventListener('change',()=>{
    newAuthor = author.value;
    theBook.author = newAuthor;
})

pages.addEventListener('change',()=>{
    newPages = pages.value;
    theBook.pages = newPages;
    console.log(theBook)
})
read.addEventListener('change',()=>{
    newRead = read.checked;
    theBook.read = newRead;
    console.log(theBook)
})

const addBtn = document.querySelector('.add-btn')

addBtn.addEventListener('click',()=>{
    myForm.style.opacity = 1;
    alert('uyhgenbdshxghYTGHEDSICUJHS')
})

function formShow() {
}