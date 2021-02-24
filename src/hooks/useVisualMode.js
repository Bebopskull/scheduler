import {useState} from 'react'

export default function useVisualMode (initial){
	
	// const mode = history [history.length-1];
	///history state
	const [history, setHistory] = useState([initial]); 

	const transition = (newMode, replace = false)=>{
		if(!replace){
			setHistory(prev => [...prev, newMode]);
			// setMode(prev => newMode); 
		}else{
			setHistory(prev => [...prev.slice(0,-1), newMode]);
		}
	};

	const back = ()=>{
		if(history.length>1){setHistory(prev => [...prev.slice(0,-1)])};
		// setMode(history[history.length-1]);
	};


  return { mode: history[history.length-1] , transition, back };
};


// module.exports =  useVisualMode ;