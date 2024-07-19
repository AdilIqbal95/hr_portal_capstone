import { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserPage from "../components/UserPage";
import ManagerPage from "../components/ManagerPage";
import HolidaysPage from "../components/HolidaysPage";
import Navigation from "../components/Navigation";
import LoginPage from "../components/LoginPage";

function HRContainer() {

  const [currentUser, setCurrentUser] = useState("");
  const [allEmployees, setAllEmployees] = useState()
  const [allHolidays, setAllHolidays] = useState()
  const [allTeams, setAllTeams] = useState()


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



  useEffect(() => {
    fetchAllEmployees()
    fetchAllHolidays()
    fetchAllTeams()
  },[])

  const router = createBrowserRouter(
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
            path: "/manager-dashboard",
            element: <ManagerPage/>
          },
          {
            path: "/holidays",
            element: <HolidaysPage/>
          },

        ]
      }
    ]


  )

    return (
      <>
       <RouterProvider router={router} />
      </>
    )
  }
  
  export default HRContainer;