//---ADD LIST ITEM---

const list = document.getElementById("item-list1");
const inputForm = document.getElementById("input-form");

const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = document.getElementById("add-todo-input").value;
    const newListItem = document.createElement("li");
    newListItem.innerHTML = `<div id="Item" class="row list-item mx-auto mb-2" draggable="true" ondragstart="drag(event)">
    <div class="col-1 px-1"><input class="my-2" type="checkbox"></div>
    <div class="col px-1" id="listItem">${inputValue}</div>
    <div class="col-1 px-0"><button id="edit-li" class="edit-item-button px-0 me-2"><i class="bi bi-pencil-fill"></i></button></div>
    <div class="col-1 px-0"><button id="edit-li" class="edit-item-button px-0 me-2"><i class="bi bi-trash-fill"></i></button></div>
    </div>`;
    list.append(newListItem);
    document.getElementById("add-todo-input").value = "";


    
    const editLi = document.getElementById("edit-li");

    const editLiF = (editLiEvent) => {
        if (document.getElementById("listItem").contentEditable == "false") {
            document.getElementById("listItem").contentEditable = "true";
            let answer = document.getElementById("listItem").contentEditable;
        }
        else {
            document.getElementById("listItem").contentEditable = "false";
        }
    }
    
    editLi.addEventListener("click", editLiF);
};

inputForm.addEventListener("submit", handleSubmit);




//---DRAG & DROP---

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}



//---EDIT HEADER---

const editHeader1 = document.getElementById("edit-header1");

const editHead1 = (editEvent) => {
    if (document.getElementById("col-header1").contentEditable == "false") {
        document.getElementById("col-header1").contentEditable = "true";
        let answer = document.getElementById("col-header1").contentEditable;
    }
    else {
        document.getElementById("col-header1").contentEditable = "false";
    }
}

editHeader1.addEventListener("click", editHead1);


const editHeader2 = document.getElementById("edit-header2");

const editHead2 = (editEvent) => {
    if (document.getElementById("col-header2").contentEditable == "false") {
        document.getElementById("col-header2").contentEditable = "true";
        let answer = document.getElementById("col-header2").contentEditable;
    }
    else {
        document.getElementById("col-header2").contentEditable = "false";
    }
}

editHeader2.addEventListener("click", editHead2);


const editHeader3 = document.getElementById("edit-header3");

const editHead3 = (editEvent) => {
    if (document.getElementById("col-header3").contentEditable == "false") {
        document.getElementById("col-header3").contentEditable = "true";
        let answer = document.getElementById("col-header1").contentEditable;
    }
    else {
        document.getElementById("col-header3").contentEditable = "false";
    }
}

editHeader3.addEventListener("click", editHead3);






{/* <li id="listItem" class="mb-2 px-2" draggable="true" ondragstart="drag(event)">
<input class="me-2 my-2" type="checkbox">${inputValue}
<i id="edit-li" class="bi bi-trash-fill float-end ms-1 my-1"></i>
<i class="bi bi-pencil-fill float-end mx-1 my-1"></i>
</li> */}