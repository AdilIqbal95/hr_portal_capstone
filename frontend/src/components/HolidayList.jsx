const HolidayList = () => {

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

const mappedHolidayList = mockHolidayList.map((holiday) => {
  return (
    <>
    <section>
      <article>
        <p> {holiday.employeeId}</p>
        <p> {holiday.startDate}</p>
        <p> {holiday.endDate}</p>
        <p> {holiday.reason}</p>
        <p> {holiday.status}</p>
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