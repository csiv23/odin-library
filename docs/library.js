let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function displayBooks(){
    myLibrary.forEach(element => {
        console.log(element);
    });
}

function on() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById('add-book-form').style.display = 'block';

  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }



displayBooks();
