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
            <p>${element}
            <button class="js-btn-yellow">Yellow</button>
            <button class="js-btn-delete">DELETE</button>
            </p>
        </div>`);

        clickCounter();
}

function clickCounter (){
    element ++;
}

function changeYellow(){
    $(this).parent().addClass('new');
}

function deleteElement () {
    $(this).parent().remove();
}