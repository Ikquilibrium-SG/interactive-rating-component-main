# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating


### Links

- Solution URL: [GitHub](https://github.com/Ikquilibrium-SG/interactive-rating-component-main.git)
- Live Site URL: [GitHub Page](https://ikquilibrium-sg.github.io/interactive-rating-component-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties


### What I learned
template strings

```js

ratings.forEach(rating => {
    rating.addEventListener('click', () => {
        console.log(rating.textContent)
        ratingText.textContent = `You selected ${rating.textContent} out of 5`
    })
})

submitBtn.addEventListener('click', () => {
    containerDetails.style.display = 'none'
    ratingResult.style.display = 'block'
})

```

## Author

- Frontend Mentor - [@ikquilibrium-SG](https://www.frontendmentor.io/profile/Ikquilibrium-SG)
