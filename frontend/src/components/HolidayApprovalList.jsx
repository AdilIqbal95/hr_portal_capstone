import SearchHolidayApproval from "./SearchHolidayApproval";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


const HolidayApprovalList = ({allHolidays, patchHoliday, setAllHolidays, markPendingToApproved}) => {

    // const mockHolidayApprovalList = [
    //     {
    //         employeeId: 1,
    //         startDate: "2024-07-18",
    //         endDate: "2024-07-25",
    //         reason: "ANNUAL_LEAVE",
    //         status: "PENDING"

    //     },
    //     {
    //         employeeId: 2,
    //         startDate: "2024-09-18",
    //         endDate: "2024-09-25",
    //         reason: "ANNUAL_LEAVE",
    //         status: "PENDING"
    //     },
    //     {
    //         employeeId: 3,
    //         startDate: "2024-11-18",
    //         endDate: "2024-11-25",
    //         reason: "ANNUAL_LEAVE",
    //         status: "PENDING"
    //     }
    // ]

   
    
    // const navigate = useNavigate (); 
    

  

    // const handleApproval = () => {
    //     patchHoliday(holidayData)
    //     // patchHoliday(holidayId, {status:"APPROVED"});
    //     Navigate(`/holidays`)

    //     }
      
    
    //   const handleRejection = () => {
    //     // patchHoliday(holidayId, {status:"REJECTED"});
    //     deleteHolidayFromManagerPage()
    //     Navigate(`/holidays`)

    //     };

        
        const handleButtonClickForMark = () => {
            markPendingToApproved();
        }
    
    const mappedHolidayApprovalList = mockHolidayApprovalList.map((holiday) => {
        return(
            <Col xs={12} md={6} key={holiday.employeeId}>
                <Card className="mt-3">
                        <Card.Title>Employee Name: {holiday.employeeId}</Card.Title>
                            <p> {holiday.employeeId}</p>
                            <p> {holiday.startDate}</p>
                            <p> {holiday.endDate}</p>
                            <p> {holiday.reason}</p>
                            <p> {holiday.status}</p>
                        <Button id="approval_button" onClick={handleButtonClickForMark}>Reject</Button>
                        <Button id="reject_button" onClick={handleButtonClickForMark}>Approve</Button>

                </Card>
            </Col>
        )
    })

    return(
        <Container className="mt-5">
            <h1>Holiday Approval List</h1>
             <SearchHolidayApproval />
                 {mappedHolidayApprovalList}
        </Container>
    )
}

export default HolidayApprovalList;