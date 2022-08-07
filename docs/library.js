let myLibrary = [];

const bookContainer = document.getElementById("book-container");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function displayBooks() {
    console.log(JSON.stringify(myLibrary));
}

function on() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById('add-book-form').style.display = 'block';
}

function off() {
    document.getElementById("overlay").style.display = "none";
}



function submitClicked() {
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var pages = document.getElementById("pages").value;
    var read = document.getElementById("read").checked;
    let submittedBook = new Book(title, author, pages, read);
    addBookToLibrary(submittedBook);

    var book = document.createElement("div");
    var titleElement = document.createElement("div");
    var authorElement = document.createElement("div");
    var pagesElement = document.createElement("div");
    var readButton = document.createElement("button");
    var removeButton = document.createElement("button");

    titleElement.textContent = (`${title}`);
    authorElement.textContent = (`${author}`);
    pagesElement.textContent = (`${pages} pages`);

    if (read == true) {
        readButton.textContent = "Read";
        readButton.style.background = "lightgreen";
    } else {
        readButton.textContent = "Not read";
        readButton.style.background = "red";
    }

    readButton.addEventListener("click", function(){
        if (readButton.textContent == "Read") {
            readButton.textContent = "Not read";
            readButton.style.background = "red";
        } else {
            readButton.textContent = "Read";
            readButton.style.background = "lightgreen";
        }
        //TODO: Make sure that this read function changes object properties
        read = !read;
    });
    removeButton.textContent = "remove";

    book.setAttribute('id', 'book');
    readButton.setAttribute('id', 'readButton');
    removeButton.setAttribute('id', 'removeButton');

    book.appendChild(titleElement);
    book.appendChild(authorElement);
    book.appendChild(pagesElement);
    book.appendChild(readButton);
    book.appendChild(removeButton);

    book.style.textAlign = "center";
    book.style.fontSize = "40px";
    book.style.height = "200px";
    book.style.width = "200px";
    book.style.backgroundColor = "slategrey";
    document.getElementById("book-container").appendChild(book);

    displayBooks();
}

