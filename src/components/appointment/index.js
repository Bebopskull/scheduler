
import React from "react";

import "components/appointment/styles.scss";

import classNames from "classnames";
import Header from "components/appointment/header.js";
import Show from "components/appointment/show.js";
import Empty from "components/appointment/empty.js";
import useVisualMode from 'hooks/useVisualMode.js'

// import Form from "./form.js";
// import Form from "./form.js";
///mode constants:

const EMPTY = "EMPTY";
const SHOW = "SHOW";

export default function Appointment(props) {

	// props.interview ? useVisualMode.setMode(SHOW) : useVisualMode.setMode(EMPTY);

    const { mode, transition, back } = useVisualMode(
        props.interview ? SHOW : EMPTY
    );


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


        {mode === EMPTY && <Empty onAdd={() => console.log("Clicked onAdd")} />}
        {mode === SHOW && (<Show student={props.interview.student} interviewer={props.interview.interviewer}/>)}

    </article>
    );
    
  
}


        // {props.interview ? 
            {/*<Show student={props.interview.student} interviewer={props.interviewer} onClick={props.onEdit}/> : */}
            {/*<Empty/>}*/}
