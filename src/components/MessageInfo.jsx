import React from "react";
import { Message } from 'rsuite';

const MessageInfo = ({ type }) => {
  return (
    <Message full showIcon type={type} closable bordered>
      <strong>{type}!</strong> Your message has been sent to me..
    </Message>
  )
}

export default MessageInfo;