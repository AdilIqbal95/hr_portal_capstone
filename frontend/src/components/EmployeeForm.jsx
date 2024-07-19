const EmployeeForm = () => {

    return(
        <>
        <section>
            <h3> Add Employee</h3>
            <form>
                <label>First Name</label>
                <input type="text"
                id="first-name"
                placeholder="Enter First Name"
                name="first-name" 
                />
                <label>Last Name</label>
                <input type="text"
                id="last-name"
                placeholder="Enter Last Name"
                name="last-name"
                />
                <label>Email</label>
                <input type="text"
                id="email"
                placeholder="Enter Email"
                name="email"
                />
                <label>Location</label>
                <input type="text"
                id="location"
                placeholder="Enter Location"
                name="location"
                />
                <label>Total Holiday</label>
                <input type="number"
                id="total-holiday"
                placeholder="Enter Total Holiday"
                name="total-holiday"
                value="total-holiday"
                />
                <label>Grade</label>
                <select
                id="grade"
                value="grade"
                defaultValue="Grade Type"
                >
                    <option value="">Select</option>
                    <option value="Junior">Junior</option>
                    <option value="Manager">Manager</option>
                </select>
                <label>Team Id</label>
                <select
                id="team-id"
                value="team-id"
                defaultValue="Team Id Type"
                >
                    <option value="">Select</option>
                    <option value="1">Team 1</option>
                    <option value="2">Team 2</option>
                </select>
                <input type="submit"
                id="employee-form-submit"
                name="employee-form-submit"
                />
            </form>
        </section>
        </>
    )

}

export default EmployeeForm;
