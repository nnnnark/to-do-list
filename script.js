let inputedText = document.getElementById('input');
let listElements = document.getElementById('list');
let toDoNodeList = document.getElementsByClassName('toDo');
let linesList = document.getElementsByClassName('lines');

const addButton = document.getElementById('addButton');
let acceptButtons = document.getElementsByClassName('accept');
let deleteButtons = document.getElementsByClassName('delete');

let input;
let toDo;

addButton.onclick = () => {
    input = inputedText.value;
    !inputedText.value ?
        alert('Write Your ToDo!') :
        listElements.innerHTML = '<div class="lines"> <div class="toDo">' + input + '</div> <button class="accept">✓</button> <button class="delete">X</button></div> <hr class="middleHr">' + listElements.innerHTML;
        inputedText.value = '';
    for (let i = 0; i < toDoNodeList.length; i++) {
        acceptButtons[i].onclick = () => {
            toDo = toDoNodeList[i].innerHTML;
            toDoNodeList[i].innerHTML = '<del>' + toDo + '</del>';
            linesList[i].classList.add('toDoDone');
        }

        deleteButtons.onclick = () => {

        }
    }
}
