package com.example.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.ContactInfo;
import com.example.entity.users;
import com.example.repository.UserRepository;
import com.example.service.EmailService;
import com.example.service.UserService;



@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {

	
	@Autowired
	private UserRepository userRepository;
	@Autowired
    private UserService userService;
	
	@Autowired
	EmailService emailService;
	
	
	@CrossOrigin(origins = "http://localhost:4200/")
	@GetMapping("/hello")
	public String sayHello(){
		return "hellooo";
	}
	
	@CrossOrigin(origins = "http://localhost:4200/")
	@PostMapping("/saveuser")
	 public ResponseEntity<users> createUser(@RequestBody users user) {
		 System.out.println("working");
        users savedUser = userService.saveUser(user);
        return ResponseEntity.ok(savedUser);
    }
	
	 @CrossOrigin(origins = "http://localhost:4200/")
	 @GetMapping("/getAll")
	    public ResponseEntity<List<users>> getAllUsers() {
	        List<users> users = userService.getAllUsers();
	        return ResponseEntity.ok(users);
	    }
	
	 @CrossOrigin(origins = "http://localhost:4200/")
	 @GetMapping("/email/{email}")
	    public ResponseEntity<users> getUserByEmail(@PathVariable String email) {
	        Optional<users> user = userService.getUserByEmail(email);
	        if (user.isPresent()) {
	            return ResponseEntity.ok(user.get());
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }
	    
	    
	    @CrossOrigin(origins = "http://localhost:4200/")
	    @PostMapping("/authenticate")
	    public ResponseEntity<Boolean> authenticateUser(@RequestBody users user) {
	    	if(user.getEmail()==null || user.getPassword()==null) {
	    		
	 	        return ResponseEntity.ok(false);
	    	}
	    	 users foundUser = userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());
	 	        return ResponseEntity.ok(foundUser != null);
	    	
	    }
	    @CrossOrigin(origins = "http://localhost:4200/") 
	    @PostMapping("/sendmail")
	    public ResponseEntity<Boolean> sendContactEmail(@RequestBody ContactInfo contactInfo) {
	        try {
	            String subject = "New Contact Message from " + contactInfo.getName();
	            String message = "Email: " + contactInfo.getEmail() + "\n\nMessage:\n" + contactInfo.getMessage();
	           boolean messageSent = emailService.sendEmail("imadyasin07@gmail.com", subject, message);
	            return ResponseEntity.ok(messageSent);
	        } catch (Exception e) {
	            return ResponseEntity.ok(false);
	        }
	        
	    }
	   
	    
	 
	   
}
