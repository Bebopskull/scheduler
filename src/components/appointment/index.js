
import React from "react";
import "components/appointment/styles.scss";
import classNames from "classnames";
import Header from "components/appointment/header.js";
import Show from "components/appointment/show.js";
import Empty from "components/appointment/empty.js";
import Form from "components/appointment/form.js";
import Status from "components/appointment/status.js";
import Confirm from "components/appointment/confirm.js";
import Error from "components/appointment/error.js";
import useVisualMode from 'hooks/useVisualMode.js';


///mode constants:

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";



export default function Appointment(props) {
  
    const { mode, transition, back } = useVisualMode(
        props.interview ? SHOW : EMPTY
    );

	const appointmentClass = classNames('appointment__item', {
			'appointment__item--selected': props.selected,
		});


  function save(name, interviewer) {
    if(name && interviewer){
      const interview = {
        student: name,
        interviewer
      };

      transition(SAVING);

      props
        .bookInterview(props.id, interview)
        .then(() => transition(SHOW))
        .catch(error => transition(ERROR_SAVE, true));
    }
    return null
  }

  function del(event) {
   transition(DELETING, true);
   props
    .cancelInterview(props.id)

    .then(() => transition(EMPTY))

    .catch((error) => transition(ERROR_DELETE, true));
  }


  function confirm(){
    transition(CONFIRM)
  }

  function edit(){
    transition(EDIT)
  };

  return (

  	props.id ==='last'? <article className={ appointmentClass }>
    	<p>Appointment</p>
    	<Header time ={props.time}/>
    </article> : <article className={ appointmentClass }>
    	<p>Appointment</p>
    	<Header time ={props.time}/>


        {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
        {mode === SHOW && (<Show student={props.interview.student} interviewer={props.interview.interviewer} onEdit={edit} onDelete = {() => confirm() }/>)}
        {mode === CREATE && (<Form interviewers={props.interviewers} onCancel={() => back() } onSave={save}/>)}
        {mode === SAVING && (<Status message='Saving'/>)}
        {mode === DELETING && (<Status message='Deleting'/>)}
        {mode === CONFIRM && (<Confirm onConfirm={() => del(props.id)} onCancel={() => back()}/>)}
        {mode === EDIT && (<Form name={props.interview.student} interviewers={props.interviewers} interviewer={props.interview.interviewer.id} onCancel={() => back() } onSave={save}/>)}
        {mode === ERROR_SAVE && (<Error message='Error' onClose={() => back()} />)}
        {mode === ERROR_DELETE && (<Error message='Error when deleting' onClose={() => back()} />)}
        

    </article>
    );
    
  
}

