$(document).ready(readyNow);

let element = 0;

function readyNow() {
    $('.js-btn-generate').on('click', addElement);
    $('.js-container').on('click', '.js-btn-yellow', changeYellow);
    $('.js-container').on('click', '.js-btn-delete',  deleteElement);
    clickCounter();
}

function addElement (){
    $('.js-container').append(`
        <div>
            <p>${element}
            <button class="js-btn-yellow">Yellow</button>
            <button class="js-btn-delete">DELETE</button>
            </p>
        </div>`);
}

function clickCounter (){
    element++;
}

function changeYellow(){
    console.log ('in Yellow');
}

function deleteElement () {
    console.log('in delete');
}