package com.example.hr_portal_capstone.components;

import com.example.hr_portal_capstone.models.Employee;
import com.example.hr_portal_capstone.models.Holiday;
import com.example.hr_portal_capstone.models.Team;
import com.example.hr_portal_capstone.models.enums.Grade;
import com.example.hr_portal_capstone.models.enums.Reason;
import com.example.hr_portal_capstone.models.enums.Status;
import com.example.hr_portal_capstone.repositories.EmployeeRepository;
import com.example.hr_portal_capstone.repositories.HolidayRepository;
import com.example.hr_portal_capstone.repositories.TeamRepository;
import com.example.hr_portal_capstone.services.EmployeeService;
import com.example.hr_portal_capstone.services.HolidayService;
import com.example.hr_portal_capstone.services.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    EmployeeService employeeService;

    @Autowired
    HolidayService holidayService;

    @Autowired
    TeamService teamService;

    @Autowired
    EmployeeRepository employeeRepository;

    @Autowired
    HolidayRepository holidayRepository;

    @Autowired
    TeamRepository teamRepository;


    @Override
    public void run(ApplicationArguments args) throws Exception {
        Team northLondon = new Team("North london","London");
        teamRepository.save(northLondon);

        Team southLondon = new Team("South london","London");
        teamRepository.save(southLondon);

        Employee maria = new Employee("Maria", "Sharif", "maria@hotmail.com", northLondon, "London", Grade.MANAGER,  25 );
        employeeService.createEmployee(maria);

        Employee dena = new Employee("Dena", "Shiranpour", "Dena@hotmail.com", southLondon, "London", Grade.MANAGER,  25 );
        employeeService.createEmployee(dena);

        Employee adil = new Employee("Adil", "Iqbal", "adil@hotmail.com", southLondon, "London", Grade.MANAGER,  25 );
        employeeService.createEmployee(adil);

        LocalDate mariaStartDate = LocalDate.of(2024, 8, 10);
        LocalDate mariaEndDate = LocalDate.of(2024, 8, 17);
        LocalDate denaStartDate = LocalDate.of(2024, 7, 28);
        LocalDate denaEndDate = LocalDate.of(2024, 8, 9);
        LocalDate adilStartDate = LocalDate.of(2024, 8, 1);
        LocalDate adilEndDate = LocalDate.of(2024, 8, 11);
        LocalDate adilStartDate2 = LocalDate.of(2024, 9, 10);
        LocalDate adilEndDate2 = LocalDate.of(2024, 9, 21);

        Holiday mariaHoliday = new Holiday(maria, mariaStartDate, mariaEndDate, Reason.ANNUAL_LEAVE);
        holidayRepository.save(mariaHoliday);

        Holiday denaHoliday = new Holiday(dena, denaStartDate, denaEndDate, Reason.ANNUAL_LEAVE);
        holidayRepository.save(denaHoliday);

        Holiday adilHoliday = new Holiday(adil, adilStartDate, adilEndDate, Reason.ANNUAL_LEAVE);
        holidayRepository.save(adilHoliday);
        Holiday adilHoliday2 = new Holiday(adil, adilStartDate2, adilEndDate2, Reason.ANNUAL_LEAVE);
        holidayRepository.save(adilHoliday2);
    }
}
