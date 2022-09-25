// bring up add book form on page and add blur effect to background
let addBookButton = document.querySelector('#add-book-button');
addBookButton.addEventListener('click', () => {
    document.getElementById('add-book-area').style.display = 'flex';
    document.getElementById('heading').style.filter = 'blur(1px)';
    document.querySelector('body').style.background = 'rgba(197, 196, 196, 0.5)';
    document.getElementById('main-content').style.filter = 'blur(1px)';
    });

// Click event for button to add book to page
let pushBookButton = document.querySelector('#push-book-button');
pushBookButton.addEventListener('click', addBookToLibrary)

// cancel add book form and return to normal page view also removing blur effect
let cancelFormButton = document.querySelector('#form-cancel-button');
cancelFormButton.addEventListener('click', () => {
    document.getElementById('add-book-area').style.display = 'none'
    document.getElementById('heading').style.filter = 'none';
    document.getElementById('main-content').style.filter = 'none';
    document.querySelector('body').style.background = 'lightgrey';
});

// Array to store the books
let myLibrary = [];

// function to loop through myLibrary array
function checkLibrary() {
    let bookDisplay = document.querySelector('.book-container');
    let newBook = document.createElement('div');

    for (let i = 0; i < myLibrary.length; i++){
        newBook.classList.add('book-style');
        newBook.innerHTML = myLibrary[i].title + " " + myLibrary[i].author + " " + myLibrary[i].pages + " " + myLibrary[i].read;
        bookDisplay.appendChild(newBook)
    }

}
checkLibrary()


// Constructor function to hold info of book
function Book(title, author, pages, read) {
    this.title = title,
    this.author = author, 
    this.pages = pages,
    this.read = read
}

// Function to add book to the array (library)
function addBookToLibrary() {
   let bookTitle = document.querySelector('#book-title').value;
   let bookAuthor = document.querySelector('#book-author').value;
   let bookPages = document.querySelector('#book-pages').value;
   let haveRead = document.querySelector('#have-you-read').checked;
   

   let book = new Book(bookTitle, bookAuthor, bookPages, haveRead);

   myLibrary.push(book)
}


