import React from 'react';
import HolidaysCalendar from './HolidaysCalendar';



function HolidaysPage({allHolidays}) {

    return (
      <>
       <h1>Holidays Page</h1>
       <HolidaysCalendar events={allHolidays} />
      </>
    )
  }
  
  export default HolidaysPage;

