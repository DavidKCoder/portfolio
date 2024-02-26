import html from "./assets/logos/html.png";
import css from "./assets/logos/CSS3.png";
import javaScript from "./assets/logos/javascript.png";
import react from "./assets/logos/react.png";
import redux from "./assets/logos/redux.png";
import nextJs from "./assets/logos/nextjs.png";
import nodeJS from "./assets/logos/nodejs.png";
import linkedinIcon from './assets/icons/linkedin.png';
import instagramIcon from './assets/icons/instagram.png';
import githubIcon from './assets/icons/github.png';

export const skills = [
  {
    name: 'HTML',
    level: '98%',
    info: 'HTML is the standard markup language for creating web pages and web applications. It provides the structure for web content, defining the layout and organization of elements on a page. As a front-end developer, I have a strong understanding of HTML semantics, elements, and attributes, allowing me to create accessible and well-structured web pages.',
    img: html
  },
  {
    name: 'CSS',
    level: '96%',
    info: 'CSS is the styling language used to define the presentation of HTML elements on a web page. With CSS, I can control the appearance, layout, and design of a website, including colors, fonts, spacing, and responsive layouts. I\'m proficient in CSS preprocessors like Sass and familiar with modern CSS frameworks like Bootstrap and Tailwind CSS.',
    img: css
  },
  {
    name: 'JS',
    level: '95%',
    info: '  JavaScript is a versatile programming language commonly used for web development. As a developer, I have extensive experience with JavaScript, including building interactive web applications and dynamic user interfaces. I enjoy exploring new features and frameworks within the JavaScript ecosystem to enhance my skills further.\n',
    img: javaScript
  },
  {
    name: 'React.Js',
    level: '98%',
    info: 'React is a popular JavaScript library for building user interfaces, known for its component-based architecture and declarative approach to building UIs. As a React developer, I leverage React\'s reusable components, state management, and lifecycle methods to create interactive and dynamic web applications. I\'m experienced in React Hooks, Context API, and integrating third-party libraries and APIs with React applications.',
    img: react
  },
  {
    name: 'Redux',
    level: '96%',
    info: 'Redux is a predictable state container for JavaScript applications, commonly used with React for managing application state. With Redux, I can centralize and manage the state of my application in a single store, making it easier to debug, test, and maintain complex state logic. I\'m experienced in defining actions, reducers, and selectors in Redux, as well as integrating Redux with React applications for efficient state management.',
    img: redux
  },
  {
    name: 'Next.Js',
    level: '90%',
    info: 'Next.js is a popular React framework for building server-side rendered (SSR) and statically generated (SSG) web applications. With Next.js, I can create SEO-friendly, performance-optimized web apps with features like pre-rendering, routing, and API routes out of the box. I\'m proficient in using Next.js for building scalable and production-ready React applications, leveraging its built-in features like automatic code splitting, image optimization, and data fetching.',
    img: nextJs
  },
  {
    name: 'Node.Js',
    level: '85%',
    info: 'Node.js is a server-side JavaScript runtime environment that enables the execution of JavaScript code outside the browser. With Node.js, I can build scalable and high-performance server-side applications, APIs, and microservices. I\'m proficient in using Node.js with frameworks like Express.js for routing, middleware, and handling HTTP requests, as well as working with databases like MongoDB and MySQL.',
    img: nodeJS
  },
  {
    name: 'React Native',
    level: '70%',
    info: 'React Native is a framework for building native mobile applications using JavaScript and React. It allows developers to create cross-platform mobile apps with a single codebase, targeting both iOS and Android platforms. As a React Native developer, I leverage the power of React\'s component-based architecture to build intuitive and responsive mobile user interfaces.',
    img: react
  },
]

export const social = [
  {
    eventKey: 3,
    name: 'LinkedIn',
    icon: linkedinIcon,
    link: 'https://www.linkedin.com/in/david-karapetyan1/'
  },
  {
    eventKey: 4,
    name: 'Instagram',
    icon: instagramIcon,
    link: 'https://www.instagram.com/david_dk000/'
  },
  {
    eventKey: 5,
    name: 'GitHub',
    icon: githubIcon,
    link: 'https://github.com/DavidKCoder'
  },
]