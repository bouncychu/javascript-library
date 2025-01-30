let myLibrary = [];

function Book(author, title, page, read) {
  // the constructor...
  this.author = author;
  this.title = title;
  this.page = page;
  this.read = read;
}


// load initial Books into library
myLibrary[0] = new Book("Rowling", "Prisoner of Azkaban", "555", "read");
myLibrary[1] = new Book("Tolkien", "The Hobbit", "201", "read");

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
    book[3] = "read";  
  }
  else {
    book[3] = "unread";
  }

  // Create new instance of Book object and push the object into myLibrary Array
  book = new Book(book[0], book[1], book[2], book[3]);
  myLibrary.push(book);

}

function updateLibrary (element, index) {

  //identify and define nodes to add HTML containers
  let container = document.querySelector("#container");
  let content = document.createElement("div");
  content.className = "book-card";
  let list = document.createElement("ul");
  let bookTitle = document.createElement("h3");
  let bookAuthor = document.createElement("li");
  let bookPages = document.createElement("li");
  let bookRead = document.createElement("li");
  container.prepend(content);

  //assign book data in library array to text content
  bookTitle.textContent = myLibrary[index].title;
  content.appendChild(bookTitle);
  content.appendChild(list);
  bookAuthor.innerText = myLibrary[index].author;
  list.appendChild(bookAuthor);
  bookPages.innerText = myLibrary[index].page + " pages";
  list.appendChild(bookPages);
  
  let readListItem = document.createElement("div");
  readListItem.style.display = 'flex';
  readListItem.style.gap = "5px";
  readListItem.style.justifyContent = 'flex-start';
  list.appendChild(readListItem);

  //implementation of read checkbox button
  let readCheckBoxLabel = document.createElement("label");
  let readCheckBox = document.createElement("input");
  readCheckBox.className = "checkbox";
  readCheckBox.id = myLibrary[index].title + index + index;
  readCheckBoxLabel.htmlFor = myLibrary[index].title + index + index;
  readCheckBox.setAttribute("type", "checkbox");
  
  readCheckBoxLabel.className = "switch";

  if (myLibrary[index].read == "read") {
    readCheckBox.checked =  true;
  } else {
    readCheckBox.checked = false;
  }
  readListItem.appendChild(readCheckBox);
  readListItem.appendChild(readCheckBoxLabel);
  bookRead.innerText = myLibrary[index].read;
  if (bookRead.innerText == "read") {bookRead.style.color = "#EE6C4D"}
  else {bookRead.style.color = "#E0FBFC"};
  readListItem.appendChild(bookRead);
  readCheckBoxLabel.addEventListener("click", function(){
    myLibrary[index].toggleRead();
    bookRead.innerText = myLibrary[index].read;
    if (bookRead.innerText == "read") {bookRead.style.color = "#EE6C4D"}
    else {bookRead.style.color = "#E0FBFC"};
  });

  //add delete button
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  content.appendChild(deleteButton);
  deleteButton.id = index;
  deleteButton.classList.add("deletebutton");

  //Link the "delete button" to index in array
  var buttonClass = document.getElementById(index);

  // Use filter method to remove the book from array if buton id matches array index
  buttonClass.addEventListener('click', function () {
    console.log("clicked");
    myLibrary = myLibrary.filter(function(item, index) {
      if (index != deleteButton.id) {
        console.log(index);
        console.log("Delete Button ID is: " + deleteButton.id);
        return item;
      }
    });

  // Clear container and reprint the book cards
  clearContainer();
  myLibrary.forEach(updateLibrary);
});

}

//Initialise the first 2 books in array
myLibrary.forEach(updateLibrary);

// Link the "submit" button to push new book to Library
let addBook = document.getElementById('add-book');
addBook.addEventListener('click', function () {
  console.log("this button is clicking");
  addBookToLibrary();
  clearContainer();
  myLibrary.forEach(updateLibrary);
}
)

// use DOM firstChild property and removeChild method to clear the content
function clearContainer() { 
  while(container.firstChild)
    container.removeChild(container.firstChild);

  //If container empty add message
  if (myLibrary.length === 0) {
    console.log("libary is empty");
    container.style.color = "#3D5A80";
    container.textContent = "Library empty, please add a book.";
  };
} 

// Add prototype function to book to toggle "read" status
Book.prototype.toggleRead = function() {
  if (this.read === "read") {this.read = "unread"}
  else {this.read = "read"}
};
