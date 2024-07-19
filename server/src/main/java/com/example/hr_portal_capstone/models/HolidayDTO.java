package com.example.hr_portal_capstone.models;

import com.example.hr_portal_capstone.models.enums.Reason;
import com.example.hr_portal_capstone.models.enums.Status;

import java.time.LocalDate;

public class HolidayDTO {

    private long employeeId;

    private LocalDate startDate;

    private LocalDate endDate;

    private Reason reason;


    public HolidayDTO(long employeeId, LocalDate startDate, LocalDate endDate, Reason reason) {
        this.employeeId = employeeId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.reason = reason;
    }

    public HolidayDTO() {
    }

    public long getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(long employeeId) {
        this.employeeId = employeeId;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public Reason getReason() {
        return reason;
    }

    public void setReason(Reason reason) {
        this.reason = reason;
    }

}
