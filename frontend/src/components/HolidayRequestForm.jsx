import { set } from "date-fns";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function HolidayRequestForm({ postRequestForHolidays, newHolidayRequest, currentUser }) {
    const [employeeId, setEmployeeId] = useState(currentUser.id);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [reason, setReason] = useState('');

    const handleSubmit = (event) => {
      console.log("is the form submitting")
        event.preventDefault();
        const newHolidayRequest = {
            employeeId,
            startDate,
            endDate,
            reason,
        };

        postRequestForHolidays(newHolidayRequest);
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
                            onChange={(date) => setStartDate(date.toISOString().substring(0,16))}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="Select The Start Date"
                        />
                        <label htmlFor="endDate">End Date</label>
                        <DatePicker
                            id="endDate"
                            selected={endDate}
                            onChange={(date) => setEndDate(date.toISOString().substring(0,16))}
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
                            <option value="ANNUAL_LEAVE">Annual Leave</option>
                            <option value="PARENTAL_LEAVE">Parental Leave</option>
                            <option value="SICK_LEAVE">Sick Leave</option>
                            <option value="BEREAVEMENT_LEAVE">Bereavement Leave</option>
                            <option value="OTHER">Other</option>
                        </select>
                    </div>
                    <button id="request" type="submit">Submit</button>
                </form>
            </section>
        </>
    );
}

export default HolidayRequestForm;

