package com.example.demo.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.example.demo.model.Appointments;

@Component
public class AppointmentDao {
	private final String GET_APPOINTMENTS = "SELECT bookdate, booktime, description FROM appointment";
	private final String ADD_APPOINTMENT = "INSERT INTO appointment VALUES (DEFAULT, ?, ?, ?)";
	private final String GET_MATCHING_APPOINTMENTS = "SELECT * FROM appointment WHERE description ilike ?";
	
	
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Autowired 
	private Connection con;
	
	public List<Appointments> getAllAppointments() {
		return jdbcTemplate.query(GET_APPOINTMENTS, new BeanPropertyRowMapper<>(Appointments.class));
	}
	
	public List<Appointments> getmatchingAppointments(String query) throws Exception{
	    PreparedStatement statement = con.prepareStatement(GET_MATCHING_APPOINTMENTS);
	    statement.setString(1, "%"+query+"%"); //query with wild card
	     
	    //If you're executing the query and expecting a ResultSet then you can simply call ResultSet's getStatement()
	    ResultSet rs = statement.executeQuery();
	    String executedQuery = rs.getStatement().toString();
		return jdbcTemplate.query(executedQuery, new BeanPropertyRowMapper<>(Appointments.class));
	}
	
	public void addAppointment(String date, String time, String desc) {
		jdbcTemplate.update(ADD_APPOINTMENT, date, time, desc);
	}
	
}