package com.example.hr_portal_capstone.services;

import com.example.hr_portal_capstone.models.Employee;
import com.example.hr_portal_capstone.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class EmployeeService {

    @Autowired
    EmployeeRepository employeeRepository;

    public List<Employee> getAllEmployees() {
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

}
