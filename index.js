import Library from './modules/Library.js';
import navigate from './modules/SPA-navigation.js';
import time from './modules/Time.js';

window.addEventListener('DOMContentLoaded', () => {
  const bookTitle = document.querySelector('#title');
  const bookAuthor = document.querySelector('#author');
  const addBtn = document.querySelector('#submit');
  const navItems = Array.from(document.querySelectorAll('.links')[0].children);

  const myLibrary = new Library();

  myLibrary.createBook();

  addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (bookTitle.value === '' || bookAuthor.value === '') {
      return;
    }
    myLibrary.addBook(bookTitle, bookAuthor);
    localStorage.setItem('book-collection', JSON.stringify(myLibrary.library));
    bookTitle.value = '';
    bookAuthor.value = '';
  });

  navItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      navigate(e.target.parentElement.id);
    });
  });

  setInterval(time, 1000);
});
