import React from "react";
import 'rsuite/dist/rsuite-no-reset.min.css';
import Head from "next/head";
import Main from "../components/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>David K.</title>
        <meta name="description" content="David Karapetyan Portfolio."/>
        <meta name="keywords"
              content="portfolio, david, developer, react, js, javascript, ui/ux,
              software engineer, web development, front-end development,
              back-end development, full-stack development, web design,
              HTML, CSS, Node.js, Express.js, MongoDB, SQL, database,
              REST API, GraphQL, responsive design, mobile development,
              React Native, user interface, user experience, SEO,
              performance optimization, website optimization,
              accessibility, Git, version control,software development,
              programming, coding, computer science"/>
        <meta property="og:title" content="David K."/>
        <meta property="og:description" content="David K. portfolio"/>
        <meta property="og:image" content="../assets/img/meta_img.png"/>
        <link rel="icon" href="/public/favicon.ico"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Main/>
    </>
  );
}
