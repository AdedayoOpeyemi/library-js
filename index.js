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

    books.forEach((book) => addBookToList(book));
  
  function addBookToList(book) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
      <td class='text-center'>${book.title}</td>
      <td class='text-center'>${book.author}</td>
      <td class='text-center'>${book.page}</td>
      <td><a href='#' class='btn btn-danger btn-sm delete'>X</a></td>
    `;

    list.appendChild(row);
  }
  }
}