package com.proyecto.SPA.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.proyecto.SPA.model.Ciudad;

@Repository
public interface CiudadRepository extends JpaRepository<Ciudad, Long>{
	
}