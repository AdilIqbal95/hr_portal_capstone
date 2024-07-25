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
    grade: "",
    team: 0
  });

  const handleInputChange = (e) => {
    const propertyName = e.target.name;
    const copiedEmployee = { ...newEmployee };
    copiedEmployee[propertyName] = e.target.value;

    setNewEmployee(copiedEmployee);
  };

  const handleNumInput = (e) => {
    const propertyName = e.target.name;
    const copiedEmployee = { ...newEmployee };
    copiedEmployee[propertyName] = parseInt(e.target.value);

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
      grade: "",
      team: 0
    });
    console.log(newEmployee);
    navigate('/manager-dashboard');
  };

  return (
    <>
      <Container className="employee-form-container">
        {/* <h3>Add Employee</h3> */}
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
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group>
                  <Form.Label>Grade</Form.Label>
                  <Form.Control
                    as="select"
                    name="grade"
                    onChange={handleInputChange}
                  >
                    <option value="">Select</option>
                    <option value="JUNIOR">Junior</option>
                    <option value="MANAGER">Manager</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group>
                  <Form.Label>Team Id</Form.Label>
                  <Form.Control
                    as="select"
                    name="team"
                    onChange={handleNumInput}
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