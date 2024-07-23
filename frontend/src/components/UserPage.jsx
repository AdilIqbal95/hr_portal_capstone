import HolidaysList from "./HolidayList";
import HolidayRequestForm from "./HolidayRequestForm";
import UserProfile from "./UserProfile";

function UserPage({currentUser}) {

    if (currentUser === null) {
      return null;
    } 

    return (
      <>
        <h1>User Page</h1>
        {/* <h2>{currentUser.firstName}</h2> */}
        <UserProfile/>
        <HolidayRequestForm/>
        <HolidaysList currentUser={currentUser}/>
      
      </>
    )
  }
  
  export default UserPage;