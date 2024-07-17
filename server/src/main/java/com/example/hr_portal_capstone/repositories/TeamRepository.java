package com.example.hr_portal_capstone.repositories;

import com.example.hr_portal_capstone.models.Team;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamRepository extends JpaRepository<Team, Long> {
}
