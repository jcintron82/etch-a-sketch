const container = document.getElementById('container');
const divs = document.getElementsByClassName('divs');
const gridPrompt = document.querySelector('#gridPrompt');

gridPrompt.addEventListener('click', function(){
    location.reload();
});

window.onload = gridChoice();

function gridChoice(){
    for (let i = 0; i < 10000; i++){
    const div = document.createElement('div');
    div.className = 'divs';
    container.appendChild(div);
    div.addEventListener('mouseover', (event) => {
        event.target.style.background = "salmon";
    });
    div.addEventListener('dblclick', (event) => {
        event.target.style.background = "";
    });
}}


function divColor(color){
        divs[i].style.background = color;
    
}

