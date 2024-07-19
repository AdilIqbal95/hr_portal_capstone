package com.example.hr_portal_capstone.services;
import com.example.hr_portal_capstone.models.Employee;
import com.example.hr_portal_capstone.models.Holiday;
import com.example.hr_portal_capstone.models.HolidayDTO;
import com.example.hr_portal_capstone.models.enums.Reason;
import com.example.hr_portal_capstone.models.enums.Status;
import com.example.hr_portal_capstone.repositories.EmployeeRepository;
import com.example.hr_portal_capstone.repositories.HolidayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Optional;

@Service
public class HolidayService {

    @Autowired
    private HolidayRepository holidayRepository;

    @Autowired
    EmployeeRepository employeeRepository;

    public List<Holiday> getAllHolidays() {
        return holidayRepository.findAll();
    }

    public Optional<Holiday> getHolidayById(long id) {
        return holidayRepository.findById(id);
    }

    public List<Holiday> getAllHolidaysByEmployee(long employeeId) {
        return holidayRepository.findByEmployeeId(employeeId);
    }


    public void deleteHolidayById ( long id){
        holidayRepository.deleteById(id);
    }

    public Holiday updateHoliday(Holiday holiday, long id) {
        Holiday existingHoliday = this.getHolidayById(id).orElseThrow(() -> new RuntimeException("Holiday not found"));

        LocalDate newStartDate = holiday.getStartDate();
        LocalDate newEndDate = holiday.getEndDate();
        Reason newReason = holiday.getReason();
        Status newStatus = holiday.getStatus();
        Employee newEmployee = holiday.getEmployee();

        existingHoliday.setStartDate(newStartDate);
        existingHoliday.setEndDate(newEndDate);
        existingHoliday.setReason(newReason);
        existingHoliday.setStatus(newStatus);
        existingHoliday.setEmployee(newEmployee);

        holidayRepository.save(existingHoliday);

        return existingHoliday;
    }

    public Holiday createHoliday(HolidayDTO holidayDTO) {
        if (holidayDTO.getEndDate().isAfter(holidayDTO.getStartDate())) {
//           todo: fix it and add a 'if' exists check
            Employee employee = employeeRepository.findById(holidayDTO.getEmployeeId()).get();
            Holiday newHoliday = new Holiday(employee, holidayDTO.getStartDate(), holidayDTO.getEndDate(), holidayDTO.getReason());
            return holidayRepository.save(newHoliday);

        } else {
            throw new RuntimeException("ERROR: The end date should be after start date");
        }
    }

//    create remianing holiday variable within method, another variable that calculates total holidays taken which you get from total holidays take from employee

}
