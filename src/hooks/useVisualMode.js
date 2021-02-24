import {useState} from 'react'

///Hook function to deal witht the visual states of the appointment element
export default function useVisualMode (initial){
	
	///History array to keep tracking of the different states of the appointment element
	const [history, setHistory] = useState([initial]); 
	///Adding new states to the history Array with transition function
	const transition = (newMode, replace = false)=>{
		if(!replace){
			setHistory(prev => [...prev, newMode]);
		}else{
			setHistory(prev => [...prev.slice(0,-1), newMode]);
		}
	};
	////stepping back in the history array, taking out last states
	const back = ()=>{
		if(history.length>1){setHistory(prev => [...prev.slice(0,-1)])};
	};

  return { mode: history[history.length-1] , transition, back };
};


