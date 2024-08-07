import { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserPage from "../components/UserPage";
import ManagerPage from "../components/ManagerPage";
import HolidaysPage from "../components/HolidaysPage";
import Navigation from "../components/Navigation";
import LoginPage from "../components/LoginPage";

function HRContainer() {

  const [currentUser, setCurrentUser] = useState(null);
  const [allEmployees, setAllEmployees] = useState([])
  const [allHolidays, setAllHolidays] = useState([])
  const [allTeams, setAllTeams] = useState([])
  const [openForm, setOpenForm] = useState(false);


  const fetchAllEmployees = async () => {
    const response = await fetch("http://localhost:8080/employees");
    const data = await response.json();
    setAllEmployees(data);
  }

  const fetchAllHolidays = async () => {
    const response = await fetch("http://localhost:8080/holidays");
    const data = await response.json();
    setAllHolidays(data);
  }

  const fetchAllTeams = async () => {
    const response = await fetch("http://localhost:8080/teams");
    const data = await response.json();
    setAllTeams(data);
  }

useEffect(()=>{
console.log("Current User Updated", currentUser)
} ,[currentUser])


const postRequestForHolidays = async (newHolidayRequest) => {
  console.log(newHolidayRequest)
  const response = await fetch ("http://localhost:8080/holidays", {
    method:"POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(newHolidayRequest)
  });
  const newHoliday = await response.json();
  console.log(newHoliday);
  setCurrentUser((prevState) => {
    return {...prevState, holidays: [...prevState.holidays, newHoliday]}
  });
}

  const postEmployee = async (newEmployee) => {
    console.log(newEmployee)
    const response = await fetch ("http://localhost:8080/employees", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newEmployee)
    });

    const savedEmployee = await response.json();
    console.log(savedEmployee);
    setAllEmployees([...allEmployees, savedEmployee])
  }

  const postLoginEmail = async (emailInput) => {
    const response = await fetch (`http://localhost:8080/employees/login`, {
      method: "POST", 
      headers: {"Content-Type": "application/json"},
      body: emailInput
    })

    const currentUser = await response.json();
    console.log(currentUser);
    setCurrentUser(currentUser); 
  }

  const handleReason = (reason) => {
    const reasonWithoutUnderscore = reason.split('_').join(' ')
  
    const reasonWithoutUnderscoreLower = reasonWithoutUnderscore.toLowerCase().split(' ');
  
    for (let i = 0; i < reasonWithoutUnderscoreLower.length; i++){
      reasonWithoutUnderscoreLower[i] = reasonWithoutUnderscoreLower[i][0].toUpperCase() + reasonWithoutUnderscoreLower[i].substr(1);
    }
  
      const reasonWithoutUnderscoreStr = reasonWithoutUnderscoreLower.join(' ')
      return reasonWithoutUnderscoreStr;
  }
  
  
  const handleStatus = (status) => {
    const statusLower = status.toLowerCase();
    const finalStatus = statusLower[0].toUpperCase() + statusLower.substr(1);
  
    return finalStatus;
  }

  useEffect(() => {
    fetchAllEmployees()
    fetchAllHolidays()
    fetchAllTeams()
  }, []);


  const managerRouter = createBrowserRouter(
    [

      {
        path:"/",
        element:<LoginPage postLoginEmail = {postLoginEmail}setCurrentUser={setCurrentUser}/>
      }, 
      
      {
        path: "/",
        element: <Navigation currentUser={currentUser}/>,
        children: [
         
          ...( currentUser?.grade == 'MANAGER' ? [ 
            {
              path: "/manager-dashboard",
              element: <ManagerPage allHolidays={allHolidays} openForm={openForm} setOpenForm={setOpenForm} employeeName={currentUser ? currentUser.firstName : "Manager"} postEmployee={postEmployee} handleReason={handleReason} handleStatus={handleStatus} />
            }
          ] : []  
          ),
          {
            path: "/user-dashboard",
            element: <UserPage allEmployees={allEmployees} currentUser={currentUser} postRequestForHolidays={postRequestForHolidays} openForm={openForm} setOpenForm={setOpenForm} handleReason={handleReason} handleStatus={handleStatus}/>
          },
          {
            path: "/manager-dashboard",
            element: <ManagerPage allHolidays={allHolidays} openForm={openForm} setOpenForm={setOpenForm} employeeName={currentUser ? currentUser.firstName : "Manager"}/>
          },
          {
            path: "/holidays",
            element: <HolidaysPage allHolidays={allHolidays}/>
          },

        ]
      }
    ]
  )

  return (
    <>
      <RouterProvider router={managerRouter} />
    </>

  )

}

  
  export default HRContainer;