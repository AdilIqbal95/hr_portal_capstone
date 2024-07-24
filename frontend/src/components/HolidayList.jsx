import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FaCalendarAlt, FaTrashAlt, FaEdit } from 'react-icons/fa';


const HolidayList = ({currentUser}) => {

  const mockHolidayList = [
    {
        employeeId: 1,
        startDate: "2024-07-15",
        endDate: "2024-07-27",
        reason: "ANNUAL_LEAVE",
        status: "PENDING"

    },
    {
        employeeId: 2,
        startDate: "2024-09-15",
        endDate: "2024-09-27",
        reason: "PARENTAL_LEAVE",
        status: "APPROVED"
    },
    {
        employeeId: 3,
        startDate: "2024-11-15",
        endDate: "2024-11-27",
        reason: "SICK_LEAVE",
        status: "REJECTED"
    }
]


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



const mappedHolidayList = currentUser.holidays.map((holiday) => {
    return (
      <Col xs={12} md={12} lg={12} key={holiday.employeeId} className="holiday-card mt=5">
        <Card className="mb-4 mt=5">
          <Card.Body>
            <Card.Title className="text-success">
              <FaCalendarAlt /> {new Date(holiday.startDate).toLocaleDateString()} - {new Date(holiday.endDate).toLocaleDateString()}
            </Card.Title>
            <Card.Text>
              <strong>Reason:</strong> {handleReason(holiday.reason)}<br />
              <strong>Status:</strong> {handleStatus(holiday.status)}
            </Card.Text>
            <div className="d">
              <Button variant="outline-primary" className="me-2">
                <FaEdit /> Update
              </Button>
              <Button variant="outline-danger">
                <FaTrashAlt /> Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    )
})

return(
  <>
  <h2>My Holiday List!</h2>
   <section>
   {mappedHolidayList}
   </section> 

  </>
)

}
  
  export default HolidayList;