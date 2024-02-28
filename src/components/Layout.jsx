import React, { useEffect, useState } from "react";
import Header from "./Header";
import ThemeToggle from "./ThemeToggle";
import BackTop from "./BackTop";
import FooterSection from "./FooterSection";
import Loader from "./Loader";
import { Divider } from "rsuite";

export default function Layout({ children }) {
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, []);

  if (loading) {
    return <Loader/>
  }

  return (
    <>
      <Header/>
      <Divider className="divider"/>
      <ThemeToggle/>
      <main>{children}</main>
      <BackTop/>
      <Divider className="divider footer"/>
      <FooterSection/>
    </>
  )
}