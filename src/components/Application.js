
import React from "react";
import "components/Application.scss";
import "index.scss";
import DayList from 'components/dayList.js'
import "components/dayListItem.scss";
import  Appointment  from "components/appointment/index.js";
import { getAppointmentsForDay, getInterview, getInterviewersForDay} from 'helpers/selectors.js'
import  useApplicationData  from 'hooks/useApplicationData.js'

export default function Application(props) {

  const {
    state,
    setDay,
    bookInterview,
    cancelInterview,
  } = useApplicationData();
  
  let dailyAppointments = getAppointmentsForDay(state, state.day);

  const apps = dailyAppointments.map(appObj => {

    let interview = getInterview(state, appObj.interview);
    
    return(
      <Appointment
        key={appObj.id}
        id={appObj.id}
        time={appObj.time}
        interview={interview}
        interviewers={getInterviewersForDay(state, state.day)}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
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

        <ul>{ apps } <Appointment key="last" id='last' time="5pm" /> </ul>
          
      </section>
    </main>
  );
};
