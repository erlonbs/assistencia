package com.devsuperior.assistencia.recources;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.devsuperior.assistencia.dto.ServicoDTO;
import com.devsuperior.assistencia.services.ServicoService;

@RestController
@RequestMapping(value = "/servicos")
public class ServicoResource {

	@Autowired
	private ServicoService service;

	@GetMapping(value = "/{id}")
	public ResponseEntity<ServicoDTO> findById(@PathVariable Long id) {
		ServicoDTO dto = service.findById(id);
		return ResponseEntity.ok(dto);
	}

	@GetMapping
	public ResponseEntity<List<ServicoDTO>> findAll() {
		List<ServicoDTO> lista = service.findAll();
		return ResponseEntity.ok(lista);
	}

	@PostMapping
	public ResponseEntity<ServicoDTO> insert(@RequestBody ServicoDTO dto) {
		dto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}
	
	@PutMapping(value = "{id}")
	public ResponseEntity<ServicoDTO>update(@RequestBody ServicoDTO dto,@PathVariable Long id){
		dto= service.update(dto, id);
		return ResponseEntity.ok().body(dto);
	}

}
