import React from 'react';
import { Card, Col, Image, Row, Container} from 'react-bootstrap';

function UserProfile({currentUser}) {

  return (
    <Container>
    <Row className="justify-content-center">
      <Col xs={6} md={6}> 
        <Card className="user-profile p-3 mb-3">
          <Image 
            src= "src/assets/PROFILE-PHOTO-PLACEHOLDER-300x300.webp" 
            roundedCircle 
            className= "profile-image my-3" 
          />
           <Card.Body>
            <Card.Title> {currentUser.firstName} {currentUser.lastName}</Card.Title>
            <Card.Text> {currentUser.email} </Card.Text>
            <Card.Text> {currentUser.team.teamName} </Card.Text>
            <Card.Text> {currentUser.location} </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
    )
  }
  
  export default UserProfile;