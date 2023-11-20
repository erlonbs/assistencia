package com.devsuperior.assistencia.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devsuperior.assistencia.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

}
