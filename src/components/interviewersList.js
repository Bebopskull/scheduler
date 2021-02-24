import React from "react";

import "components/interviewerList.scss";

// import classNames from "classnames";

import InterviewerListItem from 'components/interviewerListItem.js';



export default function InterviewerList(props){
	const interviewers = props.interviewers;

	
	const interviewerList = interviewers.map( interviewer  => {
		return (<InterviewerListItem
			key={interviewer.id} 
		  name={interviewer.name} 
		  avatar = {interviewer.avatar}
		  selected = { interviewer.id === props.value }
		  setInterviewer={ () => props.setInterviewer(interviewer.id) }
		  defaultValue={interviewer}  
		  />);

	});

	return (<section className="interviewers" >
	  <h4 className="interviewers__header text--light">interviewers</h4>
	  <ul className="interviewers__list">{ interviewerList }</ul>
	</section>)

};

