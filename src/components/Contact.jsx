import React from "react";
import { Button } from "rsuite";
import FormLayout from "./Formlayout";

const Contact = () => {
  return (
    <div id="contact" className="contact-wrapper">
      <h2 className="contact-heading">Contact me</h2>
      <p className="contact-sub-heading">
        I’m currently available for work.
      </p>
      <Button appearance="ghost" aria-readonly={true}>send me a message</Button>
      <FormLayout/>
    </div>
  )
}

export default Contact;