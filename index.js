    
// Book class: Represents a Book
class Book {
  constructor(title, author, page) {
    this.title = title;
    this.author = author;
    this.page = page;
  }
}

// UI Class: Handle UI Tasks
class UI {
  static displayBooks() {
    const StoredBooks = [
    {
      title: 'Harry Potter',
      author: 'J.K.Rowling',
      page: '600'
    },
    {
      title: 'Lord Of The Rings',
      author: 'J.R.R Tolkien',
      page: '600'
    }
    ];
    const books = StoredBooks;

    books.forEach((book) => UI.addBookToList(book));
  }
    
  
  static addBookToList(book) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
      <td class='text-center'>${book.title}</td>
      <td class='text-center'>${book.author}</td>
      <td class='text-center'>${book.page}</td>
      <td><a href='#' class='btn btn-danger btn-sm delete'>X</a></td>
     <td><a href='#'  class='btn btn-danger btn-sm read'></a></td>
    `;
    list.appendChild(row);
    const bookRead = document.querySelector('.read');
    bookRead.className = 'btn btn-secondary mr-3';
    bookRead.addEventListener('click', UI.changeStatus);
    if (book.read) {
      bookRead.textContent = 'Read';
    } else {
      bookRead.textContent = 'Not Read';
    }
   }




  static removeBook(book) {
    if (book.classList.contains('delete')) {
      book.parentElement.parentElement.remove();
    }
  }

static changeStatus(e) {
  if (e.target.textContent === 'Read') {
    e.target.textContent = 'Not Read';
  } else {
    e.target.textContent = 'Read';
  }
}
}



// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add Book
document.querySelector("#book-form").addEventListener('submit', (e) => {

  e.preventDefault();

  //Get  values from form
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const page = document.querySelector('#page').value;

  //Create instance of book
  const newBook = new Book(title, author, page);
  // console.log(newBook)

  //Add new instance of Book to List
  UI.addBookToList(newBook);
});

  //Event Delete A Book

  document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.removeBook(e.target);
    document.addEventListener('DOMContentLoaded', UI.displayBooks);

  });

  // let change = document.querySelector('.read');

//  function la(e) {
//   if (e.target.innerHTML == "read") {
//     e.target.innerHTML == 'unread'
//   } 
//   else if (e.target.innerHTML == 'unread') {
//     e.target.innerHTML == 'read'
//   }
// }

   