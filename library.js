// The operation variables
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

// The object constructor
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

BTN.addEventListener('click',()=>{
    addBookToLibrary()
    hideForm()
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
})
read.addEventListener('change',()=>{
    newRead = read.checked;
    theBook.read = newRead;
    console.log(theBook)
})

const addBtn = document.querySelector('.add-btn')
const myForm = document.querySelector('.form')

function showForm() {
    myForm.style.cssText = 'opacity: 1; z-index:1'
    addBtn.style.cssText = 'opacity: 0; z-index:0'
}
function hideForm(){
    myForm.style.cssText = 'opacity: 0; z-index:0'
    addBtn.style.cssText = 'opacity: 1; z-index:1'

}
addBtn.addEventListener('click',()=>{
    showForm()
})