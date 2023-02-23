# Learn In Public Series

## horizontalScroll

### Goals and Intent

I would like to learn how to make a parallel scrolling website. I believe this is possible with CSS however I remember bumping into an instance where the parents width and height had to exactly match the width and height of it's children. This was a problem for me as I wanted the whole website to take up the whole of the browser window.

After my recent success in discovering how to apply a width and height to an element I thought I might be ready to give this a go. This project will be more JavaScript intensive as I hope to also use the button blur technique alongside the parallel scrolling idea...

Wish me luck!

### Resources

- horizontal scrolling CSS tricks <https://css-tricks.com/pure-css-horizontal-scrolling/>
- horizontal scrolling hubspot <https://blog.hubspot.com/website/horizontal-scrolling>
- digital ocean <https://www.digitalocean.com/community/tutorials/implementing-a-scroll-based-animation-with-javascript>
- mdn client width <https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth>
- mdn resize observer <https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver>

### Explorations

#### Attempt 1

`

.wrapper {
    transform: rotate(90deg);
    overflow-y: scroll;
}

.item {
    transform: rotate(-90deg);
}

`

Problem with this is that the size of the .items seem to be getting cut by the wrapper element. Even though both wrapper element and child divs width match the child divs are not taking up their full space.

When you apply flex with direction row. You can see the children as one column. You can read the text for each however the first 5 items are cut.

#### Attempt 2

`

body {
    overflow-y: hidden;
}

.wrapper {
    background-color: beige;
    overflow-y: hidden;
    overflow-x: scroll;
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
}

.item {
    background-color: lightskyblue;
    outline: 2px solid black;
    width: 100vw;
    height: 100%;
    flex-shrink: 0;
}

`

In this situation no transform has been used however the width of the container has a higher priority than the width of the individual items. This is possibly due to the way that flex works. It shrinks its items down as much as possible to avoid overflow. Perhaps there's a way to remove this feature? The flex shrink feature worked really well for this. Just apply it to the item.

Last issue with the current design is that it uses a horizontal scroll and not a vertical scroll to go from left to right. Positive parts about the design is that it's is fully responsive due to the measurements of the browser being transferred over to the container and children.

At some point I'd like to build off of this to create the vertical scroll and assign it to the left to right action.

### Adding a button to move to the next picture

Method/to do

- create variable called scrollPoint and set to 0 which tracks how far in pixels the scroll is
