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
const BookCard = document.querySelector('.Book-card')

// The object constructor
function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(Title,Author,Pages,Read) {
const theBook = new Book(Title,Author,Pages,Read)
    myLibrary.push(theBook)
    console.log(myLibrary)
}

BTN.addEventListener('click',()=>{
    addBookToLibrary(newTitle,newAuthor,newPages,newRead)
    cardUpdate()
    hideForm()
    showCard()
})

tittle.addEventListener('change',()=>{
    newTitle = tittle.value;
    // theBook.title = newTitle;
})

author.addEventListener('change',()=>{
    newAuthor = author.value;
    // theBook.author = newAuthor;
})

pages.addEventListener('change',()=>{
    newPages = pages.value;
    // theBook.pages = newPages;
})
read.addEventListener('change',()=>{
    newRead = read.checked;
    // theBook.read = newRead;
})

const addBtn = document.querySelector('.add-btn')
const myForm = document.querySelector('.form')
const bookTittle = document.querySelector('.Book-Tittle')
const bookAuthor = document.querySelector('.Book-Author')
const bookpages = document.querySelector('.number-pages')

function showForm() {
    myForm.style.cssText = 'opacity: 1; z-index:1;'
    addBtn.style.cssText = 'opacity: 0; z-index:0;'
}
function hideForm(){
    myForm.style.cssText = 'opacity: 0; z-index:0'
    addBtn.style.cssText = 'opacity: 1; z-index:1'
    
   
}

function showCard(){
   BookCard.style.cssText = 'opacity: 1'
   event.preventDefault()
}

addBtn.addEventListener('click',()=>{
    showForm()
    formReset()
})

function formReset() {
    tittle.value = "";
    author.value = "";
    pages.value = "";
    read.value = "";
}

function cardUpdate(){
    let newtitle = myLibrary[0];
    bookTittle.textContent = newtitle.title;
    bookAuthor.textContent = newtitle.author;
    bookpages.textContent = newtitle.pages;


}
// function varReset(){
//     newTitle = "";
//     newAuthor = "";
//     newPages = "";
//     newRead = "";
// }