import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const HolidaysCalendar = ({ events = [] }) => {
  const transformedEvents = events.map(holiday => ({
    title: `${holiday.employee.firstName}`,
    start: holiday.startDate,
    end: holiday.endDate,
    allDay: true
  }));

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={transformedEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default HolidaysCalendar;