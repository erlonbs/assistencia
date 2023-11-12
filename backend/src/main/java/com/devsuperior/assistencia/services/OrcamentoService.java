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

import com.devsuperior.assistencia.dto.OrcamentoDTO;
import com.devsuperior.assistencia.entities.Orcamento;
import com.devsuperior.assistencia.recources.exceptions.DatabaseException;
import com.devsuperior.assistencia.recources.exceptions.ResourceNotFoundException;
import com.devsuperior.assistencia.repositories.OrcamentoRepository;

@Service
public class OrcamentoService {
	
	@Autowired
	private OrcamentoRepository repository;
	
	@Transactional
	public OrcamentoDTO findById(Long id) {
		
		Optional<Orcamento> orcamento =repository.findById(id);
		Orcamento entity = orcamento.orElseThrow(()-> new ResourceNotFoundException("id not found"));
		return new OrcamentoDTO(entity);
	}
	

	public List<OrcamentoDTO> findAll() {

		List<Orcamento> lista = repository.findAll();

		return lista.stream().map(x -> new OrcamentoDTO(x)).collect(Collectors.toList());

	}
	
	@Transactional
	public OrcamentoDTO update(Long id, OrcamentoDTO dto) {
		
		try {
			
			Orcamento entity = repository.getReferenceById(id);
			entity.setAutorizado(dto.isAutorizado());
			entity.setDefeito(dto.getDefeito());
			entity.setDescricao(dto.getDescricao());
			entity.setValor(dto.getValor());
			entity=repository.save(entity);
			return new OrcamentoDTO(entity);
			
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		}
		
	}
	
	@Transactional
	public OrcamentoDTO insert( OrcamentoDTO dto) {
		
		Orcamento entity = new Orcamento();
			
		entity.setAutorizado(dto.isAutorizado());
		entity.setDefeito(dto.getDefeito());
		entity.setDescricao(dto.getDescricao());
		entity.setValor(dto.getValor());
		entity = repository.save(entity);
		return new OrcamentoDTO(entity);
	}
	
	
	public void delete(Long id){
		try {
			repository.deleteById(id);

		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		}

		catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Integrity violation");
		}
	
		
		
	}

}
