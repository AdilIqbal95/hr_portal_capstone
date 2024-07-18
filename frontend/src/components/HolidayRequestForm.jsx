function HolidayRequestForm() {

  return (
    <>
     <section>
        <h3> Add Holiday Form</h3>
          <form>
          <label>Start Date</label>
          <input type="Text" 
            id="start-date"
            placeholder="Enter Start Date"
            name="start-date"
          />
          <label>End Date</label>
          <input type="Text" 
            id="end-date"
            placeholder="Enter End Date"
            name="end-date"
          />
          <label>Reason</label>
          <select
            id="reason"
            value= "TO BE CHANGED"
            defaultValue="Holiday Type"
          >
              <option value="">Select</option>
              <option value="Annual_leave">Annual Leave</option>
              <option value="Parental_leave">Parental Leave</option>
              <option value="Sick_leave">Sick Leave</option>
              <option value="Bereavement_leave">Bereavement Leave</option>
              <option value="Other">Other</option>
          </select>
          </form>
     </section>
    
    </>
  )
}

export default HolidayRequestForm;