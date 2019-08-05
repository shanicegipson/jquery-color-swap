$(document).ready(readyNow);

let element = 1;

function readyNow() {
    $('.js-btn-generate').on('click', addElement);
    $('.js-container').on('click', '.js-btn-yellow', changeYellow);
    $('.js-container').on('click', '.js-btn-delete',  deleteElement);
}

function addElement (){
    $('.js-container').append(`
        <div>
            <p>${element}</p>
            <button class="js-btn-yellow">Yellow</button>
            <button class="js-btn-delete">DELETE</button>
        </div>`);
}

function clickCounter (){
    console.log('counter');
}

function changeYellow(){
    console.log ('in Yellow');
}

function deleteElement () {
    console.log('in delete');
}