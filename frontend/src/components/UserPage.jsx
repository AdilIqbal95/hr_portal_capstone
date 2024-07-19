import HolidaysList from "./HolidayList";
import HolidayRequestForm from "./HolidayRequestForm";
import UserProfile from "./UserProfile";

function UserPage({allEmployees}) {

    return (
      <>
        <h1>User Page</h1>
        <UserProfile/>
        <HolidayRequestForm/>
        <HolidaysList/>
      </>
    )
  }
  
  export default UserPage;