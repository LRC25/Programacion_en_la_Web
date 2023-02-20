package com.proyecto.SPA.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.proyecto.SPA.model.Persona;

@Repository
public interface PersonaRepository extends JpaRepository<Persona, Long>{
	
}