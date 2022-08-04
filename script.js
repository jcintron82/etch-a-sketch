const container = document.getElementById('container');
const divs = document.getElementsByClassName('divs');
let i = [];

for (let i = 0; i < 255; i++){
    const div = document.createElement('div');
    div.className = 'divs';
    container.appendChild(div);
}

function divColor(color){
        divs[i].style.background = color;
    
}

divs[i].addEventListener('mouseover', () => {
    divColor('salmon');
});
