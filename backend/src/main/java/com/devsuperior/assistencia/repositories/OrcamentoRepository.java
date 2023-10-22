package com.devsuperior.assistencia.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devsuperior.assistencia.entities.Orcamento;

@Repository
public interface OrcamentoRepository extends JpaRepository<Orcamento, Long>{

	
}
