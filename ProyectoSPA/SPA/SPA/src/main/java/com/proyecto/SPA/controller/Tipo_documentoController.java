package com.proyecto.SPA.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.SPA.model.Tipo_documento;
import com.proyecto.SPA.repository.Tipo_documentoRepository;
import com.proyecto.SPA.exception.ResourceNotFoundException;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/api/v1")
public class Tipo_documentoController{
	@Autowired 
	private Tipo_documentoRepository tipoDocumentoRepository;
	
	@GetMapping("/tipoDocumento")
	public List<Tipo_documento> getAllTipoDocumentos(){
		return tipoDocumentoRepository.findAll();
	}

	@GetMapping("/tipoDocumento/{id}")
	public ResponseEntity<Tipo_documento> getTipoDocumentoById(@PathVariable(value="id") Long tipoDocumentoId)
		throws ResourceNotFoundException{
		Tipo_documento tipoDocumento = tipoDocumentoRepository.findById(tipoDocumentoId)
				.orElseThrow(() -> new ResourceNotFoundException("TipoDocumento not found for this id :: " + tipoDocumentoId));
		return ResponseEntity.ok().body(tipoDocumento);
	}
	
	@PostMapping("/tipoDocumento")
    public Tipo_documento createTipoDocumento(@Valid @RequestBody Tipo_documento tipoDocumento) {
        return tipoDocumentoRepository.save(tipoDocumento);
    }
	
	@PutMapping("/tipoDocumento/{id}")
    public ResponseEntity<Tipo_documento> updateTipo_documento(@PathVariable(value = "id") Long tipoDocumentoId,
         @Valid @RequestBody Tipo_documento tipoDocumentoDetails) throws ResourceNotFoundException {
		Tipo_documento tipoDocumento = tipoDocumentoRepository.findById(tipoDocumentoId)
        .orElseThrow(() -> new ResourceNotFoundException("TipoDocumento not found for this id :: " + tipoDocumentoId));

		tipoDocumento.setNombre(tipoDocumentoDetails.getNombre());
		tipoDocumento.setDescripcion(tipoDocumentoDetails.getDescripcion());
        final Tipo_documento updatedTipoDocumento = tipoDocumentoRepository.save(tipoDocumento);
        return ResponseEntity.ok(updatedTipoDocumento);
    }
	
	@DeleteMapping("/tipoDocumento/{id}")
	public Map<String, Boolean> deletePersona(@PathVariable(value="id") Long tipoDocumentoId)
		throws ResourceNotFoundException{
		Tipo_documento tipoDocumento = tipoDocumentoRepository.findById(tipoDocumentoId)
		.orElseThrow(() -> new ResourceNotFoundException("TipoDocumento not found for this id :: " + tipoDocumentoId));
		
		tipoDocumentoRepository.delete(tipoDocumento);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
