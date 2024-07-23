package com.example.hr_portal_capstone.models;

import com.example.hr_portal_capstone.models.enums.Reason;
import com.example.hr_portal_capstone.models.enums.Status;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.time.*;
import java.time.temporal.ChronoUnit;
import java.util.Arrays;


@Entity
@Table(name = "holidays")
public class Holiday {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "start_date")
    private LocalDateTime startDate;

    @Column(name = "end_date")
    private LocalDateTime endDate;

    @Column(name = "reason")
    @Enumerated(EnumType.STRING)
    private Reason reason;

    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private Status status;

    @ManyToOne
    @JoinColumn(name = "employee_id")
    @JsonIgnoreProperties({"holidays", "team"})
    private Employee employee;

    public Holiday(Employee employee, LocalDateTime startDate, LocalDateTime endDate, Reason reason){
        this.employee = employee;
        this.startDate = startDate;
        this.endDate = endDate;
        this.reason = reason;
        this.status = Status.PENDING;
    }

    public Holiday() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDateTime startDate) {
        this.startDate = startDate;
    }

    public LocalDateTime getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDateTime endDate) {
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

    long workingDays() {
        return this.getStartDate().toLocalDate().datesUntil(this.getEndDate().toLocalDate())
                .map(LocalDate::getDayOfWeek)
                .filter(day -> !Arrays.asList(DayOfWeek.SATURDAY, DayOfWeek.SUNDAY).contains(day))
                .count();
    }


}






