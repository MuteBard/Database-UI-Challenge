package com.example.demo.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.example.demo.model.Appointments;

@Component
public class AppointmentDao {
	private final String GET_APPOINTMENTS = "SELECT bookdate, booktime, description FROM appointment";
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	public List<Appointments> getAllAppointments() {
		return jdbcTemplate.query(GET_APPOINTMENTS, new BeanPropertyRowMapper<>(Appointments.class));
	}
	

}
