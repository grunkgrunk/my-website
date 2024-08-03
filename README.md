# SvelteKit Static Blog Template

A lightweight and customizable template for blogs and portfolio websites, built with SvelteKit.

<p align="center">
    <img src="static/images/site-screenshot.png" alt="Screenshot" />
</p>

It was built with a few goals in mind:

- Responsive design: the website looks and behaves well on screens of all sizes;
- Fast: it only loads what's needed for it to work;
- Adaptive: it supports dark mode from most operating systems by default (desktop and mobile);
- Pretty: have a pleasant design that is both accessible and pleasing to the eye.

I achieved this with the help of SvelteKit. There is almost no JavaScript running, and it actually works with JS disabled! While JS is awesome, it's important to know when it's not needed.

# Demo site

You can see the template live [on the demo site](https://sveltekit-static-blog-template.vercel.app/). Additionally, you can check all components in isolation [on Histoire](https://histoire-sveltekit-static-blog-template.vercel.app/).

# Building & Running Locally

To run it locally, you simply have to run:

```shell
# First, install dependencies
npm install
# Then, run it on dev mode
npm run dev
```

The site should now be available at http://localhost:5173/ on your local machine, and your local machine's IP address on your network—great for testing on mobile OSes.