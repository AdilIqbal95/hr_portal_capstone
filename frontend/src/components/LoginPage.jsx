import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { Form, Button, Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';




function LoginPage({setCurrentUser, postLoginEmail}) {

    const [email, setEmail] = useState("");
    const navigate = useNavigate();




    const handleTextValueChange = (e)=> {
        const emailInput = e.target.value;
        setEmail(emailInput);
    }

      // function for 



      const handleSubmit = (e) => {
        e.preventDefault();
        postLoginEmail(email)
        // update db email column in db to be unique (research for spring)

        navigate('/user-dashboard')
        // if junior (dashboard and holiday) if manager (display all pages)
        // 
      }



      return (
        <div className="login-background ">
        <Container >
          <Card.Title className="">
              <h1>Welcome To Rainforest!</h1>
                 <Form onSubmit={handleSubmit} className="mt-3">
                  <Form.Control type="email" placeholder="Enter Email" name="email" onChange={handleTextValueChange} />
                <Button className="mt-3" type="submit">Submit</Button>
              </Form>
              </Card.Title>
        </Container>
        </div>
      );
    };
  
  export default LoginPage;