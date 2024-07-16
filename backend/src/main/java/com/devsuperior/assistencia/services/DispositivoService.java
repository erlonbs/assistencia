package com.devsuperior.assistencia.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.assistencia.dto.DispositivoDTO;
import com.devsuperior.assistencia.entities.Cliente;
import com.devsuperior.assistencia.entities.Dispositivo;
import com.devsuperior.assistencia.entities.Orcamento;
import com.devsuperior.assistencia.repositories.DispositivoRepository;
import com.devsuperior.assistencia.resources.exceptions.DatabaseException;
import com.devsuperior.assistencia.resources.exceptions.ResourceNotFoundException;

@Service
public class DispositivoService {

	@Autowired
	private DispositivoRepository repository;
	
	
	@Transactional
	public DispositivoDTO findById(Long id) {

		Optional<Dispositivo> Dispositivo = repository.findById(id);
		Dispositivo entity = Dispositivo.orElseThrow(() -> new ResourceNotFoundException("Id not found"));
		return new DispositivoDTO(entity);
	}

	public List<DispositivoDTO> findAll() {

		List<Dispositivo> lista = repository.findAll();

		return lista.stream().map(x -> new DispositivoDTO(x)).collect(Collectors.toList());

	}

	@Transactional
	public DispositivoDTO insert(DispositivoDTO dto) {
	   
	        // instanticando dispositivo 
	        Dispositivo entity = new Dispositivo();
	        entity.setDispositivoName(dto.getDispositivoName());
	        entity.setMarca(dto.getMarca());
	        entity.setModelo(dto.getModelo());
	        entity.setCor(dto.getCor());
	        entity.setSerial(dto.getSerial());
	        entity.setDescricao(dto.getDescricao());
	        if(dto.getClienteId() !=null) {
	        	Cliente cliente = new Cliente();
	        	cliente.setClienteId(dto.getClienteId());
	        	cliente.setClienteName(dto.getClienteName());
	        	entity.setCliente(cliente);
	        }
	       
	     //   entity.setOrcamentos(dto.getOrcamentos());
	       
	        
	        entity = repository.save(entity);
	
			return new DispositivoDTO(entity);

	}
	   

	public void delete(Long id) {
		try {
			repository.deleteById(id);

		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		}

		catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Integrity violation");
		}
	}

	@Transactional
	public DispositivoDTO update(Long id, DispositivoDTO dto) {

		try {

			Dispositivo entity = repository.getReferenceById(id);
			entity.setDispositivoName(dto.getDispositivoName());
			entity.setMarca(dto.getMarca());
			entity.setModelo(dto.getModelo());
			entity.setCor(dto.getCor());
			entity.setSerial(dto.getSerial());
			entity.setDescricao(dto.getDescricao());
	
			entity = repository.save(entity);
			return new DispositivoDTO(entity);

		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		}
	}
}
