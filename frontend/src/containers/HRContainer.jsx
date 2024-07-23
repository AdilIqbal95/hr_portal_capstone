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

  const markPendingToApproved = async () => {
    await fetch (`http://localhost:8080/holidays/${employee.id}?status=Approved`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"}
    } );
    await fetchAllHoliday();
}

// post method - add holiday form 
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
  const tempUser = currentUser;
  tempUser.holidays = [...currentUser.holidays, newHoliday];
  setCurrentUser(tempUser);
  // console.log(currentUser)
  // setCurrentUser(newHoliday);
}





  // const updateHolidayStatus = async () = {
  //   const response = await fetch ("localhost:8080/holidays/${id}", {
  //     method: "PATCH",
  //     headers:{"Content-Type": "applidation/json"},
  //     body: JSON.stringify(updateHolidayStatus)
  //   })
  // }


  // const url = ('localhost:8080/employees/login?' + new URLSearchParams({email:emailInput}).toString())

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

  useEffect(() => {
    fetchAllEmployees()
    fetchAllHolidays()
    fetchAllTeams()
  },[])

  const managerRouter = createBrowserRouter(
    [
      {
        path: "/",
        element: <Navigation/>,
        children: [
          {
            path:"/",
            element:<LoginPage postLoginEmail = {postLoginEmail}setCurrentUser={setCurrentUser}/>
          },
          {
            path: "/user-dashboard",
            element: <UserPage allEmployees={allEmployees} currentUser={currentUser} postRequestForHolidays={postRequestForHolidays}/>
          },
          {
            path: "/manager-dashboard",
            element: <ManagerPage allHolidays={allHolidays}/>
          },
          {
            path: "/holidays",
            element: <HolidaysPage allHolidays={allHolidays}/>
          },

        ]
      }
    ]
  )
  
  const juniorRouter = createBrowserRouter(
    [
      {
        path: "/",
        element: <Navigation/>,
        children: [
          {
            path:"/",
            element:<LoginPage allEmployees={allEmployees} setCurrentUser={setCurrentUser}/>
          },
          {
            path: "/user-dashboard",
            element: <UserPage allEmployees={allEmployees} currentUser={currentUser}/>
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