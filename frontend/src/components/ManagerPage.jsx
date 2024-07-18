import EmployeeForm from "./EmployeeForm";
import HolidayApprovalList from "./HolidayApprovalList";
import SearchHolidayApproval from "./SearchHolidayApproval";

function ManagerPage() {

    return (
      <>
        <h1>Manager Page</h1>
        <EmployeeForm />
        <HolidayApprovalList />
        

      </>
    )
  }
  
  export default ManagerPage;