package com.example.hr_portal_capstone.repositories;


import com.example.hr_portal_capstone.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository <Employee, Long> {


}
