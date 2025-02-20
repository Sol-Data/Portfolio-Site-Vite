# Create Portfolio Site Project

This portfolio project is an introduction to creating a single website using multiple frameworks.
Web Developers often work with a variety of frameworks.
In this course, you will learn how to apply different frameworks, 
and analyze the strengths and weaknesses of each framework.

1. Create a site using [vite](https://github.com/Sol-Data/Portfolio-Site-Vite). 
2. Create a site using [react.js](https://github.com/Sol-Data/Portfolio-Site-React). 
3. create a site using [vue.js](https://github.com/Sol-Data/Portfolio-Site-Vue).
4. Create a site using [next.js](https://github.com/Sol-Data/Portfolio-Site-Next).

In this project, you'll create four iterations of a portfolio concept site and learn how to use JavaScript frameworks to create sites efficiently.

## View the finished product 
Preview :

## Use Stack

- Use vite (https://vite.dev/) to bundle and manage sites.
- Use gsap (https://greensock.com/gsap) to give parallax effects.
- Implement smooth effects with lenis (https://lenis.studiofreight.com/).
- Deploy the site with github pages (https://pages.github.com/).
- Manage files using git (https://github.com/).
- Design the basic layout of a website based on HTML and CSS, and work in compliance with web standards and web accessibility. [Accessible Rich Internet Applications (ARIA)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)

## Run the Project
- Install vite. `npm create vite@latest`
- Install gsap. `npm install gsap`
- Install lenis. `npm install @studio-freight/lenis`
- After installing vite, configure it. Create a file called `vite.config.js` and write the following
```javascript
export default {
    root: "src",
    build: {
    outDir: "../dist",
    },
};
