import HolidaysList from "./HolidayList";
import HolidayRequestForm from "./HolidayRequestForm";
import UserProfile from "./UserProfile";
import { Container, Row, Col } from 'react-bootstrap';


function UserPage({currentUser, postRequestForHolidays, allEmployees}) {

    if (currentUser === null) {
      return null;
    } 
    // if (currentUser == {}) {
    //   return <h1>Hi</h1>;
    // } 


    return (
      <Container fluid className="user-page mb-3">
          <Row className="justify-content-center mt-4 mb-4">
              <Col xs={12} md={6} className="profile-column" >
                  <UserProfile currentUser={currentUser} />
              </Col>
              <Col xs={12} md={6} className="content-column mt-3">
                  <HolidayRequestForm postRequestForHolidays={postRequestForHolidays} currentUser={currentUser} />
               </Col>
          </Row>
          <Row>
          <Col xs={12} md={12} className="content-column mt-3">
                  <HolidaysList currentUser={currentUser} />
              </Col>
          </Row>
      </Container>
  );
}
  
  export default UserPage;