import {useState} from 'react'

export default function useVisualMode (initial){
	
	const [mode, setMode] = useState(initial);
	///history state
	const [history, setHistory] = useState([initial]); 

	const transition = (newMode, replace = false)=>{
		if(!replace){
			history.push(newMode);
			setMode(newMode); 
		}else{
			setMode(newMode);
		}
	};

	const back = ()=>{

		if(history.length>1){history.pop()};
		setMode(history[history.length-1]);
	};


  return { mode, transition, back };
};


// module.exports =  useVisualMode ;