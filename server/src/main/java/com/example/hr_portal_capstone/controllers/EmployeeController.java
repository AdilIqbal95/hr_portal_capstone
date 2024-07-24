package com.example.hr_portal_capstone.controllers;

import com.example.hr_portal_capstone.models.Employee;
import com.example.hr_portal_capstone.models.EmployeeDTO;
import com.example.hr_portal_capstone.models.enums.Grade;
import com.example.hr_portal_capstone.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/employees")
public class EmployeeController {
    @Autowired
    EmployeeService employeeService;

    @GetMapping
    public ResponseEntity<List<Employee>> getAllEmployee(){
        List<Employee> employees = employeeService.getAllEmployees();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    @GetMapping ("/{id}")
    public ResponseEntity<Optional<Employee>> getEmployeeById(@PathVariable long id){
        Optional<Employee> employee = employeeService.getEmployeeById(id);
        if(employee.isPresent()){
            return new ResponseEntity<>(employee, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity<Employee> createEmployee(@RequestBody EmployeeDTO employee){
        Employee savedEmployee = employeeService.createEmployee(employee);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    @PostMapping(value = "/login")
    public ResponseEntity<Optional<Employee>>login (@RequestBody String email){
        Optional<Employee> employee = employeeService.getEmployeeByEmail(email);
        if(employee.isPresent()){
            return new ResponseEntity<>(employee, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping (value = "{id}")
    public ResponseEntity<Void> deleteEmployeeById(@PathVariable long id){
        employeeService.deleteEmployeeById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PatchMapping ("/{id}")
    public ResponseEntity<Employee> updateEmployeeById(@RequestBody Employee employee, @PathVariable long id){
        return new ResponseEntity<>(employeeService.updateEmployeeFeatures(employee, id), HttpStatus.OK);
    }

    @GetMapping ("/filter-by-grade")
    public  ResponseEntity<List<Employee>> getAllManagers(@RequestParam Grade grade){
        List<Employee> managerEmployees = employeeService.getAllManagers(grade);
        return new ResponseEntity<>(managerEmployees, HttpStatus.OK);
    }


}
