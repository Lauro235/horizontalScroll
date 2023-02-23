// x = horizontal
// y = vertical

/* 

======================================================
Convert vertical to horizontal scrolling start

https://alvarotrigo.com/blog/scroll-horizontally-with-mouse-wheel-vanilla-java/

feed object into scrollTo that allows for smooth scrolling

*/

const wrapper = document.querySelector(".wrapper");
const wrapperWidth = wrapper.scrollWidth;
console.log(wrapperWidth);

const transformScroll = (e) => {
  e.preventDefault();
  console.log(wrapper.scrollLeft + window.innerWidth);
  wrapper.scrollTo({
    top: 0,
    left: wrapper.scrollLeft += e.deltaY,
    behavior: 'smooth',
  })
}

wrapper.addEventListener('wheel', transformScroll);