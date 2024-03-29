// globally defined book elements
let bookDisplay = document.querySelector('.book-container');

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
pushBookButton.addEventListener('click', addBookToLibrary);
pushBookButton.addEventListener('click', () => {
    document.getElementById('add-book-area').style.display = 'none';
    document.getElementById('heading').style.filter = 'none';
    document.getElementById('main-content').style.filter = 'none';
    document.querySelector('body').style.background = 'lightgrey';
    document.getElementById('book-title').value = "";
    document.getElementById('book-author').value = "";
    document.getElementById('book-pages').value = "";
    document.getElementById('have-you-read').checked = false;
});
pushBookButton.addEventListener('click', checkLibrary);

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

    let newLibrary = myLibrary.slice(-1)

    Object.keys(newLibrary).forEach(obj => {
        let newBook = document.createElement('div');
        bookDisplay.appendChild(newBook);
        newBook.classList.add('user-book');
    
        Object.keys(newLibrary[obj]).forEach(key => {
            if (key === 'title'|| key === 'author' || key === 'pages') {
                let bookItem = document.createElement('p');
                bookItem.textContent = newLibrary[obj][key];
                newBook.appendChild(bookItem);
            } 
            else if (key === 'read') {
                let bookButton = document.createElement('button');
                bookButton.classList.add('read-or-not');
                bookButton.textContent = newLibrary[obj][key].charAt(0).toUpperCase() + newLibrary[obj][key].slice(1);

                if (bookButton.textContent === 'Read'){
                    bookButton.style.background = 'rgb(87, 222, 109)'
                } else if (bookButton.textContent === 'Not read'){
                    bookButton.style.background = 'rgb(245, 125, 125)'
                }

                bookButton.addEventListener('click', () => {
                    if (bookButton.textContent === 'Read') {
                        bookButton.textContent = 'Not read';
                        bookButton.style.background = 'rgb(245, 125, 125)'
                    } else if (bookButton.textContent === 'Not read') {
                        bookButton.textContent = 'Read';
                        bookButton.style.background = 'rgb(87, 222, 109)'
                    }
                    });

                newBook.appendChild(bookButton);

                let removeBook = document.createElement('button');
                removeBook.textContent = 'Remove book'
                newBook.appendChild(removeBook);
                removeBook.classList.add('remove-book');

                removeBook.addEventListener('click', event => {
                    event.target.parentNode.remove();
                });
            };
        });
    });
}
checkLibrary()

// Constructor function to hold info of book
class Book {
    constructor( 
        title = "unknown",
        author = "unknown",
        pages = "0",
        read = "Read" 
        ) {
        this.title = title,
        this.author = author, 
        this.pages = pages,
        this.read = read
        }
};

// Function to add book to the array (library)
function addBookToLibrary() {

    let bookTitle = document.querySelector('#book-title').value;
    let bookAuthor = document.querySelector('#book-author').value;
    let bookPages = document.querySelector('#book-pages').value;
    let haveRead = document.querySelector('#have-you-read').value;
    
    let book = new Book(bookTitle, bookAuthor, bookPages, haveRead);

    myLibrary.push(book)
}

function loadForm() {
    window.addEventListener("load", (event) => {
        console.log("page is fully loaded");
      });
}
loadForm()
