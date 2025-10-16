//your JS code here. If required.
// Get form elements
const title = document.getElementById('title');
const author = document.getElementById('author');
const isbn = document.getElementById('isbn');
const submitBtn = document.getElementById('submit');
const bookList = document.getElementById('book-list');

// Handle form submission
submitBtn.addEventListener('click', function (e) {
  e.preventDefault();

  // Get input values
  const titleValue = title.value.trim();
  const authorValue = author.value.trim();
  const isbnValue = isbn.value.trim();

  // Validate input fields
  if (titleValue === '' || authorValue === '' || isbnValue === '') {
    alert('Please fill all the fields!');
    return;
  }

  // Create a new table row
  const row = document.createElement('tr');

  // Insert columns (Title, Author, ISBN, Delete button)
  row.innerHTML = `
    <td>${titleValue}</td>
    <td>${authorValue}</td>
    <td>${isbnValue}</td>
    <td><button class="delete">Clear</button></td>
  `;

  // Append to table body
  bookList.appendChild(row);

  // Clear input fields
  title.value = '';
  author.value = '';
  isbn.value = '';
});

// Delete book row on clicking "Clear" button
bookList.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete')) {
    const row = e.target.parentElement.parentElement;
    bookList.removeChild(row);
  }
});
