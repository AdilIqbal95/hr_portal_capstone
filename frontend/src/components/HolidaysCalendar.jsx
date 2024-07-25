import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";



const HolidaysCalendar = () => {
  
  const localizer = momentLocalizer(moment)
  
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchHolidays = async () => {
      const response = await fetch('http://localhost:8080/holidays');
      if (response.ok) {
        const data = await response.json();
        const holidaysData = data.map(holiday => ({
          title: `${holiday.employee.firstName} ${holiday.employee.lastName}`,
          start: holiday.startDate,
          end: holiday.endDate,    
          allDay: true
        }));
        setEvents(holidaysData);
      }
    };
  
      fetchHolidays();
  }, []);

    
  return(
  <>
      <div className="calendar-container">
          <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          />
      </div>
  </>

  )
}

export default HolidaysCalendar;