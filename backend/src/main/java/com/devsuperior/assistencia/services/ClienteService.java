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

import com.devsuperior.assistencia.dto.ClienteDTO;
import com.devsuperior.assistencia.entities.Cliente;
import com.devsuperior.assistencia.recources.exceptions.DatabaseException;
import com.devsuperior.assistencia.recources.exceptions.ResourceNotFoundException;
import com.devsuperior.assistencia.repositories.ClienteRepository;

@Service
public class ClienteService {

	@Autowired
	private ClienteRepository repository;
		
	@Transactional
	public ClienteDTO findById(Long id) {
		
		Optional<Cliente> client = repository.findById(id);
		Cliente entity = client.orElseThrow(() -> new ResourceNotFoundException("Id not found"));
		return new ClienteDTO(entity);
	}		
	

	public List<ClienteDTO> findAll() {

		List<Cliente> lista = repository.findAll();

		return lista.stream().map(x -> new ClienteDTO(x)).collect(Collectors.toList());

	}

	@Transactional
	public ClienteDTO insert(ClienteDTO dto) {
		
	    Cliente entity = new Cliente();
	    if(dto !=null) {
		entity.setClienteName(dto.getClienteName());
		entity.setAddress(dto.getAddress());
		entity.setCpf(dto.getCpf());
		entity.setTelephone(dto.getTelephone());		
		entity = repository.save(entity);
	    }
	    if (entity !=null) {
	    	return new ClienteDTO(entity);
	    	
	    } else 
	    	return null;
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
	public ClienteDTO update(Long id, ClienteDTO dto) {

		try {

			Cliente entity = repository.getReferenceById(id);
			
			entity.setClienteName(dto.getClienteName());
			entity.setAddress(dto.getAddress());
			entity.setCpf(dto.getCpf());
			entity.setTelephone(dto.getTelephone());
			entity = repository.save(entity);
			return new ClienteDTO(entity);

		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		}
	}



}
