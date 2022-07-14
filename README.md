# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](/images/Desktop.png)

### Links

- Live Site URL: [Vercel](https://frontend-mentor-advice-generator-app-nine.vercel.app/)

## My process

### Built with

- HTML
- CSS 
- JavaScript (Fetch)
- Flexbox

### What I learned

This is my second challenge and this one helped me to get more practice knowledge about using flexbox. Which is very useful in small cases.

In this challenge i got in trouble trying for figure out how to make the patterns for the dividere go responsive and fit with its container while resizing.

So, a pattern i was foregtting: 

```css
.card {
    ...
    max-width: calc(444px + 1.25rem);
    width: fit-content;
    ...
    margin: auto;
}
.divider > img{
    max-width: 100%;
    width: 100%;
}
```
for the image tag treating it as an image, setting its max width, the width of its container, and then letting it get as wide as it can. Also setting the width for the properly container.

Then, for the mobile version, just adjust that values (without know if exist a simplest way to achieve the responsive design).

This was simple, but the fault of practice made it difficult for me. This is a reminder for know that there are some topics in my head that i've read about, but have not yet capitalized on true knowledge.


### Continued development

-Get more experience using rem units and combining with calculated sizes for get more precise measurements.
-Keep practicing with flexbox.

### Useful resources

- [Picture Tag](https://www.w3schools.com/tags/tag_picture.asp) - This helped me for getting the responsive design for the divider shape.


## Author

- Frontend Mentor - [juandavid015](https://www.frontendmentor.io/profile/juandavid015)

