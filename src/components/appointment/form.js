import React, { useState } from 'react'

import classNames from "classnames";

import Button from "components/Button";
import DayListItem from 'components/dayListItem.js';
import DayList from "components/dayList.js";
import InterviewerList from 'components/interviewersList.js';
import InterviewerListItem from 'components/interviewerListItem.js';

import Appointment from "components/appointment/index.js";
import Header from "components/appointment/header.js";
import Empty from "components/appointment/empty.js";
import Show from "components/appointment/show.js";
import Confirm from "components/appointment/confirm.js";
import Status from "components/appointment/status.js";
import Error from "components/appointment/error.js";
import  useApplicationData  from 'hooks/useApplicationData.js';

// import { getAppointmentsForDay, getInterview, getInterviewersForDay} from 'helpers/selectors.js'



export default function Form(props) {

  const [name, setName] = useState(props.name );
  const [interviewer, setInterviewer] = useState(props.interviewer );

  const reset = () => {
    setName("");
    setInterviewer( null );
  };

  const cancel= () => {
    const cancel = props.onCancel;
    reset();
    return cancel;

  }


  
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
          />
        </form>
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