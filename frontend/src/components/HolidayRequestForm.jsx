import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form, Button, Container } from 'react-bootstrap';
import { FaUserPlus } from 'react-icons/fa';



function HolidayRequestForm({ postRequestForHolidays, newHolidayRequest , currentUser, openForm, setOpenForm}) {
    const [employeeId, setEmployeeId] = useState(currentUser.id);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [reason, setReason] = useState('');

    const handleToggle = () => setOpenForm(!openForm);

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
    <Container>
        <div className="dropdown-container">
          <Button
            className="dropdown-button"
            onClick={handleToggle}
          >
            <FaUserPlus className="icon" /> Add Holiday
          </Button>
          </div>
          {openForm && (
                <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="startDate">
                        <Form.Label>Start Date</Form.Label>
                        <DatePicker
                          selected={startDate}
                         onChange={(date) => setStartDate(date)}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="Select The Start Date"
                            className="form-control"
                        />
                    </Form.Group>
                    <Form.Group controlId="endDate">
                        <Form.Label>End Date</Form.Label>
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="Select The End Date"
                            className="form-control"
                        />
                    </Form.Group>
                    <Form.Group controlId="reason">
                        <Form.Label>Reason</Form.Label>
                        <Form.Control
                            as="select"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            
                        >
                      <option value="">Select</option>
                    <option value="ANNUAL_LEAVE">Annual Leave 🌴</option>
                    <option value="PARENTAL_LEAVE">Parental Leave  👶</option>
                    <option value="SICK_LEAVE"> Sick Leave  🤒</option>
                    <option value="BEREAVEMENT_LEAVE">Bereavement Leave  💐</option>
                    <option value="OTHER">Other  🤔</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mt-3">Submit</Button>
                </Form>
                </div>
                )}
    </Container>
);
}

export default HolidayRequestForm;