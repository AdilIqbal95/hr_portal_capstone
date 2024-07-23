const HolidayList = ({currentUser}) => {

  const mockHolidayList = [
    {
        employeeId: 1,
        startDate: "2024-07-15",
        endDate: "2024-07-27",
        reason: "ANNUAL_LEAVE",
        status: "PENDING"

    },
    {
        employeeId: 2,
        startDate: "2024-09-15",
        endDate: "2024-09-27",
        reason: "PARENTAL_LEAVE",
        status: "APPROVED"
    },
    {
        employeeId: 3,
        startDate: "2024-11-15",
        endDate: "2024-11-27",
        reason: "SICK_LEAVE",
        status: "REJECTED"
    }
]


const handleReason = (reason) => {
  const reasonWithoutUnderscore = reason.split('_').join(' ')

  const reasonWithoutUnderscoreLower = reasonWithoutUnderscore.toLowerCase().split(' ');

  for (let i = 0; i < reasonWithoutUnderscoreLower.length; i++){
    reasonWithoutUnderscoreLower[i] = reasonWithoutUnderscoreLower[i][0].toUpperCase() + reasonWithoutUnderscoreLower[i].substr(1);
  }

    const reasonWithoutUnderscoreStr = reasonWithoutUnderscoreLower.join(' ')
    return reasonWithoutUnderscoreStr;
}


const handleStatus = (status) => {
  const statusLower = status.toLowerCase();
  const finalStatus = statusLower[0].toUpperCase() + statusLower.substr(1);

  return finalStatus;
}



const mappedHolidayList = currentUser.holidays.map((holiday) => {
  return (
    <>
    <section>
      <article>
        <p> <strong> Start Date: </strong> {new Date(holiday.startDate).toLocaleDateString()}</p>
        <p> <strong> End Date: </strong> {new Date(holiday.endDate).toLocaleDateString()}</p>
        <p> <strong> Holiday Reason: </strong>{handleReason(holiday.reason)}</p>
        <p> <strong> Status: </strong>{handleStatus(holiday.status)}</p>
      </article>
      <article>
        <button>Update</button>
      </article>
      <article>
        <button>Delete</button>
      </article>
    </section>
    </>
  )
})

return(
  <>
  <h1>My Holiday List!</h1>
   <section>
   {mappedHolidayList}
   </section> 

  </>
)

}
  
  export default HolidayList;