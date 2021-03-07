import React from "react";
import DayListItem from "components/dayListItem.js";
import "components/dayListItem.scss";

export default function DayList(props) {

	const days = props.days;
	
	const list = days.map( day  => {
		return (<DayListItem 
			key={day.name}
		  name={day.name} 
		  spots={day.spots} 
		  selected = {day.name===props.day}
		  setDay={props.setDay}  
		  data-testid={day.name}
		  />)
	});
	
  return (
    <ul>{list}</ul>
  );
}