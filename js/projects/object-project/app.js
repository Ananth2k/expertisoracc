// book constroctor
function Book(title, autor, isbn){
    this.title = title;
    this.autor = autor;
    this.isbn = isbn;
}

// ui constroctor
function UI(){

}

document.querySelector("#book-form").addEventListener("submit", function(e){
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;

    const book = new Book(title, author, isbn)



    console.log("Form submited", book)
})