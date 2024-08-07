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

import com.devsuperior.assistencia.dto.DispositivoDTO;
import com.devsuperior.assistencia.services.DispositivoService;

@RestController
@RequestMapping(value = "/dispositivos")
public class DispositivoResource {

	@Autowired
	private DispositivoService service;
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<DispositivoDTO> findById(@PathVariable Long id) {
		DispositivoDTO dto = service.findById(id);
		return ResponseEntity.ok().body(dto) ; 
	}
	
	@GetMapping
	public ResponseEntity <List<DispositivoDTO>>findAll(){
		List<DispositivoDTO> dto = service.findAll();
		return ResponseEntity.ok().body(dto);
	}
	
	@PostMapping
	public ResponseEntity<DispositivoDTO> insert(@RequestBody DispositivoDTO dto, Long clienteId) {

		dto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/id")
				.buildAndExpand(dto.getDispositivoId()).toUri();
		return ResponseEntity.created(uri).body(dto);

}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<DispositivoDTO> update(@PathVariable Long id, @RequestBody DispositivoDTO dto) {
		dto = service.update(id, dto);
		return ResponseEntity.ok().body(dto);

	}
	
	@DeleteMapping(value="/{id}")
	public ResponseEntity <Void> delete(@PathVariable Long id){			
		service.delete(id);
		return ResponseEntity.noContent().build();
		
	}
	
}
