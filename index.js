let myLibrary = [];

const book1 = new Books ('Harry Potter', 'J.K.Rowling', 350, 'read');
myLibrary.push(book1);

const book2 = new Books ("Little Red Riding Hood", 'H.KAnderson', 15, 'no read');
myLibrary.push(book2);

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

myLibrary.forEach(myBook);



function myBook(item) {
  document.getElementById('card-title').innerHTML = item.title;
  document.getElementById('auth').innerHTML = item.author;
  document.getElementById('number').innerHTML = item.pages;
  document.getElementById('read').innerHTML = item.read;
}
