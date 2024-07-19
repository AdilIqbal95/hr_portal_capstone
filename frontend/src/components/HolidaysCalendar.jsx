import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment)



const HolidaysCalendar = () => {

    const events = [{
        title: "event1",
        allDay: true,
        start: new Date(2024, 8, 8),
        end: new Date(2024, 8, 16)
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