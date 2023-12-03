package com.devsuperior.assistencia.recources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.assistencia.dto.ServicoDTO;
import com.devsuperior.assistencia.services.ServicoService;

@RestController
@RequestMapping(value="/servicos")
public class ServicoResource {

	@Autowired
	private ServicoService service;
	
	@GetMapping(value="/{id}")
	public ResponseEntity<ServicoDTO> findById(@PathVariable Long id){
		ServicoDTO dto = service.findById(id);
		return ResponseEntity.ok(dto);
	}
	
	@GetMapping
	public ResponseEntity <List<ServicoDTO>> findAll(){
		List <ServicoDTO> lista = service.findAll();
		return ResponseEntity.ok(lista);
	}
}
