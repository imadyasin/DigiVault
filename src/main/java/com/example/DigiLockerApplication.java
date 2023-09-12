package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@SpringBootApplication
@EnableAutoConfiguration
@RestController
@RequestMapping("/api")
public class DigiLockerApplication {
	
	@GetMapping("/hello")
	public String sayHello(){
		return "hellooo";
	}
	
	public static void main(String[] args) {
		SpringApplication.run(DigiLockerApplication.class, args);
	}

}
