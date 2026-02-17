package com.projects.todolist;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class TodolistConfiguration {
	
	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper();
	}
	 

}
