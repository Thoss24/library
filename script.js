// bring up add book form on page
let addBookButton = document.querySelector('#add-book-button');
addBookButton.addEventListener('click', () => {
   document.getElementById('add-book-area').style.display = 'flex' 
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
