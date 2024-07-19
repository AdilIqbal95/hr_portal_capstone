package com.example.hr_portal_capstone.controllers;


import com.example.hr_portal_capstone.models.Team;
import com.example.hr_portal_capstone.services.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/teams")
public class TeamController {
    @Autowired
    TeamService teamService;


    @GetMapping
    public ResponseEntity<List<Team>> getAllTeams(){
        List<Team> teams = teamService.getAllTeamsById();
        return new ResponseEntity<>(teams, HttpStatus.OK);
    }


    @GetMapping ("/{id}")
    public ResponseEntity<Optional<Team>> getTeamById(@PathVariable long id){
        Optional<Team> team = teamService.getTeamById(id);
        if(team.isPresent()){
            return new ResponseEntity<>(team, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


}
