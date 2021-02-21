import React from "react";

import "components/Button.scss";

///importing classnames
import classNames from "classnames";



export default function Button(props) {

	// ///set a condition that modifies the classlist of the button element in case a 
	// // confirm state is being passed in the props. 
	///using classNames
	const buttonClass = classNames('button', {
		'button--confirm': props.confirm, 'button--danger': props.danger,
	});

	// ///define the class of the button element to make it correspond to the one css document.
	// let buttonClass = "button";	



	return (
    <button
      className={buttonClass}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
