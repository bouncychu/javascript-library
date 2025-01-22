// This is where your javascript goes

const myLibrary = [];

function Book(author, title, page, read) {
  // the constructor...
  this.author = author;
  this.title = title;
  this.page = page;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
  let book = []
  let authorName = prompt("Please enter author name");
  let bookTitle = prompt("Please enter title");
  let pageNumber = prompt("Please enter number of pages");
  let readToggle = prompt("has the book been read?");
  book[0] = authorName;
  book[1] = bookTitle;
  book[2] = pageNumber;
  book[3] = readToggle;
  book = new Book(book[0], book[1], book[2], book[3]);
  myLibrary.push(book1);
}

function updateLibrary () {
  //loop through myLibrary array and update display
}


// create card
var container = document.querySelector("#container");
var content = document.createElement("div");

content.className = "book-card";
content.textContent = "This is the glorious text-content!";
container.appendChild(content);