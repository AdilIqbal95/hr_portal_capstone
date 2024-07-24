import EmployeeForm from "./EmployeeForm";
import HolidayApprovalList from "./HolidayApprovalList";
import SearchHolidayApproval from "./SearchHolidayApproval";

function ManagerPage({allHolidays}) {


 

    return (
      <>
        <h1>Manager Page</h1>
        <EmployeeForm />
        <HolidayApprovalList allHolidays={allHolidays} />
        
        

      </>
    )
  }
  
  export default ManagerPage;