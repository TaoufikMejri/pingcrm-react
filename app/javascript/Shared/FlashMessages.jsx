import React from 'react';
import { useState } from 'react';
import SuccessMessage from './Flash/SuccessMessage.jsx';
import AlertMessage from './Flash/AlertMessage.jsx';

export default function FlashMessages({ props }) {
  const [show, setShow] = useState(true);

  const successMessage = show && props?.success;
  const alertMessage = show && (props?.alert || props.errors);

  if (successMessage) {
    return (
      <SuccessMessage message={successMessage} onClick={() => setShow(false)} />
    );
  } else if (alertMessage) {
    return (
      <AlertMessage
        alert={alertMessage || errors}
        onClick={() => setShow(false)}
      />
    );
  }
}
