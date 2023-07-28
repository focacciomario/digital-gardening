---
title: Change the text of a button in React
description: A simple use case of 'useState' function in React
date: 2023-02-01
showSidebar: true
tag: react
--- 
# Changes of variables into React

By default, React doesn't care about changes of variables inside of components. It doesn't re-evaluate the component's JSX markup. 
The **`State`** is data managed by React, where changes of data do force React to re-evaluate (or "re-render") only the component where data has changed. 
> Child components of a main component where state are changed are also re-evaluated
## Making Apps interactive & reactive
`useState` function is useful when you want to render a dynamic component insted of updating all the page content.

### Code example
Create a new App.jsx (or .tsx if you're using #NextJS with #TypeScript)  

```JSX
import { useState } from "react";

export default function Projects() {
  const [buttonText, setButtonText] = useState(`click`);

    function handleClick() {
        if (buttonText != `click`){
        setButtonText('Clicked Button!');
        }
        else {
           e.preventDefault();
           console.log('The button was already clicked!');
        }
    }

  return (
    <button onClick={handleClick}>

          {buttonText}
    
    </button>
  )
}
```

>     We set the onClick prop on the button element, so every time the button is clicked, the handleClick function gets invoked.


