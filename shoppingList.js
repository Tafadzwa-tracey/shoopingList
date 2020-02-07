var button = document.getElementById("Enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var listItems=document.getElementsByTagName("li"); 

//adding new items
function createListElement(){
    var li = document.createElement("li");
     li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    
 	var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete!"));
    li.appendChild(btn);
    btn.onclick = removeParent;
}

function addListAfterClick(){
    if(input.value.length > 0){
        createListElement();
    }
}

function addListAfterKeyPress(event){
    if(input.value.length >0 && event.keyCode === 13){
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress",addListAfterKeyPress);

ul.onclick=function(event){
    var target=event.target;
    target.classList.toggle("done");
}

function listLength(){
    return listItems.length;
}

function deleteButton(){
var btn=document.createElement("button");
btn.appendChild(document.createTextNode("Delete!"));
listItems[i].appendChild(btn);
btn.onclick=removeParent;
}

for( i=0;i<listLength();i++){
deleteButton();
}

function removeParent(evt){
    evt.target.parentNode.remove();
} 