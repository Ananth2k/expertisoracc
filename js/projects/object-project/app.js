// book constroctor
function Book(title, autor, isbn){
    this.title = title;
    this.autor = autor;
    this.isbn = isbn;
}

// ui constroctor
function UI(){

    UI.prototype.addBookToList = function(book){
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr')
        row.innerHTML = `
          <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.isbn}</td>
                    <td class="delete">
                        <span class="btn btn-danger">X</span>
                    </td>`;
        list.appendChild(row);     
        console.log(row)
    }

    UI.prototype.clearFields = function(){
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
    }

    UI.prototype.clearTask = function(){
        document.querySelector("#book-list").innerHTML = ""
    }

    UI.prototype.setAlert = function(message, className){   
        this.clearAlert();
        const alert = document.querySelector('.show-alert');
        const div =  document.createElement('div');
        div.className = `alert alert-${className}`;
        div.innerText = message;        

        setTimeout(function(){
            this.clearAlert();
            document.querySelector('.alert').remove();
        }, 3000)
    }

    UI.prototype.clearAlert = function(){
        const currentAlert = document.querySelector('.alert');

        if(currentAlert){
            currentAlert.remove();
        }
    }

}

document.querySelector("#book-form").addEventListener("submit", function(e){
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;

    if(title === "" || author === "" || isbn === ""){
        const ui = new UI();
        // alert("please fill the fields");
        ui.setAlert("failed", "danger");
    }
    else{
        const ui = new UI();
        const book = new Book(title, author, isbn);
        ui.addBookToList(book);
        ui.clearFields();
        ui.setAlert("Book added", "success"); 
    }
});

document.querySelector("#clear").addEventListener("click", function(e){
    const ui = new UI();
    ui.clearTask();
});