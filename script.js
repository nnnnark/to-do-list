let inputedText = document.getElementById('input');
let listElements = document.getElementById('list');
let toDoNodeList = document.getElementsByClassName('toDo');
let linesList = document.getElementsByClassName('lines');

const addButton = document.getElementById('addButton');
let acceptButtons = document.getElementsByClassName('accept');
let deleteButtons = document.getElementsByClassName('delete');

let hrNodeList = document.getElementsByClassName('middleHr');

let input;
let toDo;

addButton.onclick = () => {
    input = inputedText.value;
    !inputedText.value ?
        alert('Write Your ToDo!') :
        listElements.innerHTML = '<div class="lines"> <div class="toDo">' + input + '</div> <button class="accept">✓</button> <button class="delete">X</button></div>' + listElements.innerHTML;
        inputedText.value = '';
}

listElements.onclick = (e) => {
    if(e.target.classList == 'accept'){
        e.target.parentElement.classList.add('toDoDone');
    }else if(e.target.classList == 'delete'){
        e.target.parentElement.remove();
    }
}