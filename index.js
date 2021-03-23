let myLibrary = [];

function Books(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
   return title + ' by ' + author + ', ' + pages + ' ' + read
  }
}
function addBookToLibrary(title, author, pages, read) {
  // do stuff here
  let book = new Books (title, author, pages, read);
  if (book) {
    myLibrary.push(book)
  }
}
