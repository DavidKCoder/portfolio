import React from "react";
import { Button } from "rsuite";
import FormLayout from "./Formlayout";
import PhoneIcon from '@rsuite/icons/legacy/Phone';

const Contact = () => {
  return (
    <div id="contact" className="contact-wrapper">
      <h2 className="contact-heading">{`< contact me />`}</h2>
      <p className="contact-sub-heading">
        I’m currently available for work.
      </p>
      <Button appearance="ghost" aria-readonly={true}>send me a message</Button>
      <p className="contact-phone">
        <span>Or, You can call me:</span>
        <br/>
        <a href="tel:+374(55)753272"> <PhoneIcon/>+374(55)753272</a>
      </p>
      <FormLayout/>
    </div>
  )
}

export default Contact;