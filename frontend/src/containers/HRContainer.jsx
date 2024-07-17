import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserPage from "../components/UserPage";
import ManagerPage from "../components/ManagerPage";
import HolidaysPage from "../components/HolidaysPage";

function HRContainer() {

  const [currentUser, setCurrentUser] = useState([]);

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Navigation/>
        children: [
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