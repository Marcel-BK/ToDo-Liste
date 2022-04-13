//---ADD LIST ITEM---

const list = document.getElementById("itemlist1");
const inputForm = document.getElementById("input-form");

const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = document.getElementById("add-todo-input").value;
    const newListItem = document.createElement("li");
    newListItem.id = "Item";
    newListItem.draggable = "true";
    newListItem.ondragstart = "drag(event)";
    newListItem.innerHTML = `<div class="row mx-auto mb-2"">
    <input class="col-1 px-1 my-2" type="checkbox">
    <div class="col px-1 checked" id="listItem">${inputValue}</div>
    <div class="col-1 px-0"><button id="edit-li" class="edit-item-button px-0 me-2"><i class="bi bi-pencil-fill"></i></button></div>
    <div class="col-1 px-0"><button class="delete-item-button px-0 me-2"><i class="bi bi-trash-fill"></i></button></div>
    </div>`;
    list.append(newListItem);
    document.getElementById("add-todo-input").value = "";

    // `<div class="row mx-auto mb-2"">
    // <div class="col-1 px-1"><input class="my-2" type="checkbox"></div>
    // <div class="col px-1 checked" id="listItem">${inputValue}</div>
    // <div class="col-1 px-0"><button id="edit-li" class="edit-item-button px-0 me-2"><i class="bi bi-pencil-fill"></i></button></div>
    // <div class="col-1 px-0"><button class="delete-item-button px-0 me-2"><i class="bi bi-trash-fill"></i></button></div>
    // </div>`


    //---EDIT LIST ITEM---
    
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



    //---DELETE LIST ITEM---

    let deleteBtn = document.getElementsByClassName("delete-item-button");

    Array.prototype.slice.call(deleteBtn).forEach(function(item) {

  item.addEventListener("click", function(e) {
    e.target.parentNode.parentNode.parentNode.remove()
  });

})
};

inputForm.addEventListener("submit", handleSubmit);



//---DRAG & DROP---

$(function() {
        $("#itemlist1, #itemlist2, #itemlist3").sortable({
          connectWith: "ul",
          placeholder: "placeholder",
          delay: 150
        })
        .disableSelection()
        .dblclick( function(e){
          var item = e.target;
          if (e.currentTarget.id === 'itemlist1') {
            //move from il1 to il2
            $(item).fadeOut('fast', function() {
              $(item).appendTo($('#itemlist2')).fadeIn('slow');
            });
          } else {
            //move from il2 to il1
            $(item).fadeOut('fast', function() {
              $(item).appendTo($('#itemlist1')).fadeIn('slow');
            });
          }
        });
});


// new Sortable(itemlist1,  {
//     animation: 150,
//     ghostClass: 'sortable-ghost'
// });



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



//---LOCAL STORAGE---

$(document).ready(function() {

  $("#saveAll").click(function(e) {
    e.preventDefault();
    var listContents = [];
    $("ul").each(function(){
       listContents.push(this.innerHTML);
    })
    localStorage.setItem('todoList', JSON.stringify(listContents));
  });

  $("#clearAll").click(function(e) {
    e.preventDefault();
    localStorage.clear();
    location.reload();
  });

  loadToDo();

  function loadToDo() {
    if (localStorage.getItem('todoList')){
        var listContents = JSON.parse(localStorage.getItem('todoList'));
        $("ul").each(function(i){
          this.innerHTML = listContents [i];
        })
    }
  }
});