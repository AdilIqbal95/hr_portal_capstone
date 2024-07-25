import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { Form, Button, Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function LoginPage({postLoginEmail}) {

    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleTextValueChange = (e)=> {
        const emailInput = e.target.value;
        setEmail(emailInput);
    }

      const handleSubmit = (e) => {
        e.preventDefault();
        postLoginEmail(email)

        navigate('/user-dashboard')
      }



      return (
        <>
     <video autoplay=" true"  muted loop id="myVideo">
      <source src="src/assets/ba4a5baff2fe4fa4bab966e1f5142502.mp4" type="video/mp4" /> 
    </video>
        <div className="login-background ">
        <Container >
          <Card.Title className="">
              <h1>Welcome To Rainforest Retail HR Portal!</h1>
                 <Form onSubmit={handleSubmit} className="mt-3">
                  <Form.Control type="email" placeholder="Enter Email" name="email" onChange={handleTextValueChange} />
                <Button className="mt-3" type="submit">Submit</Button>
              </Form>
              </Card.Title>
        </Container>
        </div>
        </>
      );
    };
  
  export default LoginPage;