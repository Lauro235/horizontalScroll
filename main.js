// x = horizontal
// y = vertical

let browserWindowY = window.innerHeight;
let browserWindowX = window.innerWidth;

const container = document.querySelector('.wrapper');
const items = document.querySelectorAll('.item')

function findWindowSize() {
    container.style.width = window.innerWidth + 'px';
    container.style.height = window.innerHeight + 'px';
    items.forEach(e => e.style.width = window.innerWidth + 'px');
    items.forEach(e => e.style.height = window.innerHeight + 'px');
}

window.onresize = findWindowSize;