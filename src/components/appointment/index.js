
import React from "react";

import "components/appointment/styles.scss";

import classNames from "classnames";
import Header from "components/appointment/header.js";
import Show from "components/appointment/show.js";
import Empty from "components/appointment/empty.js";
import Form from "components/appointment/form.js";
import Status from "components/appointment/status.js";
import Confirm from "components/appointment/confirm.js";
import useVisualMode from 'hooks/useVisualMode.js'

///mode constants:

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";

export default function Appointment(props) {

	// props.interview ? useVisualMode.setMode(SHOW) : useVisualMode.setMode(EMPTY);
  console.log(props)
    const { mode, transition, back } = useVisualMode(
        props.interview ? SHOW : EMPTY
    );



	const appointmentClass = classNames('appointment__item', {
			'appointment__item--selected': props.selected,
		});

// transition(CREATE)

  function save(name, interviewer) {

    transition(SAVING);

    const interview = {
      student: name,
      interviewer
    };
    // console.log(props.bookInterview(props.id, interview))
    props.bookInterview(props.id, interview)
    .then(() => {
      transition(SHOW)
    })

  }

  function del(id){
    transition(DELETING)
    props.cancelInterview(id)
    .then(() => {
      setTimeout(() => transition(EMPTY),500);
    })
  };

  function confirm(){
    transition(CONFIRM)
  }

  function edit(){
    transition(EDIT)
    // props.editInterview(id)
    // .then(() => {
    //   // setTimeout(() => transition(SHOW),500);
    // })
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
        {mode === EDIT && (<Form name={props.interview.student} interviewers={props.interviewers} interviewer={props.interviewers} onCancel={() => back() } onSave={save}/>)}
        

    </article>
    );
    
  
}


        // {props.interview ? 
            {/*<Show student={props.interview.student} interviewer={props.interviewer} onClick={props.onEdit}/> : */}
            {/*<Empty/>}*/}
