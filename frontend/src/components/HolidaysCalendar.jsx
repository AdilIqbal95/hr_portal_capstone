import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment)



const HolidaysCalendar = () => {

    const events = [{
        title: "event1",
        allDay: true,
        start: new Date('2024-09-08T00:00:00'),
        end: new Date ('2024-09-16T23:59:59')
    }]
    
    
    return(
    <>
        <div>
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