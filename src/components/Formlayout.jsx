"use client"
import React, { forwardRef, useRef, useState } from "react";
import { Form, Input, ButtonToolbar, Button } from 'rsuite';
import SendIcon from '@rsuite/icons/Send';
import emailjs from '@emailjs/browser';
import { SchemaModel, StringType } from "schema-typed";
import MessageInfo from "./MessageInfo";

const model = SchemaModel({
  from_name: StringType().isRequired("Your name is required."),
  from_email: StringType().isRequired("Your email is required."),
  message: StringType().isRequired("Your message is required."),
})

const initFormValue = {
  from_name: '',
  from_email: '',
  message: '',
}

const Textarea = forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref}/>);
Textarea.displayName = 'Textarea';

const FormLayout = () => {
  const formRef = useRef();
  const [ formValue, setFormValue ] = useState(initFormValue);
  const [ status, setStatus ] = useState(null);

  const setDefaultStatus = () => {
    setTimeout(() => {
      setStatus(null)
    }, 5000)
  }

  const sendEmail = async(currentStatus, event) => {
    event.preventDefault();

    currentStatus && await emailjs.sendForm(
      'service_2rsxstt',
      'template_zgi5wl4',
      event.target,
      'yGh6YUHUz1YEnKQYM',
    ).then(
      // response
      () => {
        setStatus('success');
        setDefaultStatus()
      },
      // error
      () => {
        setStatus('error');
        setDefaultStatus()
      },
    );
  };

  const showMessage = status !== null ? <MessageInfo type={status}/> : null

  return (
    <Form
      ref={formRef}
      model={model}
      layout="horizontal"
      formValue={formValue}
      onChange={formValue => setFormValue(formValue)}
      onSubmit={sendEmail}
    >
      <Form.Group controlId="from_name" type='submit' id="form-group">
        <Form.ControlLabel>Your Name*</Form.ControlLabel>
        <Form.Control name="from_name" errorPlacement="bottomStart"/>
        <Form.HelpText tooltip>This field is required.</Form.HelpText>
      </Form.Group>
      <Form.Group controlId="from_email" id="form-group">
        <Form.ControlLabel>Email*</Form.ControlLabel>
        <Form.Control name="from_email" type="email"/>
        <Form.HelpText tooltip>This field is required.</Form.HelpText>
      </Form.Group>
      <Form.Group controlId="textarea" id="form-group">
        <Form.ControlLabel>Your Message</Form.ControlLabel>
        <Form.Control name="message" rows={5} accepter={Textarea}/>
      </Form.Group>
      <Form.Group id="form-group">
        <ButtonToolbar>
          <Button
            type="submit"
            className="animated-btn"
            appearance="primary"
            endIcon={<SendIcon/>}
            disabled={status === 'success'}
          >
            Submit
          </Button>
        </ButtonToolbar>
      </Form.Group>
      {showMessage}
    </Form>
  )
}

export default FormLayout;