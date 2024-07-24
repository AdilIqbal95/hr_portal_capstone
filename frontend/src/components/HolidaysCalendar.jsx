import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment)


const HolidaysCalendar = () => {
    const [events, setEvents] = useState([]);
  
useEffect(() => {
    const fetchHolidays = async () => {
      const response = await fetch('http://localhost:8080/api/holidays');
      if (response.ok) {
        const data = await response.json();
        const holidaysData = data.map(holiday => ({
          title: `${holiday.employee.name}`,
          start: new Date(holiday.startDate),
          end: new Date(holiday.endDate),    
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