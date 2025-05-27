# Er Was Eens 🐉🧚🏽🐲🧌

One-page scrolling experience based on the classic fairytale “Little Red Riding Hood”, combining interactive storytelling, animations, and sound. Built with React, React Router, Framer Motion, and custom CSS for parallax effects and dynamic UI. Includes a portal page linking to all class projects.

> [Live,Sophia](https://ehb-mct.github.io/cp-frontend-SophiaRahmoun/fairytale) >[Repository,Sophia](https://github.com/EHB-MCT/cp-frontend-SophiaRahmoun) >[Demo](https://youtu.be/L_6V4UuQLTU)

## Getting started 💃

1. git clone https://github.com/EHB-MCT/cp-frontend-SophiaRahmoun
2. cd cp-frontend-SophiaRahmoun
3. npm install
4. npm run dev
   > ‼️ This project uses Vite + React.
   > After installing the dependencies, run npm run dev and open http://localhost:5173 in your browser.

## Used Sources 🗃️

- [List-style](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style) used in the Projects overview to style student name's list
- [Carousel] (https://react-bootstrap.netlify.app/docs/components/carousel/) Used in StoryList.jsx to cycle through random featured stories on the homepage
- [Drop Down Button](https://react-bootstrap.netlify.app/docs/components/dropdowns/)used to display filter options for genres in navigation
- [Uploading images in Cloudinary](https://cloudinary.com/documentation/upload_images) Used to upload images for them to be used in API externally
- [React Router](https://www.w3schools.com/react/react_router.asp) Used to handle page navigation between Home, Sprookjes, & Fairytale using BrowserRouter, Routes, and Link.
- [Text Decoration](https://www.w3schools.com/css/css_link.asp) used to remove default link underline & apply custom hover effects
- [Adobe Firefly] used for generating images, elements used in the story
- [ChatGPT](https://chatgpt.com/share/682f106b-b8c8-8006-aab9-813a511ebfcd) used for generating images, elements
- [ChatGPT](https://chatgpt.com/share/6834fab7-d3bc-8006-8049-75c453a9b186) Image suggestions
- [ChatGPT](https://chatgpt.com/share/682f106b-bbc0-8006-97fb-b4bdc39c26a7) used for images
- [line spacing](https://www.shecodes.io/athena/51992-how-to-change-line-spacing-in-css#:~:text=To%20change%20the%20line%20spacing,decrease%20the%20space%20between%20lines.) applied for readability with longer text blocks
- [Hooks in React](https://www.w3schools.com/react/react_hooks.asp)General reference on useState, useEffect, and useRef for controlling component state and side effects.
- [UseEffect](https://react.dev/reference/react/useEffect) Used extensively in FairyTale.jsx to handle animations, scroll behavior, and audio events.
- [onScroll un React](https://stackoverflow.com/questions/29725828/update-style-of-a-component-onscroll-in-react-js) helpfful for implementing custom scroll behavior and transitions across scenes in the Fairytale view.
- [React Refresh Page Not Found](https://www.youtube.com/watch?v=fuGu-Ponjf8&ab_channel=Emmi)Solved the 404 error issue on refresh in GitHub Pages using HashRouter or custom config
- [Remove default link color in CSS](https://stackoverflow.com/questions/6722467/how-do-i-remove-the-default-link-color-of-the-html-hyperlink-a-tag) used in index.css
- [UseRef Hook](https://www.w3schools.com/react/react_useref.asp)Used to reference DOM elements like images and audio for scroll interactions and animation triggers.
- [Recat Icons](https://react-icons.github.io/react-icons/) used to implement search icon in SearchFilter component
- [Using Sound](https://www.joshwcomeau.com/react/announcing-use-sound-react-hook/) integrate knocking sound when interacting with door
- [Framer Motion](https://www.npmjs.com/package/framer-motion) used to animate image transitions and text appearance in FairyTale.jsx for smoother storytelling.
- [ChatGPT](https://chatgpt.com/share/6834fb86-1638-8006-82ab-c39cfd8c5cae) used to solve errors, small code snippets, help structuring support for pages
