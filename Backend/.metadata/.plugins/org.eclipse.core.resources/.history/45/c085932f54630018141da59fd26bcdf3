package com.example.demo.config;

import java.sql.Connection;
import java.sql.DriverManager;

import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.client.RestTemplate;

@Configuration
public class CommonConfig {
	
	@Qualifier("dataSource")
	@Autowired
	DataSource dataSource;
	
	
	@Bean
	public RestTemplate getRestTemplate() {
		return new RestTemplate();
	}
	
	@Bean
	public JdbcTemplate getJdbcTemplate() {
		System.out.println(dataSource);
		return new JdbcTemplate(dataSource);
	}
	
	

}
