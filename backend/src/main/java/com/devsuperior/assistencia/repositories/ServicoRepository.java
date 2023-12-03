package com.devsuperior.assistencia.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devsuperior.assistencia.entities.Servico;

@Repository
public interface ServicoRepository extends JpaRepository<Servico, Long> {

}
