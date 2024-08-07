package com.example.hr_portal_capstone.models;


import com.example.hr_portal_capstone.models.enums.Grade;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.time.DayOfWeek;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "employees")
public class Employee {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "first_name")
    private String firstName;

    @Column (name = "last_name")
    private String lastName;

    @Column (name = "email")
    private String email;

    @Column(name="location")
    private String location;

    @Column(name="grade")
    @Enumerated(EnumType.STRING)
    private Grade grade;

    @OneToMany(mappedBy="employee")
    @JsonIgnoreProperties({"employee"})
    private List<Holiday>holidays;

    @ManyToOne
    @JoinColumn(name = "team_id")
    @JsonIgnoreProperties({"employees"})
    private Team team;

    @Column(name="totalHoliday")
    private int totalHoliday;



    public Employee() {
    }

    public Employee( String firstName, String lastName, String email, Team team, String location, Grade grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.team = team;
        this.location = location;
        this.grade = grade;
        this.holidays = new ArrayList<>();
        this.totalHoliday = 25;
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Team getTeam() {
        return team;
    }

    public void setTeam(Team team) {
        this.team = team;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Grade getGrade() {
        return grade;
    }

    public void setGrade(Grade grade) {
        this.grade = grade;
    }

    public List<Holiday> getHolidays() {
        return holidays;
    }

    public void setHolidays(List<Holiday> holidays) {
        this.holidays = holidays;
    }

    public int getTotalHoliday() {
        return totalHoliday;
    }

    public void setTotalHoliday(int totalHoliday) {
        this.totalHoliday = totalHoliday;

    }


    public int getRemainingHolidays () {

        int daysOfHolidayTaken = 0;

        for (int i = 0; i < this.getHolidays().size(); i++ ){
            daysOfHolidayTaken += (int) this.getHolidays().get(i).workingDays();
        }

        return this.totalHoliday - daysOfHolidayTaken ;

    }


    public long calculateRemainingDays (Employee employee, LocalDateTime startDate, LocalDateTime endDate) {
        long daysInBetween = ChronoUnit.DAYS.between(startDate, endDate) + 1;
        if (daysInBetween < employee.getTotalHoliday()) {
            return employee.getTotalHoliday() - daysInBetween;
        } else {
            throw new RuntimeException("ERROR: you only have " + employee.getTotalHoliday() + "days of holiday left");
        }
    }

//    NOTE FOR FUTURE: CREATE IS AVAILABLE/ REMAINING HOLIDAY

}
