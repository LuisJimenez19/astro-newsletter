# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Newsletter sign-up form with success message solution](#frontend-mentor---newsletter-sign-up-form-with-success-message-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
    - [Built with](#built-with)
  - [What I learned](#what-i-learned)
    - [Astro syntax](#astro-syntax)
    - [custom tailwindcss](#custom-tailwindcss)
  - [Author](#author)



## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot
- **Desktop**
![](./design/desktop-design.jpg)  
- **Mobile**  
![](./design/mobile-design.jpg)  

- **States**  
![](./design/error-states.jpg)    
![](./design/active-states.jpg)     



### Links

- Solution URL: [Source](https://github.com/LuisJimenez19/astro-newsletter)
- Live Site URL: [Netlify](https://astro-newsletter.netlify.app/)


### Built with

- Semantic HTML5 markup
- CSS custom and tailwindCSS
- Flexbox
- Mobile-first workflow
- [Astro](https://astro.build/) - Framework SSG
- [tailwindCSS](https://tailwindcss.com/) - For styles


## What I learned
### Astro syntax
```astro
---
const { title = "astro" } = Astro.props;
import Attributtion from "../components/Attribution.astro";
import favicon from "/favicon.svg";
---
```
> Index.astro 
```astro
---
import Layout from "../layouts/Layout.astro";

import checkList from "../assets/images/icon-list.svg";
import Button from "../components/Button.astro";
---
```
### custom tailwindcss
```css
theme: {
    extend: {
      colors: {
        tomato: "hsl(4, 100%, 67%)",
        grey: "hsl(231, 7%, 60%)",
        "dark-slate-grey": "hsl(234, 29%, 20%)",
        "charcoal-grey": "hsl(235, 18%, 26%)",
        "gradient-rose":"#ff5478",
        "gradient-rose-opacity":"#ff547936"
      },
      fontFamily: {
        robotoBold: ["roboto-bold", "serif", "arial"],
        robotoRegular: ["roboto-regular", "serif", "arial"],
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "scale(.1)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "up-to-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-150%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "down-to-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(150%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in": "fade-in .3s backwards",
        "up-to-down": "up-to-down .3s backwards",
        "down-to-up": "down-to-up .3s backwards",
      },
    },
  },
```


## Author

- Website - [desafion frontend mentor](https://luisjimenez19.github.io/desafios-frontend-mentor/)
- Frontend Mentor - [@Luisjimenez19](https://www.frontendmentor.io/profile/LuisJimenez19)


