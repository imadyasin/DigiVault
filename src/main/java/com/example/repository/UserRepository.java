package com.example.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.entity.users;

@Repository
@EnableJpaRepositories
public interface UserRepository extends JpaRepository<users, Integer> {
		
	 Optional<users> findByEmail(String email);
	 
	  users findByEmailAndPassword(String email, String password);
	 
}
