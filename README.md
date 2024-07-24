# Capstone project: HR system for Rainforest Retail

## By TimeTrackers ⏰   - “Because your time off should be a vacation, not a calculation!”


#### A shortlist of challenges we aim to solve for Rainforest Retail:
- As more employees are added it becomes harder to get an overview of availability and where everyone is working on a given day
- Keeping employee records up to date is time-consuming and error-prone

## Summary

RainforestRetail needs tailored solutions to improve the recording and maintenance of employee availability. The current use of paper records within the business requires too many resources and is unproductive. By combining all the physical diaries to be placed on a digital platform we could reduce the number of conflicts and improve overall employee productivity.


#### What makes us different?

We aim to make paper records a thing of the past. Our system specifically identifies the gaps in the data of Rainforest retail and helps the process of organisation to make things easier for the head office down to the warehouse worker.


## Diagrams

1. Component Diagram
2. Class Diagram
3. Entity Relationship Diagram
4. User Flow Diagram




#### The names and versions of libraries used:

- React.js
- React Router DOM
- React Modal
- React Big Calendar
- SpringBoot



#### Trello Board

https://trello.com/b/9Ep8GAai/capstone-project


## MVP 

- Employees can add holidays in the form 
- Employees can view the holiday list 
- Employees can view the holidays of team members
- Managers  approve employees' holiday
- Managers can add an employee form



## Extensions

- Add personal calendar in user - with days remaining counter and days til holiday counter 
- Add filter form in holiday list (calendar)
- Add update and delete functions in the employee holiday list
- Mobile integration - mobile friendly (react-bootstrap)


## API Routes

####  Employees 
- GET all
- GET by EmployeeId (PK)
- POST an employee
- PATCH an employee
- GET by ManagerID (fK)
- DELETE an employee

#### Teams
- GET all
- GET by TeamId (PK)
- POST a team
- Patch team
- DELETE a team 


#### Holiday Data
- GET all
- GET by HolidayDataId (PK)
- GET employeeId
- GET TeamId
- POST holidaydata
- PATCH a holidayData
- DELETE holidayData


#### Relationships
- Employees to Holidays(One to many relationships)
- Teams to Employees (One to many relationships)


#### ENUMS 
- Status - Pending/ Approved/ Rejected
- Reason - Annual leave/ parental leave/ sick leave/ bereavement leave/other
- Type of Employee - Managers/ Junior 





## Endpoints

#### Employees 

| METHOD | Endpoint                                       | Description                                                 | 
|-------|------------------------------------------------|-------------------------------------------------------------|
| SHOW     | localhost:8080/employees                       | Returns a list of employees                                 |
| GET     | localhost:8080/employees/id                    | Returns details of a specific employee                      |
| PATCH     | localhost:8080/employees?grade=manager         | Returns all managers                                        |
| POST     | localhost:8080/employees                       | Creates a new employee                                      | 
| DELETE     | localhost:8080/employees/id                    | Deletes an employee                                         |
| GET     | localhost:8080/employees/login?email=emailname@hotmail.com | Returns all employees' holidays by giving specific email | 


#### Teams 

| METHOD | Endpoint                                       | Description                                                 | 
|-------|------------------------------------------------|-------------------------------------------------------------|
| INDEX     | localhost:8080/teams                      | Returns a list of teams                                |
| SHOW     | localhost:8080/teams/id                   | Returns details of a specific team                   |



#### Holidays 

| METHOD | Endpoint                                       | Description                                                 | 
|-------|------------------------------------------------|-------------------------------------------------------------|
| INDEX     | localhost:8080/holidays                      | Returns a list of holidays of all holidays                                 |
| POST     | localhost:8080/holidays                  | Creates a new holiday                      |
| PATCH     | localhost:8080/holidays/id        | Update a holiday                                      |
| DELETE     | localhost:8080/holidays/id                     | Deletes a holiday                                    | 




## Installation Instructions


1. Install PostgreSQL, POSTICO and POSTMAN.
2. in  the terminal, clone the repository using the following command:
```
git clone https://github.com/AdilIqbal95/hr_portal_capstone
```
3. in the terminal, create a PostgreSQL database :
```
createdb hr_portal
```
4. run the application and use POSTMAN and POSTICO to run the endpoints and view changes to the database

```
cd frontend
```
5. Install the dependencies
```
npm install
```
6. Run the frontend using the following command.
```
npm run dev
```



## Acknowledgements

Thank you to all the BNTA Technology trainers (and community staff) for supporting our journey in coding. 

Colin, 
Zsolt,
Anna, 
Thibiyaa,
Richard,
Fiona, 
Phil,
and
Lewis 

## Credits

|    |    Name     |         Github              |
|----|---------|---------------------------------|
| 🌍 | Adil     | https://github.com/AdilIqbal95|
| 🍓 | Sabah   | https://github.com/Sabah-bot    |
| 🍄 | Maria   | https://github.com/marias52   |
| 💕 | Dena   | https://github.com/dena-shiranipour  |
| 🎶 | Ghish   | https://github.com/Ghishani  |

## Licenses

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
