import HolidaysList from "./HolidayList";
import HolidayRequestForm from "./HolidayRequestForm";
import HolidayDonutChart from "./HolidayDonutChart";
import UserProfile from "./UserProfile";
import { Container, Row, Col } from 'react-bootstrap';


function UserPage({currentUser, postRequestForHolidays, openForm, setOpenForm, handleReason, handleStatus}) {

    if (currentUser === null) {
      return null;
    } 

    const totalHolidays = 25;
    const usedHolidays = 6;


    return (
      <Container fluid className="user-page mb-3">
          <Row className="justify-content-center mt-4 mb-4">
              <Col xs={12} md={4} className="profile-column" >
                  <UserProfile currentUser={currentUser} />
             </Col>
              <Col xs={12} md={4} className= "content-column mt-3">
                  <HolidayRequestForm postRequestForHolidays={postRequestForHolidays} currentUser={currentUser} openForm={openForm} setOpenForm={setOpenForm}/>
               </Col>
               <Col xs={12} md={4} className="content-column">
                <HolidayDonutChart totalHolidays={totalHolidays } usedHolidays={usedHolidays} />
             </Col>
          </Row>
          <Row>
          <Col xs={12} md={12} className="content-column mt-3">
                  <HolidaysList currentUser={currentUser} handleReason={handleReason} handleStatus={handleStatus}/>
              </Col>
          </Row>
      </Container>
  );
}
  
  export default UserPage;