
import React from "react";

import "components/appointment/styles.scss";

import classNames from "classnames";
import Header from "components/appointment/header.js";
import Show from "components/appointment/show.js";
import Empty from "components/appointment/empty.js";

// import Form from "./form.js";
// import Form from "./form.js";


export default function Appointment(props) {

	

	const appointmentClass = classNames('appointment__item', {
			'appointment__item--selected': props.selected,
		});

	

		
  return (

  	props.id ==='last'? <article className={ appointmentClass }>
    	<p>Appointment</p>
    	<Header time ={props.time}/>
    </article> : <article className={ appointmentClass }>
    	<p>Appointment</p>
    	<Header time ={props.time}/>
    	{props.interview ? 
    		<Show student={props.interview.student} interviewer={props.interviewer} onClick={props.onEdit}/> : 
    		<Empty/>}
    	{/*<show student= {props.student} interviewer={props.interviewer} onClick={props.onClick}/>*/}
    </article>
    );
    
  
}
