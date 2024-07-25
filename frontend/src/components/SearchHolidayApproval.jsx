import { useState } from "react";
import HolidayApprovalList from "./HolidayApprovalList";

const SearchHolidayApproval = () =>  {

    const [inputText, setInputText] = useState ("");
    const [searchTerm, setSearchTerm] = useState("");



    const handleSearch = (event) => {
        event.preventDefault();
        const searchResult = holiday.filter(holiday => 
        holiday.employeeId.toLowerCase().include(inputText.toLowerCase().trim()) )
        setHolidays(searchResult);

    };

    return(
        <>
        <form onSubmit={handleSearch}> 
        <label htmlFor="search-field">Search for Employee Name</label>
        <input
            type="text"
            id = "search-field"
            value={inputText}
            placeholder="Employee Name"
            OnChange={(event)=> setSearchWord(event.target.value)} ></input>
        </form>
        
        </>

    )
   
}

export default SearchHolidayApproval;