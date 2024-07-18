package com.example.hr_portal_capstone.services;
import com.example.hr_portal_capstone.models.Employee;
import com.example.hr_portal_capstone.models.Holiday;
import com.example.hr_portal_capstone.models.enums.Reason;
import com.example.hr_portal_capstone.models.enums.Status;
import com.example.hr_portal_capstone.repositories.HolidayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class HolidayService {

    @Autowired
    private HolidayRepository holidayRepository;

    public List<Holiday> getAllHolidays() {
        return holidayRepository.findAll();
    }

    public Optional<Holiday> getHolidayById(long id) {
        return holidayRepository.findById(id);
    }

    public List<Holiday> getAllHolidaysByEmployee(long employeeId) {
        return holidayRepository.findByEmployeeId(employeeId);
    }

    public Holiday createHoliday(Holiday holiday) {
        return holidayRepository.save(holiday);
    }

    public void deleteHolidayById(long id) {
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
}
