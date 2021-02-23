import { useState, useEffect } from 'react';
import axios from "axios";
import { getAppointmentsForDay } from '../../src/components/helpers/selectors';



export default function useApplicationData() {

	
	Axios.put(`api/appointments/${id}`, setState({...state, appointments}))
    .then(res => {
        console.log(res.status);
        // setState({...state, appointmens: res.appointments});
      })
    .catch(err => console.log('error', err))
}