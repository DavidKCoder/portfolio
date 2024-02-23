import React, { useContext, useEffect } from "react";
import { Message } from 'rsuite';
import ToasterContext from "../context/toaster-context";

const MessageInfo = ({ type }) => {
  const { toaster } = useContext(ToasterContext);

  const message = (
    <Message showIcon type={type} closable bordered>
      <strong>{type}!</strong> The message appears on the.
    </Message>
  );

  useEffect(() => {
    toaster.push(message, { placement: 'bottomCenter', duration: 5000 })
  }, [ type ])

}

export default MessageInfo;