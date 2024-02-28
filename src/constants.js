import React from "react";
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
import settime from "./assets/img/settime.png";
import CheckIcon from "@rsuite/icons/legacy/Check";
import mrbet from "./assets/img/mrbet.png";
import wrazzle from "./assets/img/wrazzle.png";

export const skills = [
  {
    name: 'HTML',
    level: 95,
    info: 'HTML is the standard markup language for creating web pages and web applications. It provides the structure for web content, defining the layout and organization of elements on a page. As a front-end developer, I have a strong understanding of HTML semantics, elements, and attributes, allowing me to create accessible and well-structured web pages.',
    img: html,
    color: 'var(--html)'
  },
  {
    name: 'CSS',
    level: 90,
    info: 'CSS is the styling language used to define the presentation of HTML elements on a web page. With CSS, I can control the appearance, layout, and design of a website, including colors, fonts, spacing, and responsive layouts. I\'m proficient in CSS preprocessors like Sass and familiar with modern CSS frameworks like Bootstrap and Tailwind CSS.',
    img: css,
    color: 'var(--css)'
  },
  {
    name: 'JS',
    level: 90,
    info: 'JavaScript is a versatile programming language commonly used for web development. As a developer, I have extensive experience with JavaScript, including building interactive web applications and dynamic user interfaces. I enjoy exploring new features and frameworks within the JavaScript ecosystem to enhance my skills further.\n',
    img: javaScript,
    color: 'var(--js)'
  },
  {
    name: 'React.Js',
    level: 92,
    info: 'React is a popular JavaScript library for building user interfaces, known for its component-based architecture and declarative approach to building UIs. As a React developer, I leverage React\'s reusable components, state management, and lifecycle methods to create interactive and dynamic web applications. I\'m experienced in React Hooks, Context API, and integrating third-party libraries and APIs with React applications.',
    img: react,
    color: 'var(--react)'
  },
  {
    name: 'Redux',
    level: 90,
    info: 'Redux is a predictable state container for JavaScript applications, commonly used with React for managing application state. With Redux, I can centralize and manage the state of my application in a single store, making it easier to debug, test, and maintain complex state logic. I\'m experienced in defining actions, reducers, and selectors in Redux, as well as integrating Redux with React applications for efficient state management.',
    img: redux,
    color: 'var(--redux)'
  },
  {
    name: 'Next.Js',
    level: 90,
    info: 'Next.js is a popular React framework for building server-side rendered (SSR) and statically generated (SSG) web applications. With Next.js, I can create SEO-friendly, performance-optimized web apps with features like pre-rendering, routing, and API routes out of the box. I\'m proficient in using Next.js for building scalable and production-ready React applications, leveraging its built-in features like automatic code splitting, image optimization, and data fetching.',
    img: nextJs,
    color: 'var(--next)'
  },
  {
    name: 'Node.Js',
    level: 80,
    info: 'Node.js is a server-side JavaScript runtime environment that enables the execution of JavaScript code outside the browser. With Node.js, I can build scalable and high-performance server-side applications, APIs, and microservices. I\'m proficient in using Node.js with frameworks like Express.js for routing, middleware, and handling HTTP requests, as well as working with databases like MongoDB and MySQL.',
    img: nodeJS,
    color: 'var(--node)'
  },
  {
    name: 'React Native',
    level: 70,
    info: 'React Native is a framework for building native mobile applications using JavaScript and React. It allows developers to create cross-platform mobile apps with a single codebase, targeting both iOS and Android platforms. As a React Native developer, I leverage the power of React\'s component-based architecture to build intuitive and responsive mobile user interfaces.',
    img: react,
    color: 'var(--react)'
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

const listItems = [
  { title: 'No credit card needed' },
  { title: 'Free forever' },
  { title: 'Time and Resource Savings' },
  { title: '24/7 Availability' },
  { title: 'Schedule online' },
];

export const projectInfo = {
  settime: {
    title: 'Set Time',
    img: settime,
    description:
      <>
        <h2>Appointment Scheduler for Service Providers</h2>
        <p>
          Multifunctional online appointment scheduling software is a powerful tool created to simplify the process
          of booking appointments and managing customers schedules. The best appointment scheduling software offers
          a convenient and efficient way for businesses and professionals to connect with their clients and
          customers.
        </p>
        <br/>
        {listItems.map((list, index) => (
          <p key={`${index}-${list.title}`}><CheckIcon/> {list.title}</p>
        ))}
        <br/>
        <p>
          All about how appointment scheduling software can make your business better, grow & manage it in one
          easy-to-use and powerful user interface. Benefits of using an appointment scheduler app is to manage your
          appointments and streamline your booking schedule
        </p>
      </>
  },
  mrbet: {
    title: 'MrBet',
    img: mrbet,
    description:
      <>
        <h2>Introduction</h2>
        <p>
          "MrBet" is a comprehensive website offering forecasts and insights into horse racing, sports, and other
          related events. With a user-friendly interface, MrBet provides accurate predictions, analysis, and tips to
          help users make informed decisions in their betting endeavors. From horse racing to various sports events,
          MrBet covers a wide range of competitions, catering to enthusiasts and professionals alike. Whether users
          are looking for upcoming race schedules, odds comparison, or expert opinions, MrBet delivers valuable
          information to enhance their betting experience and maximize their chances of success.
        </p>
      </>
  },
  wrazzle: {
    title: 'Wrazzle',
    img: wrazzle,
    description:
      <>
        <h2>Qualify for The Affordable Connectivity Program</h2>
        <p>
          The Affordable Connectivity Program (ACP) is a government initiative aimed at providing affordable internet
          access to low-income households in the United States. The program is designed to bridge the digital divide,
          which refers to the gap between those who have access to the internet and those who do not, often due to
          socioeconomic factors.
        </p>
        <br/>
        <p>
          Wrazzle is an innovative platform designed to provide affordable connectivity solutions to
          individuals and
          communities worldwide. With a focus on bridging the digital divide, Wrazzle offers a range of services and
          initiatives aimed at making internet access more accessible and affordable for all. Whether it's through
          partnerships with telecommunications providers, community-driven projects, or innovative technology solutions,
          Wrazzle strives to empower individuals and communities with the connectivity they need to thrive in today's
          digital age. By offering affordable internet packages, promoting digital literacy, and supporting
          infrastructure development, Wrazzle is committed to creating a more connected and inclusive world for
          everyone.
        </p>
      </>
  },
}