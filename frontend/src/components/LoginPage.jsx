import { useState } from "react";
import {useNavigate} from "react-router-dom";



function LoginPage({allEmployees, setCurrentUser}) {

    const [email, setEmail] = useState("");
    const navigate = useNavigate();




    const handleTextValueChange = (e)=> {
        const emailInput = e.target.value;
        setEmail(emailInput);
    }

      // function for 



      const handleSubmit = (e) => {
        e.preventDefault();
        allEmployees.map((employee)=> {
            if (employee.email == email){
              setCurrentUser({
                id:employee.id,
                firstName: employee.firstName,
                lastName:employee.lastName,
                email:employee.email,
                location:employee.location,
                grade:employee.grade,
                holidays:employee.holidays,
                team:employee.team,
                totalHoliday:employee.totalHoliday,
              })
              navigate('/user-dashboard')
            }
            
        })

        // alert("Incorrect login")
        

        



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