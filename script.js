const inputbox = document.getElementById("input");
const listbox = document.getElementById("list");

function addText() {
    if (inputbox.value === '') {
        alert("Must write something")
    } else {
        let li = document.createElement("li")
        li.innerHTML = inputbox.value
        listbox.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputbox.value = ''
    savedata()
}

listbox.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        savedata()
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        savedata()
    }
},false)


function savedata(){
    localStorage.setItem("data" , listbox.innerHTML)
}

function showdata(){
    listbox.innerHTML = localStorage.getItem("data")
}

showdata()