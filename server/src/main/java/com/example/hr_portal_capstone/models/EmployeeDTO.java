package com.example.hr_portal_capstone.models;

import com.example.hr_portal_capstone.models.enums.Grade;

public class EmployeeDTO {

    private String firstName;
    private String lastName;
    private String email;
    private int teamId;
    private String location;
    private Grade grade;

    public EmployeeDTO(String firstName, String lastName, String email, int teamId, Grade grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.teamId = teamId;
        this.grade = grade;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public EmployeeDTO() {
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getTeamId() {
        return teamId;
    }

    public void setTeamId(int teamId) {
        this.teamId = teamId;
    }

    public Grade getGrade() {
        return grade;
    }

    public void setGrade(Grade grade) {
        this.grade = grade;
    }
}
