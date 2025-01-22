const myLibrary = [];

function Book(author, title, page, read) {
  // the constructor...
  this.author = author;
  this.title = title;
  this.page = page;
  this.read = read;
}

function addBookToLibrary() {
  // Get variables from input fields
  let book = []
  let authorName = document.getElementById("author").value;
  let bookTitle = document.getElementById("title").value;
  let pageNumber = document.getElementById("pages").value;
  let readToggle = document.getElementById("read").checked;

  //assign variables to book array
  book[0] = authorName;
  book[1] = bookTitle;
  book[2] = pageNumber;
  if (readToggle === true) {
    book[3] = "Read";  
  }
  else {
    book[3] = "Not Read";
  }

  // Create new instance of Book object and push the object into myLibrary Array
  book = new Book(book[0], book[1], book[2], book[3]);
  myLibrary.push(book);

  // Link the "submit" button to push new book to Library
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