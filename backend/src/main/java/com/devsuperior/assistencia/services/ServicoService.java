package com.devsuperior.assistencia.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.assistencia.dto.ServicoDTO;
import com.devsuperior.assistencia.entities.Servico;
import com.devsuperior.assistencia.recources.exceptions.ResourceNotFoundException;
import com.devsuperior.assistencia.repositories.ServicoRepository;

@Service
public class ServicoService {

	@Autowired
	private ServicoRepository repository;
	
	@Transactional
	public ServicoDTO findById(Long id){
		Optional<Servico> servico = repository.findById(id);
		Servico entity = servico.orElseThrow(() -> new ResourceNotFoundException("Id not found"));
		return new ServicoDTO(entity);
		
	}
	
	@Transactional
	public List< ServicoDTO> findAll() {
		List<Servico> lista = repository.findAll();
		return lista.stream().map(x -> new ServicoDTO(x)).collect(Collectors.toList());
	}
	
	@Transactional 	
	public ServicoDTO insert(ServicoDTO dto) {
		
		Servico entity = new Servico();
		
		entity.setCodigoOrcamento(dto.getCodigoOrcamento());
		entity.setClienteName(dto.getClienteName());
		entity.setDescricao(dto.getDescricao());
		entity.setServicoRealizado(dto.getServicoRealizado());
		entity.setValor(dto.getValor());
		entity.setPagamento(dto.getPagamento());
	
		entity=repository.save(entity);
		return new ServicoDTO(entity);
	}
}
