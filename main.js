// x = horizontal
// y = vertical

const wrapper = document.querySelector(".wrapper");
const wrapperWidth = wrapper.scrollWidth;
console.log(wrapperWidth);
const item = document.querySelector(".num1");
const itemWidth = item.scrollWidth;
console.log(wrapperWidth);

window.onload = function () {
  window.onscroll = function () {
    var doc = document.body,
      scrollPosition = doc.scrollLeft;
    console.log(scrollPosition);
    //   pageSize = doc.scrollHeight - doc.clientHeight,
    //   percentageScrolled = Math.floor((scrollPosition / pageSize) * 100);
    let leftScroll;
    for (
      scrollPosition = 0;
      scrollPosition < wrapper.scrollWidth;
      scrollPosition++
    ) {
      leftScroll = window.scrollTo(0, scrollPosition);
    }
    // if (percentageScrolled == 0) {
    //   // if the percentage is >= 50, scroll to top
    // }
  };
};

// const transformScroll = (e) => {
//   if(e.deltaY) {
//     console.log(e.deltaY, 'you have scrolled down');
//     return;
//   }
//   let leftScroll = e.scrollLeft += e.deltaY;
// }

// let element = document.scrollingElement || document.documentElement;
// element.addEventListener('wheel', transformScroll)

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
