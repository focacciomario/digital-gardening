---
title: Install framerMotion in React
description: npm install framer-motion
date: 2023-07-28
showToc: true
showSidebar: true
tags:
  - React
  - FramerMotion
---

# An open source motion library for React, made by Framer.

Framer Motion is an open source, production-ready library for #React that’s designed for all creative developers.

It looks like this:

```js
<motion.div animate={{ x: 0 }} />
```

It does all this:

- [Springs](https://www.framer.com/docs/transition/#spring?utm_source=motion-readme-docs)
- [Keyframes](https://www.framer.com/docs/animation/##keyframes?utm_source=motion-readme-docs)
- [Layout animations](https://www.framer.com/docs/layout-animations/?utm_source=motion-readme-docs)
- [Shared layout animations](https://www.framer.com/docs/layout-animations/#shared-layout-animations?utm_source=motion-readme-docs)
- [Gestures (drag/tap/hover)](https://www.framer.com/docs/gestures/?utm_source=motion-readme-docs)
- [Scroll animations](https://www.framer.com/docs/scroll-animations?utm_source=motion-readme-docs)
- [SVG paths](https://www.framer.com/docs/component/###svg-line-drawing?utm_source=motion-readme-docs)
- [Exit animations](https://www.framer.com/docs/animate-presence/?utm_source=motion-readme-docs)
- Server-side rendering
- [Hardware-accelerated animations](https://www.framer.com/docs/animation/#hardware-accelerated-animations?utm_source=motion-readme-docs)
- [Orchestrate animations across components](https://www.framer.com/docs/animation/##orchestration?utm_source=motion-readme-docs)
- [CSS variables](https://www.framer.com/docs/component/##css-variables?utm_source=motion-readme-docs)

...and a whole lot more.

## [Get started](https://www.npmjs.com/package/framer-motion#get-started)

### [🐇 Quick start](https://www.npmjs.com/package/framer-motion#-quick-start)

Install `framer-motion` with via your package manager:

```
npm install framer-motion
```

Then import the `motion` component:

```js
import { motion } from "framer-motion"

export const MyComponent = ({ isVisible }) => (
    <motion.div animate={{ opacity: isVisible ? 1 : 0 }} />
)
```

**Menu example in React**: 
[[Framer-Motion-React-Menu]]

### [📚 Docs](https://www.npmjs.com/package/framer-motion#-docs)

- Check out [our documentation](https://www.framer.com/docs/?utm_source=motion-readme-docs) for guides and a full API reference.
- Or see [our examples](https://www.framer.com/docs/examples/?utm_source=motion-readme-docs) for inspiration.

### [💎 Contribute](https://www.npmjs.com/package/framer-motion#-contribute)

- Want to contribute to Framer Motion? Our [contributing guide](https://github.com/framer/motion/blob/master/CONTRIBUTING.md) has you covered.

### [👩🏻‍⚖️ License](https://www.npmjs.com/package/framer-motion#%EF%B8%8F-license)

- Framer Motion is MIT licensed.

### [✨ Framer](https://www.npmjs.com/package/framer-motion#-framer)

- Design and publish sites that inspire. [Try Framer for free](https://www.framer.com/?utm_source=motion-readme).
