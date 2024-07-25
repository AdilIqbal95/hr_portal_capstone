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

  const markPendingToApproved = async () => {
    await fetch (`http://localhost:8080/holidays/${employee.id}?status=Approved`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"}
    } );
    await fetchAllHoliday();
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


// const fetchRandomFact = async () => {
//   try {
//       const response = await fetch("https://api.example.com/random-fact");
//       const data = await response.json();
//       setFact(data.fact);
//   } catch (error) {
//       console.error("Error fetching the random fact:", error);
//   }
// };



  // const updateHolidayStatus = async () = {
  //   const response = await fetch ("localhost:8080/holidays/${id}", {
  //     method: "PATCH",
  //     headers:{"Content-Type": "applidation/json"},
  //     body: JSON.stringify(updateHolidayStatus)
  //   })
  // }


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
    // fetchRandomFact();
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
              element: <ManagerPage allHolidays={allHolidays} openForm={openForm} setOpenForm={setOpenForm} employeeName={currentUser ? currentUser.firstName : "Manager"}/>
            }
          ] : []  
          ),
          {
            path: "/user-dashboard",
            element: <UserPage allEmployees={allEmployees} currentUser={currentUser} postRequestForHolidays={postRequestForHolidays}/>
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