import { useState } from "react";
import {useNavigate} from "react-router-dom";



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
      <section>

        <h1>Login to Rainforest HR! </h1>

        <article>
        <form onSubmit={handleSubmit}>
        <label> Email </label>
        <input type="text"  
            id="email"
            placeholder="Enter Email"
            name="email"
            onChange={handleTextValueChange}/>
        <input type="submit"/>
        </form>
        </article>


      </section>
    )
  }
  
  export default LoginPage;