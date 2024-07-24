import React from 'react';
import { Form, Button, Container, Row, Col, Dropdown, DropdownButton  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const EmployeeForm = ({openForm}, {setOpenForm}) => {
    const handleToggle = () => setOpenForm(!openForm);
    return(
        <>
        <Container className="employee-form">
            <h3>Add Employee</h3>
        {/* <DropdownButton
            id="dropdown-basic-button"
            title="Add Employee"
            onClick={handleToggle} > */}
            {/* {openForm && ( */}
            <Form>
            <Row>
                <Col xs={12} md={6}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name"  name="last-name" />
                </Col>
                <Col xs={12} md={6}>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" name="last-name" />
                </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" name="email" />
                </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                <Form.Group>
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Enter Location" name="location" />
                </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                <Form.Group>
                    <Form.Label>Total Holiday</Form.Label>
                    <Form.Control type="number" placeholder="Enter Total Holiday" name="total-holiday" />
                </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                <Form.Group>
                    <Form.Label>Grade</Form.Label>
                    <Form.Control as="select" defaultValue="" aria-label='grade'>
                        <option value="">Select</option>
                        <option value="Junior" aria-label='Junior'>Junior</option>
                        <option value="Manager" aria-label='Manager'>Manager</option>
                    </Form.Control>
                </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                <Form.Group>
                    <Form.Label>Team Id</Form.Label>
                    <Form.Control as="select" defaultValue="" aria-label='team-id'>
                        <option value="">Select</option>
                        <option value="1">Team 1</option>
                        <option value="2">Team 2</option>
                    </Form.Control>
                </Form.Group>
                </Col>
                <Col xs={12} md={12} className="button">
                <Button variant="primary" type="submit" id="employee-form-submit" name="employee-form-submit">
                    Submit
                </Button>
                </Col>
            </Row>
            </Form>
              {/* )}
            </DropdownButton> */}
            </Container>
            </>
  );
}
export default EmployeeForm;