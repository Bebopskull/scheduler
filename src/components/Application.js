///states
import React, { useState, useEffect } from "react";
import Axios from "axios";
import "components/Application.scss";
import "index.scss";
import DayList from 'components/dayList.js'
import "components/dayListItem.scss";
import  Appointment  from "components/appointment/index.js";
import { getAppointmentsForDay, getInterview, getInterviewersForDay} from 'helpers/selectors.js'





export default function Application(props) {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  ///Aliasing///

  const setDay = day => setState({...state, day});
  const setDays = jours => setState(prev => ({...prev, days: jours}));
  const setApps = apps => setState({...state, apps});


  

  let dailyAppointments = getAppointmentsForDay(state, state.day);

  useEffect(() => {
    
    const daysURL= `api/days`;
    const appsURL= `api/appointments`;
    const interviewersURL= `api/interviewers`;

    Promise.all([

      Axios.get(daysURL),
      Axios.get(appsURL),
      Axios.get(interviewersURL)
      ]).then((all) => {
        setState(prev => ({...prev, days: all[0].data, appointments:  all[1].data, interviewers: all[2].data}));
        console.log(state.interviewers)
      }
    );

    
  }, [state.day]);


  const apps = dailyAppointments.map(appObj => {

    // const interview = getInterview(state, appObj.interview);
    return(
      <Appointment
        key={appObj.id}
        id={appObj.id}
        time={appObj.time}
        interview={appObj.interview || null}
      />);
    }    
  );






  return (
    <main className="layout">
    <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
           <DayList days={ state.days } day={ state.day } setDay={ jour => setDay(jour)} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
         {/*Replace this with the schedule elements durint the "The Scheduler" activity. */}

        <ul>{ apps } <Appointment key="last" id='last' time="5pm" /> </ul>
          
      </section>
    </main>
  );
};
