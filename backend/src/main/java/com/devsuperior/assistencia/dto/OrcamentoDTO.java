package com.devsuperior.assistencia.dto;

import java.math.BigDecimal;

import com.devsuperior.assistencia.entities.Orcamento;

public class OrcamentoDTO {

	private Long id;
	
	private Long dispositivoId;
	private String dispositivoName;

	private String defeito;
	private BigDecimal valor;
	private Boolean autorizado;
	private String descricao;
	
	private String clienteName;
	private Long clienteId;


	public OrcamentoDTO() {
		
	}
	
	public OrcamentoDTO(Long id , Long dispositivoId , String dispositivoName, String clienteName, String defeito, String descricao, BigDecimal valor, Boolean autorizado, Long clienteId
			) {
		
		this.id = id;
		this.dispositivoId=dispositivoId;
		this.dispositivoName=dispositivoName;
		this.clienteName=clienteName;
		this.defeito = defeito;
		this.descricao = descricao;
		this.valor = valor;
		this.autorizado = autorizado;
		this.clienteId=clienteId;
	
		
		
	
	}

	
	public OrcamentoDTO(Orcamento entity) {
		
		id=entity.getId();
		dispositivoId=entity.getDispositivoId();
		dispositivoName=entity.getDispositivoName();
		clienteName=entity.getClienteName();
		defeito=entity.getDefeito();
		descricao=entity.getDescricao();
		valor=entity.getValor();
		autorizado=entity.getAutorizado();
		clienteId= entity.getClienteId();
	
		
		
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

	public BigDecimal getValor() {
		return valor;
	}

	public void setValor(BigDecimal valor) {
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

	public Long getDispositivoId() {
		return dispositivoId;
	}

	public void setDispositivoId(Long dispositivoId) {
		this.dispositivoId = dispositivoId;
	}

	public String getDispositivoName() {
		return dispositivoName;
	}

	public void setDispositivoName(String nomeDispositivo) {
		this.dispositivoName = nomeDispositivo;
	}

	public String getClienteName() {
		return clienteName;
	}

	public void setClienteName(String clienteName) {
		this.clienteName = clienteName;
	}

	public Long getClienteId() {
		return clienteId;
	}

	public void setClienteId(Long clienteId) {
		this.clienteId = clienteId;
	}

	
	
	
	
	
}
