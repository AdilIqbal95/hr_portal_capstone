package com.example.hr_portal_capstone.repositories;

import com.example.hr_portal_capstone.models.Holiday;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HolidayRepository extends JpaRepository<Holiday, Long> {
}
