
// Define a UI Vars
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const search = document.querySelector('#search')


loadEventListeners();

function loadEventListeners(){


    // Get Task Event
    document.addEventListener("DOMContentLoaded", getTask);

    // Add Task Event
    form.addEventListener("submit", addTask);

    // Remove Task Event
    taskList.addEventListener("click", removeTask);

    // Clear Task
    clearBtn.addEventListener("click", clearTask);

    search.addEventListener("keyup", searchTask);

}


function searchTask(){

let query = search.value.toLowerCase();
const tasks = document.querySelectorAll(".collection li");

tasks.forEach(task=>{
    let text = task.textContent.toLowerCase();
    let index = text.indexOf(query);
    console.log(text)

    if(index !== -1){
        console.log(index)
        task.style =  "display: block"
    }else{
        console.log("not work")
         task.style = "display: none"
         task.innerText = "Not"

    }
})

}


function getTask(){

    let tasks;

    if(localStorage.getItem("tasks") === null){

        tasks = [];

    } else {

        tasks = JSON.parse(localStorage.getItem("tasks"));
        
        tasks.forEach(function(element){
            
             // Create a Li Element
            const li = document.createElement("li");

            // Add Class
            li.className = "collection-item";

            // Create a text
            li.innerText = element;

            // Create a new link element
            const link = document.createElement("a");

            // Add class to link
            link.className = "delete-item secondary-content";

            // Add Icon HTML
            link.innerHTML = `<i class="fa fa-remove"></i>`;

            // Add to li
            li.appendChild(link);

            // Add li to ul
            taskList.appendChild(li);

        })


    }

}


function addTask(e){

    // To stop browers refresh 
    e.preventDefault();

   

        // Create a Li Element
        const li = document.createElement("li");

        // Add Class
        li.className = "collection-item";

        // Create a text
        li.innerText = taskInput.value;

        // Create a new link element
        const link = document.createElement("a");

        // Add class to link
        link.className = "delete-item secondary-content";

        // Add Icon HTML
        link.innerHTML = `<i class="fa fa-remove"></i>`;

        // Add to li
        li.appendChild(link);

        // Add li to ul
        taskList.appendChild(li);

        // Store in LS
        storeTaskInLocalStorage(taskInput.value);

        taskInput.value = "";

   

}

function storeTaskInLocalStorage(task){
    let tasks;

    if (localStorage.getItem("tasks") === null){
        tasks = [];
        tasks.push(task);
        console.log(tasks);
        localStorage.setItem("tasks", JSON.stringify(tasks))
        console.log("step 1")
    }
    else{
        tasks=JSON.parse(localStorage.getItem("tasks"))        
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks))
        console.log("step -2")
    }



}

// function storeTaskInLocalStorage(task){
    
//     let tasks;

//     if(localStorage.getItem("tasks") === null){

//         tasks = [];

//         tasks.push(task);

//         localStorage.setItem("tasks", JSON.stringify(tasks));

//         console.log("Step 1");
        
//     } 


// }



function removeTask(e){
    if(e.target.parentElement.classList.contains("delete-item")){
        if(confirm("Are you sure")){
            e.target.parentElement.parentElement.remove();
        }
    }

}

function removeFromLocalStorage(liText){

    let tasks;

    if(localStorage.getItem("tasks") === null){

        tasks = [];
        
    } else {

        tasks = JSON.parse(localStorage.getItem("tasks"));
        
        tasks.forEach(function(task, index){
           
            if(liText === task){
                // console.log(`${task} - ${index}`);
                tasks.splice(index, 1);
            }

        })

        localStorage.setItem("tasks", JSON.stringify(tasks));
       
    }
   

}


function clearTask(){

    const lists = document.querySelectorAll("li");
    
    lists.forEach(function(li){
        li.remove();
    });

    clearFromLocalStorage();


}

function clearFromLocalStorage(){
    // localStorage.clear();
    localStorage.removeItem("tasks");
}