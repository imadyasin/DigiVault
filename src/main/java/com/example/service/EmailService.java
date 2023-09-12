package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
	

	@Autowired
	private JavaMailSender javaMailSender;

	@Async
	public boolean sendEmail(String toEmail,String subject,String message)
		{
		      try {
				SimpleMailMessage mailMessage=new SimpleMailMessage();
				mailMessage.setTo(toEmail);
				mailMessage.setSubject(subject);
				mailMessage.setText(message);
				javaMailSender.send(mailMessage);
				
				return true;
		      }
			
				catch(Exception e ){
				return false;
				}

}
}
