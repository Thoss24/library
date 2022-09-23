// bring up add book form on page and add blur effect to background
let addBookButton = document.querySelector('#add-book-button');
addBookButton.addEventListener('click', () => {
    document.getElementById('add-book-area').style.display = 'flex';
    document.getElementById('heading').style.filter = 'blur(1px)';
    document.getElementById('main-content').style.filter = 'blur(1px)';
});

// cancel add book form and return to normal page view also removing blur effect
let cancelFormButton = document.querySelector('#form-cancel-button');
cancelFormButton.addEventListener('click', () => {
    document.getElementById('add-book-area').style.display = 'none'
    document.getElementById('heading').style.filter = 'none';
    document.getElementById('main-content').style.filter = 'none';
})


// Array to store the books
let myLibrary = [];

// Constructor function to hold info of book
function Book(title, author, pages, read) {
    this.title = title,
    this.author = author, 
    this.pages = pages,
    this.read = read
}

// Function to add book to the array (library)
function addBookToLibrary() {

}
