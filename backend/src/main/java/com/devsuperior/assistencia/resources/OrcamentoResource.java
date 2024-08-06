package com.devsuperior.assistencia.resources;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.devsuperior.assistencia.dto.OrcamentoDTO;
import com.devsuperior.assistencia.services.OrcamentoService;

@RestController
@RequestMapping(value = "/orcamentos")
public class OrcamentoResource {

	@Autowired
	private OrcamentoService service;
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<OrcamentoDTO> findById(@PathVariable Long id) {
		OrcamentoDTO dto = service.findById(id);
		return ResponseEntity.ok().body(dto) ; 
	}
	
	@GetMapping
	public ResponseEntity <List<OrcamentoDTO>>findAll(){
		List<OrcamentoDTO> dto = service.findAll();
		return ResponseEntity.ok().body(dto);
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<OrcamentoDTO> update(@PathVariable Long id, @RequestBody OrcamentoDTO dto) {
		dto = service.update(id, dto);
		return ResponseEntity.ok().body(dto);

	}
	

	@PostMapping
	public ResponseEntity <OrcamentoDTO> insert(@RequestBody OrcamentoDTO dto) {
		dto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(dto.getOrcamentoId()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
	
}
