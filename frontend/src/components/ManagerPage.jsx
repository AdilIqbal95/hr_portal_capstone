import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import EmployeeForm from "./EmployeeForm";
import HolidayApprovalList from "./HolidayApprovalList";
import { FaPlus } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function ManagerPage({ allHolidays, openForm, setOpenForm, postEmployee, employeeName, handleReason, handleStatus}) {
  return (
    <Container expand="sm" className="manager-dashboard py-5">
      <Card className="shadow-sm mb-4">
        <Card.Body className="p-4 text-center">
          <Card.Title className="bg-primary text-white p-3 rounded mb-4">Manager Dashboard</Card.Title>
          <Card.Text className="mb-4">
            Welcome to your dashboard, {employeeName} Here you can manage employee information and approve employees holiday requests.
          </Card.Text>
          <Button
            variant="success"
            className="w-100 mb-4"
            onClick={() => setOpenForm(!openForm)}
          >
            <FaPlus className="me-2" /> Add Employee
          </Button>
          {openForm && (
            <EmployeeForm openForm={openForm} setOpenForm={setOpenForm} postEmployee={postEmployee} />
          )}
        </Card.Body>
      </Card>

      <Card className="shadow-sm">
        <Card.Body className="p-4">
          <Card.Title className="bg-secondary text-white p-3 rounded mb-4">Holiday Approvals</Card.Title>
          <HolidayApprovalList allHolidays={allHolidays} handleReason={handleReason} handleStatus={handleStatus} />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ManagerPage;