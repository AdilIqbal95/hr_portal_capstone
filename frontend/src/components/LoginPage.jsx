import { useState } from "react";



function LoginPage() {

    const [email, setEmail] = useState("");



    const handleTextValueChange = (e)=> {
        const emailInput = e.target.value;
        setEmail(emailInput);
    }

      // function for 



      const handleSubmit = (e) => {
        e.preventDefault();
        // compare input email to all employee emails 
        // if does not exsit error (do not navigate to different page)
        // otherwise navigate to that user dashboard
        // set current user to the inputted email (matching)
        // if junior (dashboard and holiday) if manager (display all pages)
        // 
        
      }



    return (
      <section>

        <h1>Login to Rainforest HR! </h1>

        <article>
        <form action="">
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