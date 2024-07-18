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
              <option value="complaint">Annual Leave</option>
              <option value="feedback">Parental Leave</option>
              <option value="support">Sick Leave</option>
              <option value="support">Bereavement Leave</option>
              <option value="other">Other</option>
          </select>
          </form>
     </section>
    
    </>
  )
}

export default HolidayRequestForm;