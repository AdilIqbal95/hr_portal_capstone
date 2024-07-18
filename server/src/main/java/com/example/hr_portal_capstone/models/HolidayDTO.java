package com.example.hr_portal_capstone.models;

import com.example.hr_portal_capstone.models.enums.Reason;
import com.example.hr_portal_capstone.models.enums.Status;

import java.time.LocalDate;

public class HolidayDTO {

    private int employeeId;

    private LocalDate startDate;

    private LocalDate endDate;

    private Reason reason;

    private Status status;


    public HolidayDTO(int employeeId, LocalDate startDate, LocalDate endDate, Reason reason, Status status) {
        this.employeeId = employeeId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.reason = reason;
        this.status = status;
    }

    public HolidayDTO() {
    }

    public int getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(int employeeId) {
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

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}
