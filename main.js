// x = horizontal
// y = vertical

/* 

======================================================
Convert vertical to horizontal scrolling start

https://alvarotrigo.com/blog/scroll-horizontally-with-mouse-wheel-vanilla-java/

*/

const wrapper = document.querySelector(".wrapper");
const wrapperWidth = wrapper.scrollWidth;
console.log(wrapperWidth);

const transformScroll = (e) => {
  // console.log(wrapper.scrollLeft);
  e.preventDefault();
  wrapper.scrollLeft += e.deltaY;
}

wrapper.addEventListener('wheel', transformScroll)

/* 

Convert vertical to horizontal scrolling end
======================================================

*/

// let browserWindowY = window.innerHeight;
// let browserWindowX = window.innerWidth;

// const container = document.querySelector('.wrapper');
// const items = document.querySelectorAll('.item')
// let childWidth = items[0].clientWidth;

// function assignWindowSize() {
//     container.style.width = window.innerWidth + 'px';
//     container.style.height = window.innerHeight + 'px';
//     items.forEach(e => e.style.width = window.innerWidth + 'px');
//     items.forEach(e => e.style.height = window.innerHeight + 'px');
// }

// console.log(childWidth);

// window.onresize = assignWindowSize;

// // Button to next/last picture

// // button selector
// let nextPictureButton = document.querySelectorAll('.next-picture');
// let lastPictureButton = document.querySelectorAll('.last-picture');
// // starting horizontal scroll coordinate
// let scrollPoint = 0;

// nextPictureButton.forEach(e => e.addEventListener('click', nextPic));
// lastPictureButton.forEach(e => e.addEventListener('click', lastPic));

// console.log(scrollPoint)

// function nextPic() {
//     container.scrollLeft = scrollPoint += childWidth;
//     }

// function lastPic() {
//     container.scrollLeft = scrollPoint -= childWidth;
// }
