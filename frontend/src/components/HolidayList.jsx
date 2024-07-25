import { Card, Col, Row, Container, Button } from 'react-bootstrap';
import { FaCalendarAlt, FaEdit, FaTrashAlt } from 'react-icons/fa';


const HolidayList = ({currentUser}) => {

const handleReason = (reason) => {
  const reasonWithoutUnderscore = reason.split('_').join(' ')

  const reasonWithoutUnderscoreLower = reasonWithoutUnderscore.toLowerCase().split(' ');

  for (let i = 0; i < reasonWithoutUnderscoreLower.length; i++){
    reasonWithoutUnderscoreLower[i] = reasonWithoutUnderscoreLower[i][0].toUpperCase() + reasonWithoutUnderscoreLower[i].substr(1);
  }

    const reasonWithoutUnderscoreStr = reasonWithoutUnderscoreLower.join(' ')
    return reasonWithoutUnderscoreStr;
}


const handleStatus = (status) => {
  const statusLower = status.toLowerCase();
  const finalStatus = statusLower[0].toUpperCase() + statusLower.substr(1);

  return finalStatus;
}


const mappedHolidayList = currentUser.holidays.map((holiday) => (
  <Container>
  <Col xs={12} key= {holiday.employeeId} className="holiday-card mt-5">
    <Card  className="mb-4 card" >
      <Card.Body>
        <Card.Title className = "text-success">
          <FaCalendarAlt /> {new Date(holiday.startDate).toLocaleDateString()} - {new Date(holiday.endDate).toLocaleDateString()}
       </Card.Title>
      <Card.Text>
          <strong>Reason:</strong> {handleReason(holiday.reason) }<br />
          <strong>Status:</strong> {handleStatus(holiday.status)}
       </Card.Text>
        <div className ="d-flex justify-content-between">
          <Button variant="outline-primary" className= "delete-button  me-2">
            <FaEdit /> Update
          </Button>
          <Button variant= "outline-danger">
            <FaTrashAlt /> Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  </Col>
  </Container>
));

return (
  <Container className="holiday-list-container" >
    <Row className= "justify-content-center">
      <Col xs={12} md={8}>
        <div className="holiday-list">
          {mappedHolidayList}
        </div>
      </Col>
    </Row>
  </Container>
);
}

export default HolidayList;