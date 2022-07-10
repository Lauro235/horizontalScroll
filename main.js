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