---
title: Framer-Motion React Menu (Animated sidebar)
description: Full code example of a left-side menu animation with React and Framer Motion (useState, useCycle)
date: 2023-02-23
showToc: true
showSidebar: true
tags:
  - React 
  - FramerMotion
---

This is a full example of a left-side menu with animation using #FramerMotion in #React 

Assuming that our `index.js` file in `src` folder is in a form like that: 

```JSX
import { StrictMode } from "react";

import ReactDOM from "react-dom";

  

import App from "./App";

  

const rootElement = document.getElementById("root");

ReactDOM.render(

<StrictMode>

<App />

</StrictMode>,

rootElement

);
```

It's using `strict mode` [official guide strict mode](https://legacy.reactjs.org/docs/strict-mode.html) only for development purposes

Let's start creating our `App.jsx` file in React `/src` folder

```JSX
import "./styles.css";

import React from "react";

import { AnimatePresence, motion, useCycle } from "framer-motion";

  

const links = [

{ name: "Home", to: "#", id: 1 },

{ name: "About", to: "#", id: 2 },

{ name: "Blog", to: "#", id: 3 },

{ name: "Contact", to: "#", id: 4 }

];

  

const itemVariants = {

closed: {

opacity: 0

},

open: { opacity: 1 }

};

  

const sideVariants = {

closed: {

transition: {

staggerChildren: 0.2,

staggerDirection: -1

}

},

open: {

transition: {

staggerChildren: 0.2,

staggerDirection: 1

}

}

};

  

export default function App() {

const [open, cycleOpen] = useCycle(false, true);

  

return (

<main>

<AnimatePresence>

{open && (

<motion.aside

initial={{ width: 0 }}

animate={{

width: 300

}}

exit={{

width: 0,

transition: { delay: 0.7, duration: 0.3 }

}}

>

<motion.div

className="container"

initial="closed"

animate="open"

exit="closed"

variants={sideVariants}

>

{links.map(({ name, to, id }) => (

<motion.a

key={id}

href={to}

whileHover={{ scale: 1.1 }}

variants={itemVariants}

>

{name}

</motion.a>

))}

</motion.div>

</motion.aside>

)}

</AnimatePresence>

<div className="btn-container">

<button onClick={cycleOpen}>{open ? "Close" : "Open"}</button>

</div>

</main>

);

}
```

Let's give some style to our menu creating a new `styles.css` file in `/src` folder

```CSS

body {

background-color: #1a0554;

font-family: "Roboto", sans-serif;

}

  

main {

display: flex;

}

  

aside {

background-color: #c4a8ff;

width: 18.75rem;

height: 100vh;

}

  

.container {

margin: 4.5rem 1.4rem;

}

  

.btn-container {

position: fixed;

}

  

.container a {

color: #f9fafb;

text-decoration: none;

font-size: 1.75rem;

font-weight: 600;

display: block;

margin: 20px;

}

  

button {

cursor: pointer;

margin: 1.25rem;

border: none;

padding: 0.5rem 1rem;

background-color: #f9fafb;

}

```