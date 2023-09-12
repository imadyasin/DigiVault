package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.documents;
import com.example.entity.users;
import com.example.service.DocumentService;

@RestController
@RequestMapping("/documents")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class DocumentController {
	
	@Autowired
    private DocumentService documentService;
	
	@CrossOrigin(origins = "http://localhost:4200/")
    @PostMapping("/add")
    public ResponseEntity<documents> createUser(@RequestBody documents document) {
        documents savedUser = documentService.saveUser(document);
        return ResponseEntity.ok(savedUser);
    }
    
    @CrossOrigin(origins = "http://localhost:4200/")
	 @GetMapping("/getdocuments")
	    public ResponseEntity<List<documents>> getAllDocuments() {
	        List<documents> documents = documentService.getAllDocuments();
	        return ResponseEntity.ok(documents);
	    }
    
   
    @GetMapping("/byEmail/{userEmail}")
    @CrossOrigin(origins = "http://localhost:4200/")
    public ResponseEntity<List<documents>> getDocumentsByEmail(@PathVariable("userEmail")String userEmail) {
        List<documents> documents = documentService.getDocumentsByEmail(userEmail);
        System.out.println(documents);
        return ResponseEntity.ok(documents);
    }

}
