import SearchHolidayApproval from "./SearchHolidayApproval";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaTree, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';


const HolidayApprovalList = ({allHolidays, patchHoliday, setAllHolidays, markPendingToApproved}) => {

   
    
    const navigate = useNavigate (); 
    

  

    const handleApproval = () => {
        patchHoliday(holidayData)
        // patchHoliday(holidayId, {status:"APPROVED"});
        Navigate(`/holidays`)

        }
      
    
      const handleRejection = () => {
        // patchHoliday(holidayId, {status:"REJECTED"});
        deleteHolidayFromManagerPage()
        Navigate(`/holidays`)

        };

        
        const handleButtonClickForMark = () => {
            markPendingToApproved();
        }
    
    const mappedHolidayApprovalList = allHolidays.map((holiday) => {
        return(
            <Col xs={12} md={6} lg={4} key={holiday.employeeId} >
                <Card >
                        <Card.Title><strong> {holiday.employee.firstName} {holiday.employee.lastName}</strong></Card.Title>
                        <Card.Text>
                            <p><strong><FaCalendarAlt /> Start Date: </strong>{holiday.startDate}</p>
                            <p><strong><FaCalendarAlt /> End Date: </strong>{holiday.endDate}</p>
                            <p><strong> Reason: </strong>{holiday.reason}</p>
                            <p><strong> Status: </strong> {holiday.status}</p>
                         </Card.Text>
                         <Button variant="danger" onClick={() => handleRejection(holiday.employeeId)}>
                            <FaTimesCircle className="me-2" />Reject
                        </Button>
                        <Button variant="success"  onClick={() => handleApproval(holiday.employeeId)}>
                            <FaCheckCircle className="me-2" />Approve
                        </Button>
                </Card>
            </Col>
        )
    })


    return(
        <Container className="mt-5">
             <SearchHolidayApproval />
                 {mappedHolidayApprovalList}
        </Container>
    )
}

export default HolidayApprovalList;