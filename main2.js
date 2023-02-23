// x = horizontal
// y = vertical

let browserWindowY = window.innerHeight;
let browserWindowX = window.innerWidth;

browserWindowX = window.onresize = assignWindowWidth;
browserWindowY = window.onresize = assignWindowHeight;

const container = document.querySelector('.wrapper');
const items = document.querySelectorAll('.item')

function assignWindowWidth() {
    container.style.width = window.innerWidth + 'px';
    items.forEach(e => e.style.width = window.innerWidth + 'px');
    
}
function assignWindowHeight() {
    container.style.height = window.innerHeight + 'px';
    items.forEach(e => e.style.height = window.innerHeight + 'px');    
}

// Button to next/last picture

// button selector
let nextPictureButton = document.querySelectorAll('.next-picture');
let lastPictureButton = document.querySelectorAll('.last-picture');
// starting horizontal scroll coordinate
let scrollPoint = 0;

nextPictureButton.forEach(e => e.addEventListener('click', nextPic));
lastPictureButton.forEach(e => e.addEventListener('click', lastPic));


console.log(browserWindowX)

function nextPic() {
    container.scrollLeft = scrollPoint += childWidth;
    }

function lastPic() {
    container.scrollLeft = scrollPoint -= childWidth;
}