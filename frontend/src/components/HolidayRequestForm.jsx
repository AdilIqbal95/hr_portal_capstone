import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


function HolidayRequestForm() {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [reason, setReason] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <>
    <section>
      <h3>Add Holiday Form</h3>
      <form onSubmit={handleSubmit}>
      <div>
      <label htmlFor="startDate">Start Date</label>
        <DatePicker
          id="startDate"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="Select The Start Date"
        />
       <label htmlFor="endDate">End Date</label>
        <DatePicker
          id="endDate"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="Select The End Date"
        />
        <label htmlFor="reason">Reason</label>
          <select
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              defaultValue=""
          >
           <option value="">Select</option>
           <option value="Annual_leave">Annual Leave</option>
           <option value="Parental_leave">Parental Leave</option>
           <option value="Sick_leave">Sick Leave</option>
           <option value="Bereavement_leave">Bereavement Leave</option>
           <option value="Other">Other</option>
         </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
    
    </>
  )
}

export default HolidayRequestForm;