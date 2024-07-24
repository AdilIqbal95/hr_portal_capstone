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
      <Container fluid className="user-page mt-3">
          <Row>
              <Col xs={12} md={4} className="profile-column">
                  <UserProfile currentUser={currentUser} />
              </Col>
              <Col xs={12} md={8} className="content-column">
                  <HolidayRequestForm postRequestForHolidays={postRequestForHolidays} currentUser={currentUser} />
                  <HolidaysList currentUser={currentUser} />
              </Col>
          </Row>
      </Container>
  );
}
  
  export default UserPage;