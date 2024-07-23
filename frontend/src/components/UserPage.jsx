import HolidaysList from "./HolidayList";
import HolidayRequestForm from "./HolidayRequestForm";
import UserProfile from "./UserProfile";

function UserPage({currentUser, postRequestForHolidays, allEmployees}) {

    if (currentUser === null) {
      return null;
    } 

    return (
      <>
        <h1>User Page</h1>
        {/* <h2>{currentUser.firstName}</h2> */}
        <UserProfile currentUser={currentUser}/>
        <HolidayRequestForm postRequestForHolidays={postRequestForHolidays} currentUser={currentUser} />
        <HolidaysList currentUser={currentUser}/>
      
      </>
    )
  }
  
  export default UserPage;