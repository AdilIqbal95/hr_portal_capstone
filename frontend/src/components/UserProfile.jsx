import React from 'react';
import { Card } from 'react-bootstrap';

function UserProfile({currentUser}) {

  return (
<Card className="user-profile">
            <Card.Img variant="top" src="path/to/your/profile-image.jpg" alt="Image of user" />
            <Card.Body>
                <Card.Title className="text-center">{currentUser.firstName} {currentUser.lastName}</Card.Title>
                <Card.Text className="text-center">{currentUser.email}</Card.Text>
                <Card.Text className="text-center"> {currentUser.team.teamName}</Card.Text>
                <Card.Text className="text-center"> {currentUser.location}</Card.Text>
            </Card.Body>
        </Card>
    )
  }
  
  export default UserProfile;