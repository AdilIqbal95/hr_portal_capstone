import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa';

const EmployeeForm = ({ openForm, setOpenForm, postEmployee }) => {
  const navigate = useNavigate();

  const handleToggle = () => setOpenForm(!openForm);
    
  const [newEmployee, setNewEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    totalHoliday: "",
    grade: "",
    team: ""
  });

  const handleInputChange = (e) => {
    const propertyName = e.target.name;
    const value = e.target.value;
    const copiedEmployee = { ...newEmployee };

    setNewEmployee(copiedEmployee);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    postEmployee(newEmployee);
    setNewEmployee({
      firstName: "",
      lastName: "",
      email: "",
      location: "",
      totalHoliday: "",
      grade: "",
      team: ""
    });
    navigate('/manager-dashboard');
  };

  return (
    <>
      <Container className="employee-form-container">
        <h3>Add Employee</h3>
        <div className="dropdown-container">
          <Button
            className="dropdown-button"
            onClick={handleToggle}
          >
            <FaUserPlus className="icon" /> Add Employee
          </Button>
        </div>
        {openForm && (
          <Form onSubmit={handleFormSubmit}>
            <Row>
              <Col xs={12} md={6}>
                <Form.Group>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter First Name"
                    name="firstName"
                    value={newEmployee.firstName}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Last Name"
                    name="lastName"
                    value={newEmployee.lastName}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    value={newEmployee.email}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group>
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Location"
                    name="location"
                    value={newEmployee.location}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group>
                  <Form.Label>Total Holiday</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Total Holiday"
                    name="totalHoliday"
                    value={newEmployee.totalHoliday}
                    onChange={handleInputChange}
                    min = {0}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group>
                  <Form.Label>Grade</Form.Label>
                  <Form.Control
                    as="select"
                    name="grade"
                    value={newEmployee.grade}
                    onChange={handleInputChange}
                  >
                    <option value="">Select</option>
                    <option value="Junior">Junior</option>
                    <option value="Manager">Manager</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group>
                  <Form.Label>Team Id</Form.Label>
                  <Form.Control
                    as="select"
                    name="team"
                    value={newEmployee.team}
                    onChange={handleInputChange}
                  >
                    <option value="">Select</option>
                    <option value="1">Team 1</option>
                    <option value="2">Team 2</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col xs={12} md={12} className="button">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Container>
    </>
  );
};

export default EmployeeForm;