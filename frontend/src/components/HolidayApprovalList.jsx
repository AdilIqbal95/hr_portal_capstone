import SearchHolidayApproval from "./SearchHolidayApproval";



const HolidayApprovalList = () => {

    const mockHolidayApprovalList = [
        {
            employeeId: 1,
            startDate: "2024-07-18",
            endDate: "2024-07-25",
            reason: "ANNUAL_LEAVE",
            status: "PENDING"

        },
        {
            employeeId: 2,
            startDate: "2024-09-18",
            endDate: "2024-09-25",
            reason: "ANNUAL_LEAVE",
            status: "PENDING"
        },
        {
            employeeId: 3,
            startDate: "2024-11-18",
            endDate: "2024-11-25",
            reason: "ANNUAL_LEAVE",
            status: "PENDING"
        }
    ]

    const mappedHolidayApprovalList = mockHolidayApprovalList.map((holiday) => {
        return(
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
                <button>Reject</button>
            </article>
            <article>
                <button>Approve</button>
            </article>
            </section>
            </>
        )
    })

    return(
    <>
    <h1>Holiday Approval List</h1>
   <section>
    
    <SearchHolidayApproval/>
   {mappedHolidayApprovalList}

   </section> 

    
    </>
)

}

export default HolidayApprovalList;