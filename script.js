const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask(){

    // if input box is empty
    if(inputBox.value === ''){
        alert("You have to write something!");
    }

    // if something is written in the input box
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        //creating a new span element
        let span = document.createElement("span");
        // setthe content of span element to x sign
        span.innerHTML = "\u00d7";
        //append span element to an existing li element
        li.appendChild(span);
    }

    // empty the input box after entering a text
    inputBox.value = "";
    // calling the saveData every time changes occur in order to save new data to the browser
    saveData();

}

// code for the click function

listContainer.addEventListener("click", function(e){
    // if we click the LI it will be checked
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        //saveData should be called when we check
        saveData();
    }
    // if we click the span it will be removed
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        //saveData should be called when we delete the task
        saveData();
    }
}, false);

// Save the entered tasks in the browser
function saveData(){
    // every text entered will be saved in the browser under the name data
    localStorage.setItem("data", listContainer.innerHTML);
}

//display the data when website is opened again or refreshed

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
//calling the function
showTask();
