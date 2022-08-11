let myLibrary = [];

const bookContainer = document.getElementById("book-container");

document.addEventListener('click', function (e) {
    switch (true) {
        case e.target && e.target.id == "readButton":
            if (readButton.textContent == "Read") {
                readButton.textContent = "Not read";
                readButton.style.background = "#ff7070";
            } else {
                readButton.textContent = "Read";
                readButton.style.background = "#bfffbc";
            }

            var element = e.target;
            var book = getBookFromElement(element);
            book.read = !book.read;
            console.log(book);
            break;
        case e.target && e.target.id == "removeButton":
            var element = e.target;
            var book = element.parentElement.parentElement;
            var title = book.children[0];
            removeBook(title);
            break;
    }


});

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function getBookFromElement(element) {
    var parent = element.parentElement;
    var bookTitle = parent.children[0].textContent;
    return getBook(bookTitle);
}

function getBook(bookTitle) {
    return myLibrary.find(obj =>
        obj.title == bookTitle)
}

function removeBook(bookTitle) {
    const indexOfObject = myLibrary.findIndex(object => {
        return object.title == bookTitle;
    });
    myLibrary.splice(indexOfObject, 1);

    bookTitle.parentElement.remove();
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

function determineValidInput(title, author, pages) {
    let res = true;
    if ( title == "" || author == ""|| pages == "" || parseInt(pages) < 0) {  
        res = false;
    }
    return res;
}

function submitClicked() {
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var pages = document.getElementById("pages").value;
    console.log(pages);
    var read = document.getElementById("read").checked;

    if(determineValidInput(title, author, pages)) {
    let submittedBook = new Book(title, author, pages, read);
    addBookToLibrary(submittedBook);

    var book = document.createElement("div");
    var titleElement = document.createElement("div");
    var authorElement = document.createElement("div");
    var pagesElement = document.createElement("div");
    var buttonWrapper = document.createElement("div");
    var readButton = document.createElement("button");
    var removeButton = document.createElement("button");


    titleElement.textContent = '"' + title + '"';
    authorElement.textContent = (`${author}`);
    pagesElement.textContent = (`${pages} pages`);

    if (read == true) {
        readButton.textContent = "Read";
        readButton.style.background = "#bfffbc";
    } else {
        readButton.textContent = "Not read";
        readButton.style.background = "#ff7070";
    }
    removeButton.textContent = "Remove";

    titleElement.setAttribute('id', 'book-title');
    book.setAttribute('id', 'book');
    buttonWrapper.setAttribute('id', 'button-wrapper');
    readButton.setAttribute('id', 'readButton');
    removeButton.setAttribute('id', 'removeButton');

    book.appendChild(titleElement);
    book.appendChild(authorElement);
    book.appendChild(pagesElement);
    buttonWrapper.appendChild(readButton);
    buttonWrapper.appendChild(removeButton)
    book.appendChild(buttonWrapper);

    book.style.fontFamily = "Cambria";
    book.style.marginBottom = "1%";
    book.style.textAlign = "center";
    book.style.fontSize = "40px";
    book.style.height = "195px";
    book.style.width = "195px";
    book.style.borderRadius = "8px";
    book.style.backgroundColor = "#dbe4ee";
    book.style.marginto
    document.getElementById("book-container").appendChild(book);

    displayBooks();
}
}

