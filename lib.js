let bookTitle = document.getElementById("book-title");
let author = document.getElementById("book-author");
let status = document.getElementById("status");
let submitBtn = document.querySelector(".submit");
let bookData = document.querySelector(".book-list");
let library = [];

submitBtn.addEventListener("click", () => addBook());

function Book(title, author, status) {
    this.title = title;
    this.author = author;
    this.status = status;
}

function addBook() {
    if (!bookTitle.value || !author.value) {
        alert("Title or author is required!");
        return null;
    }
    
    let newBook = new Book(bookTitle.value, author.value, status.value);
    library.push(newBook);

    addToTable(bookTitle.value, author.value, status.value);

    bookTitle.value = "";
    author.value = "";
    status.value = "";
}

function addToTable(bookName, bookAuthor, bookStatus) {
    let title = document.createElement("p");
    let author = document.createElement("p");
    let status = document.createElement("p");

    let bookElements = [title, author, status];
    let bookInfo = [bookName, bookAuthor, bookStatus];

    bookElements.forEach((i, index) => {
        i.textContent = bookInfo[index];
        bookData.appendChild(i);
    })

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE";
    bookData.appendChild(deleteBtn);
    
    deleteBtn.addEventListener("click", () => {
        for (let i = 0; i < 3; i++) {
            deleteBtn.previousElementSibling.remove();
        }

        deleteBtn.remove();
    })
}