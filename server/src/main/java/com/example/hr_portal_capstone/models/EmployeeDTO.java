package com.example.hr_portal_capstone.models;

import com.example.hr_portal_capstone.models.enums.Grade;

public class EmployeeDTO {

    private String firstName;
    private String lastName;
    private int teamId;
    private Grade grade;

    public EmployeeDTO(String firstName, String lastName, int teamId, Grade grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.teamId = teamId;
        this.grade = grade;
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
