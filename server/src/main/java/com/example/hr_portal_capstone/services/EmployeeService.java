package com.example.hr_portal_capstone.services;

import com.example.hr_portal_capstone.models.Employee;
import com.example.hr_portal_capstone.models.enums.Grade;
import com.example.hr_portal_capstone.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    EmployeeRepository employeeRepository;

    @Autowired
    Employee employee;

    public List<Employee> getAllEmployeesById() {
        return employeeRepository.findAll();
    }

    public Optional<Employee> getEmployeeById(long id) {
        return employeeRepository.findById(id);
    }

    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public void deleteEmployeeById(long id) {
        Employee employee = this.getEmployeeById(id).get();
        this.employeeRepository.delete(employee);
    }

    public Employee updateEmployeeFeatures(Employee employee, long id) {
        Employee existingEmployee = this.getEmployeeById(id).get();

        String newFirstName = employee.getFirstName();
        String newLastName = employee.getLastName();
        String newEmail = employee.getEmail();
        String newLocation = employee.getLocation();

        existingEmployee.setFirstName(newFirstName);
        existingEmployee.setLastName(newLastName);
        existingEmployee.setEmail(newEmail);
        existingEmployee.setLocation(newLocation);
        employeeRepository.save(existingEmployee);

        return existingEmployee;
    }


    public List<Employee>getAllManagers(Grade grade){
        return employeeRepository.findByGrade(grade);
    }

//    private void verifyEmployee(long employeeId) {
//        if (!employeeRepository.existsById(employeeId)) {
//            throw new RuntimeException("Employee not found with id: " + employeeId);
//        }
//    }
//
//    public long daysUsedOfHoliday(LocalDate startDate, LocalDate endDate) {
//        long daysInBetween = ChronoUnit.DAYS.between(startDate, endDate);
//        if (daysInBetween > employee.getTotalHoliday()) {
//           throw new RuntimeException("you only have " + employee.getTotalHoliday() + "days of holiday left");
//        }
//
//    }

}






