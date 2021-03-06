import React, { useState } from 'react'
import Button from "components/Button";
import InterviewerList from 'components/interviewersList.js';

export default function Form(props) {

  const [name, setName] = useState(props.name );
  const [interviewer, setInterviewer] = useState(props.interviewer );

  function validate() {
    if (name === "") {
      setError("Student name cannot be blank");
      return;
    }

    props.onSave(name, interviewer);
  }

  const [error, setError] = useState("");


  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name='name'
            type="text"
            placeholder="Enter Student Name"
            onChange={event => setName(event.target.value)}
            defaultValue={props.name}
            data-testid="student-name-input"
          />
        </form>
        <section className="appointment__validation">{error}</section>
        <InterviewerList interviewers={props.interviewers} value={interviewer} setInterviewer={setInterviewer} />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={ props.onCancel }>Cancel</Button>
          <Button confirm onClick={ () => props.onSave(name, interviewer)}>Save</Button>
        </section>
      </section>
    </main>
  )};