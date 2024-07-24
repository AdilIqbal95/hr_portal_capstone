package com.example.hr_portal_capstone.components;

import com.example.hr_portal_capstone.models.Employee;
import com.example.hr_portal_capstone.models.EmployeeDTO;
import com.example.hr_portal_capstone.models.Holiday;
import com.example.hr_portal_capstone.models.Team;
import com.example.hr_portal_capstone.models.enums.Grade;
import com.example.hr_portal_capstone.models.enums.Reason;
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

import java.time.LocalDateTime;
import java.time.Month;


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


        Employee maria = new Employee("Maria", "Sharif", "maria@hotmail.com", northLondon, "London", Grade.MANAGER);
        employeeRepository.save(maria);

        Employee dena = new Employee("Dena", "Shiranipour", "Dena@hotmail.com", southLondon, "London", Grade.MANAGER);
        employeeRepository.save(dena);

        Employee adil = new Employee("Adil", "Iqbal", "adil@hotmail.com", southLondon, "London", Grade.JUNIOR);
        employeeRepository.save(adil);

        Employee ghish = new Employee("Ghish", "Mohanadas", "ghish@hotmail.com", southLondon, "London", Grade.JUNIOR);
        employeeRepository.save(ghish);

        Employee sabah = new Employee("Sabah", "Yusuf", "sabah@hotmail.com", northLondon, "London", Grade.JUNIOR);
        employeeRepository.save(sabah);

        Employee peter = new Employee("Peter", "Parker", "Peter@hotmail.com", northLondon, "London", Grade.JUNIOR);
        employeeRepository.save(peter);

        LocalDateTime mariaStartDate = LocalDateTime.of(2024, Month.AUGUST,7, 23,59);
        LocalDateTime mariaEndDate = LocalDateTime.of(2024, Month.AUGUST, 14,23,59);
        LocalDateTime denaStartDate = LocalDateTime.of(2024, Month.JULY, 29,23,59);
        LocalDateTime denaEndDate = LocalDateTime.of(2024, Month.AUGUST, 9,23,59);
        LocalDateTime adilStartDate = LocalDateTime.of(2024, Month.AUGUST, 1,23,59);
        LocalDateTime adilEndDate = LocalDateTime.of(2024, Month.AUGUST, 11,23,59);
        LocalDateTime adilStartDate2 = LocalDateTime.of(2024, Month.SEPTEMBER, 10,23,59);
        LocalDateTime adilEndDate2 = LocalDateTime.of(2024, Month.SEPTEMBER, 21,23,59);
        LocalDateTime ghishStartDate = LocalDateTime.of(2024, Month.OCTOBER, 2,23,59);
        LocalDateTime ghishEndDate = LocalDateTime.of(2024, Month.OCTOBER, 10,23,59);
        LocalDateTime sabahStartDate = LocalDateTime.of(2024, Month.NOVEMBER, 22,23,59);
        LocalDateTime sabahEndDate = LocalDateTime.of(2024, Month.NOVEMBER, 30,23,59);
        LocalDateTime peterStartDate = LocalDateTime.of(2024, Month.NOVEMBER, 25,23,59);
        LocalDateTime peterEndDate = LocalDateTime.of(2024, Month.NOVEMBER, 30,23,59);


        Holiday mariaHoliday = new Holiday(maria, mariaStartDate, mariaEndDate, Reason.ANNUAL_LEAVE);
        holidayRepository.save(mariaHoliday);

        Holiday denaHoliday = new Holiday(dena, denaStartDate, denaEndDate, Reason.ANNUAL_LEAVE);
        holidayRepository.save(denaHoliday);

        Holiday adilHoliday = new Holiday(adil, adilStartDate, adilEndDate, Reason.ANNUAL_LEAVE);
        holidayRepository.save(adilHoliday);
        Holiday adilHoliday2 = new Holiday(adil, adilStartDate2, adilEndDate2, Reason.ANNUAL_LEAVE);
        holidayRepository.save(adilHoliday2);
        Holiday ghishHoliday = new Holiday(ghish, ghishStartDate, ghishEndDate, Reason.ANNUAL_LEAVE);
        holidayRepository.save(ghishHoliday);
        Holiday sabahHoliday = new Holiday(sabah, sabahStartDate, sabahEndDate, Reason.ANNUAL_LEAVE);
        holidayRepository.save(sabahHoliday);
        Holiday paterHoliday = new Holiday(peter, peterStartDate, peterEndDate, Reason.ANNUAL_LEAVE);
        holidayRepository.save(paterHoliday);


    }
}
