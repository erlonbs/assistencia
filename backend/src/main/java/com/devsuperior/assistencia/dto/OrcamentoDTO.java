package com.devsuperior.assistencia.dto;

import com.devsuperior.assistencia.entities.Orcamento;

public class OrcamentoDTO {

	private Long id;

	private String defeito;
	private Long valor;
	private Boolean autorizado;
	private String descricao;


	public OrcamentoDTO() {
		
	}
	
	public OrcamentoDTO(Long id, String defeito, Long valor, Boolean autorizado,
			String descricao) {
		
		this.id = id;
	
		this.defeito = defeito;
		this.valor = valor;
		this.autorizado = autorizado;
		this.descricao = descricao;
	
	}

	
	public OrcamentoDTO(Orcamento entity) {
		
		id=entity.getId();
		defeito=entity.getDefeito();
		valor=entity.getValor();
		autorizado=entity.getAutorizado();
		descricao=entity.getDescricao();
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	

	public String getDefeito() {
		return defeito;
	}

	public void setDefeito(String defeito) {
		this.defeito = defeito;
	}

	public Long getValor() {
		return valor;
	}

	public void setValor(Long valor) {
		this.valor = valor;
	}

	public boolean isAutorizado() {
		return autorizado;
	}

	public void setAutorizado(Boolean autorizado) {
		this.autorizado = autorizado;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
	
	
	
	
}
