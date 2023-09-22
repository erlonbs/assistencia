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

import com.devsuperior.assistencia.dto.UserDTO;
import com.devsuperior.assistencia.entities.User;
import com.devsuperior.assistencia.recources.exceptions.DatabaseException;
import com.devsuperior.assistencia.recources.exceptions.ResourceNotFoundException;
import com.devsuperior.assistencia.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository repository;
		
	@Transactional
	public UserDTO findById(Long id) {
		
		Optional<User> user = repository.findById(id);
		User entity = user.orElseThrow(() -> new ResourceNotFoundException("Id not found"));
		return new UserDTO(entity);
	}		
	

	public List<UserDTO> findAll() {

		List<User> lista = repository.findAll();

		return lista.stream().map(x -> new UserDTO(x)).collect(Collectors.toList());

	}

	@Transactional
	public UserDTO insert(UserDTO dto) {

		User entity = new User();
		entity.setName(dto.getName());
		entity.setAddress(dto.getAddress());
		entity.setCpf(dto.getCpf());
		entity.setTelephone(dto.getTelephone());
		entity = repository.save(entity);
		return new UserDTO(entity);

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
	public UserDTO update(Long id, UserDTO dto) {

		try {

			User entity = repository.getReferenceById(id);
			entity.setName(dto.getName());
			entity.setAddress(dto.getAddress());
			entity.setCpf(dto.getCpf());
			entity.setTelephone(dto.getTelephone());
			entity = repository.save(entity);
			return new UserDTO(entity);

		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		}
	}
}
