package com.example.hr_portal_capstone.services;

import com.example.hr_portal_capstone.models.Team;
import com.example.hr_portal_capstone.repositories.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TeamService {

    @Autowired
    TeamRepository teamRepository;


    public List<Team> getAllTeamsById(){
        return teamRepository.findAll();
    }


    public Optional<Team> getTeamById(long id) {
        return teamRepository.findById(id);
    }




}
