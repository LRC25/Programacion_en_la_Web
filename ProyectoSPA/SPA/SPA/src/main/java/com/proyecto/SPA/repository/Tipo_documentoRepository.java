package com.proyecto.SPA.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.proyecto.SPA.model.Tipo_documento;

@Repository
public interface Tipo_documentoRepository extends JpaRepository<Tipo_documento, Long>{
	
}
