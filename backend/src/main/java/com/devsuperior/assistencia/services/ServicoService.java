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

import com.devsuperior.assistencia.dto.ServicoDTO;
import com.devsuperior.assistencia.entities.Orcamento;
import com.devsuperior.assistencia.entities.Servico;

import com.devsuperior.assistencia.repositories.ServicoRepository;
import com.devsuperior.assistencia.resources.exceptions.DatabaseException;
import com.devsuperior.assistencia.resources.exceptions.ResourceNotFoundException;

@Service
public class ServicoService {

	@Autowired
	private ServicoRepository repository;
	
	

	@Transactional
	public ServicoDTO findById(Long id) {
		Optional<Servico> servico = repository.findById(id);
		Servico entity = servico.orElseThrow(() -> new ResourceNotFoundException("Id not found"));
		return new ServicoDTO(entity);

	}

	@Transactional
	public List<ServicoDTO> findAll() {
		List<Servico> lista = repository.findAll();
		return lista.stream().map(x -> new ServicoDTO(x)).collect(Collectors.toList());
	}
	

	@Transactional
	public ServicoDTO insert(ServicoDTO dto) {
	
		Servico entity = new Servico();
		
		if(entity != null ) {		
		
		entity.setClienteName(dto.getClienteName());
		entity.setClienteId(dto.getClienteId());
		entity.setDescricao(dto.getDescricao());
		entity.setServicoRealizado(dto.getServicoRealizado());
		entity.setValor(dto.getValor());
		entity.setPagamento(dto.getPagamento());
		entity.setDispositivoId(dto.getDispositivoId());		
																//Verificar se orcamentoId é null
		if( dto.getOrcamentoId() !=null) {
			Orcamento orcamento = new Orcamento();
			if(orcamento !=null ) {
			orcamento.setOrcamentoId(dto.getOrcamentoId());
			entity.setOrcamentoId(orcamento.getOrcamentoId());
		
			}
		}
		    
		entity = repository.save(entity);
		
		}
		return new ServicoDTO(entity);
		    
	
	}

	@Transactional
	public ServicoDTO update(ServicoDTO dto, Long id) {

		try {
			Servico entity = repository.getReferenceById(id);

			entity.setOrcamento(dto.getOrcamento());
			entity.setClienteName(dto.getClienteName());
			entity.setDescricao(dto.getDescricao());
			entity.setServicoRealizado(dto.getServicoRealizado());
			entity.setValor(dto.getValor());
			entity.setPagamento(dto.getPagamento());
			entity.setDispositivoId(dto.getDispositivoId());
			
			if( dto.getOrcamentoId() !=null) {
				Orcamento orcamento = new Orcamento();
				if(orcamento !=null ) {
				orcamento.setOrcamentoId(dto.getOrcamentoId());
				entity.setOrcamentoId(orcamento.getOrcamentoId());
			
				}
			}

			entity = repository.save(entity);
			return new ServicoDTO(entity);

		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		}
	}


	public void delete(Long id) {
		try {

			repository.deleteById(id);

		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("id not found " + id);
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Integration violation");

		}
	}
}
