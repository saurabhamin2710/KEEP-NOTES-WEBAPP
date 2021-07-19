console.log("Welcome");
shownotes();
let addBtn = document.getElementById('addbtn');
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById('addtxt');
    let addTitle = document.getElementById('addtitle');
    let Name = document.getElementById("name");
    let notes = localStorage.getItem('notes');
    if (notes == null){
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let addobj = {
        txt: addTxt.value,
        title: addTitle.value,
        name:Name.value,
        // date: Date()
    };
    notesObj.push(addobj);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    Name.value = "";
    //console.log(notesObj);
    shownotes();
});
function shownotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.txt}</p>
            <h5 class="your-name">${element.name}</h5>
            <button onclick="deleteNode(${index})" class="btn btn-primary" id="deletebtn">Delete Note</button><br>        
        </div>
    </div>`;
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = "Nothing to Show";
    }
}
function deleteNode(index) {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    shownotes();
}
let seachtxt = document.getElementById('searchTxt');
seachtxt.addEventListener("input",function(){
    let inputvalue = seachtxt.value;
    //console.log("Input event fired",inputvalue);
    let notescards = document.getElementsByClassName("noteCard");
    Array.from(notescards).forEach(function(element){
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if(cardtxt.includes(inputvalue)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})