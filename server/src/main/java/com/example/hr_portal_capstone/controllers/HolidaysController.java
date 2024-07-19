package com.example.hr_portal_capstone.controllers;
import com.example.hr_portal_capstone.models.Holiday;
import com.example.hr_portal_capstone.models.HolidayDTO;
import com.example.hr_portal_capstone.services.HolidayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/holidays")
public class HolidaysController {

    @Autowired
    HolidayService holidayService;

    @GetMapping
    public ResponseEntity<List<Holiday>> getAllHolidays() {
        List<Holiday> holidays = holidayService.getAllHolidays();
        return new ResponseEntity<>(holidays, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Holiday>> getHolidayById(@PathVariable long id) {
        Optional<Holiday> holiday = holidayService.getHolidayById(id);
        if (holiday.isPresent()) {
            return new ResponseEntity<>(holiday, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/employee/{Id}")
    public ResponseEntity<List<Holiday>> getAllHolidaysByEmployee(@PathVariable long Id) {
        List<Holiday> holidays = holidayService.getAllHolidaysByEmployee(Id);
        return new ResponseEntity<>(holidays, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Holiday> createHoliday(@RequestBody HolidayDTO holidayDTO) {
        Holiday savedHoliday = holidayService.createHoliday(holidayDTO);
        return new ResponseEntity<>(savedHoliday, HttpStatus.CREATED);
    }


//    EXTENSIONS

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteHolidayById(@PathVariable long id) {
        holidayService.deleteHolidayById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


    @PatchMapping("/{id}")
    public ResponseEntity<Holiday> updateHolidayById(@RequestBody Holiday holiday, @PathVariable long id) {
        return new ResponseEntity<>(holidayService.updateHoliday(holiday, id), HttpStatus.OK);
    }

}