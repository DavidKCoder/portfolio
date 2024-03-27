import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import ThemeToggle from "./ThemeToggle";
import BackTop from "./BackTop";
import FooterSection from "./FooterSection";
import Loader from "./Loader";
import { Divider } from "rsuite";
import ScrollContext from "../context/scroll";

export default function Layout({ children }) {
  const { scrollTop } = useContext(ScrollContext);

  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
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
      {scrollTop > 650 && <BackTop/>}
      <Divider className="divider footer"/>
      <FooterSection/>
    </>
  )
}