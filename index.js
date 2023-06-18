let data = localStorage.getItem('booksList');
let booksList = [];

if (data !== '' && data !== null) {
  booksList = JSON.parse(data);
}
