


////function to get appointments for a specific day:
	const getAppointmentsForDay = function(state, day){
    const [filteredDays] = state.days.filter( jour => jour.name === day);
    
    let dayApps;

    if(filteredDays){ dayApps = filteredDays.appointments}else{return []};

    const apps = dayApps.map( appId => state.appointments[appId])
    return apps;

  };


  const getInterview = (state, interview) => {
  	
  	if(!interview || !interview.interviewer){
  		return null
  	}

  	const interviewer = state.interviewers[interview.interviewer];

  	return {...interview, interviewer}

 
  };

export default {getAppointmentsForDay, getInterview}