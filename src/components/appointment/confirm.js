import React from "react";

import classNames from "classnames";

import Button from "components/Button.js";


export default function Show(props) {

  // const appointmentClass = classNames('appointment__time');
  
  return (
    <main className="appointment__card appointment__card--confirm">
      <h1 className="text--semi-bold">Delete the appointment?</h1>
      <section className="appointment__actions">
        <Button danger onClick={props.onCancel} >Cancel</Button>
        <Button danger onClick={props.onConfirm} >Confirm</Button>
      </section>
    </main>
  )};

