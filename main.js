// x = horizontal
// y = vertical

/* 

======================================================
Convert vertical to horizontal scrolling start

https://alvarotrigo.com/blog/scroll-horizontally-with-mouse-wheel-vanilla-java/

NOTE: drawback is that one cannot apply the scroll-behaviour: smooth; setting in CSS on the wrapper element

Solution below feeds object into scrollTo that allows for smooth scrolling

*/

const wrapper = document.querySelector(".wrapper");
const wrapperWidth = wrapper.scrollWidth;
console.log(wrapperWidth);

const transformScroll = (e) => {
  // console.log(wrapper.scrollLeft);
  e.preventDefault();
  // wrapper.scrollLeft += e.deltaY;
  wrapper.scrollTo({
    top: 0,
    left: wrapper.scrollLeft += e.deltaY,
    behavior: 'smooth',
  })
}

wrapper.addEventListener('wheel', transformScroll)

/* 

Convert vertical to horizontal scrolling end
======================================================

*/