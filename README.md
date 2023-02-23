# horizontalScroll

## Purpose of project

In this project I learnt how to make a horizontal scrolling website.

## [See the project](https://lauro235.github.io/horizontalScroll/)

### Resources

- horizontal scrolling CSS tricks <https://css-tricks.com/pure-css-horizontal-scrolling/>
- horizontal scrolling hubspot <https://blog.hubspot.com/website/horizontal-scrolling>
- digital ocean <https://www.digitalocean.com/community/tutorials/implementing-a-scroll-based-animation-with-javascript>
- mdn client width <https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth>
- mdn resize observer <https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver>

### Method

1. Create a flex wrapper with height and width of 100vh/vw
2. Create nested div with the following CSS values
  - display: flex;
  - width: 100vw;
  - flex-shrink: 0;
Flex will set all inner contents side by side horizontally.
100vw will ensure that the contents of the div take up all screen width
flex-shrink: 0; ensures that each child component individually takes up full screen width (individual children are not shrunk so that all children are within the screen, rather overflow takes place)
3. Place some content in the nested div...
4. Finally let's add the js. We will
  - Target the wrapper element
  - add a scroll event listener  
  `wrapper.addEventListener('wheel', transformScroll);`
5. Pass in call back
  - prevent default bevhaviour
  - leverage scrollTo()
  - pass in options
    ```js
    {
      top: 0,
      left: wrapper.scrollLeft += e.deltaY,
      behavior: 'smooth',
    }
    ```

You will notice that the value of wrapper.scrollLeft + window.innerWidth is equal to wrapper.scrollWidth.

scrollLeft takes you as far as it can go, but scrollWidth includes the innerWidth to. It takes you to the end of all content.
