package com.example.hr_portal_capstone.repositories;


import com.example.hr_portal_capstone.models.Employee;
import com.example.hr_portal_capstone.models.enums.Grade;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmployeeRepository extends JpaRepository <Employee, Long> {

    List<Employee>findByGrade(Grade grade);


}
