import HolidaysList from "./HolidayList";
import HolidayRequestForm from "./HolidayRequestForm";
import UserProfile from "./UserProfile";

function UserPage({currentUser}) {

    return (
      <>
        <h1>User Page</h1>
        <h2>{currentUser}</h2>
        <UserProfile/>
        <HolidayRequestForm/>
        <HolidaysList/>
      
      </>
    )
  }
  
  export default UserPage;