import { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserPage from "../components/UserPage";
import ManagerPage from "../components/ManagerPage";
import HolidaysPage from "../components/HolidaysPage";
import Navigation from "../components/Navigation";
import LoginPage from "../components/LoginPage";

function HRContainer() {

  const [currentUser, setCurrentUser] = useState([]);
  const [allEmployees, setAllEmployees] = useState()

  const fetchAllEmployees = async () => {
    const response = await fetch("http://localhost:8080/employees");
    const data = await response.json();
    setAllBookings(data);

  }

  useEffect(() => {
    fetchAllEmployees()
  },[])

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Navigation/>,
        children: [
          {
            path:"/",
            element:<LoginPage/>
          },
          {
            path: "/user-dashboard",
            element: <UserPage/>
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