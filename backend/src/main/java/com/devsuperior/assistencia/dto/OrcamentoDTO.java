package com.devsuperior.assistencia.dto;

import java.math.BigDecimal;

import com.devsuperior.assistencia.entities.Dispositivo;
import com.devsuperior.assistencia.entities.Orcamento;

public class OrcamentoDTO {

	private Long orcamentoId;
	
	private String dispositivoName;

	private String defeito;
	private BigDecimal valor;
	private Boolean autorizado=false;
	private String descricao;
	
	private String clienteName;
	private Long clienteId;
	private Long dispositivoId;
//	private Dispositivo dispositivo;
	

	public OrcamentoDTO() {
		
	}
	
	public OrcamentoDTO(Long orcamentoId  ,Long dispositivoId, String dispositivoName, String clienteName, String defeito, String descricao, BigDecimal valor, Boolean autorizado, Long clienteId, Dispositivo dispositivo 
			) {
		
		this.orcamentoId=orcamentoId;
	
		this.dispositivoName=dispositivoName;
		this.clienteName=clienteName;
		this.defeito = defeito;
		this.descricao = descricao;
		this.valor = valor;
		this.autorizado = autorizado;
		this.clienteId=clienteId;
		this.dispositivoId=dispositivoId;
		//this.dispositivo=dispositivo;
		
		
	
	}

	
	public OrcamentoDTO(Orcamento entity) {
		
		orcamentoId=entity.getOrcamentoId();
		dispositivoName=entity.getDispositivo().getDispositivoName();
		clienteName=entity.getClienteName();
		defeito=entity.getDefeito();
		descricao=entity.getDescricao();
		valor=entity.getValor();
		autorizado=entity.isAutorizado();
		clienteId= entity.getDispositivo().getCliente().getClienteId();
		dispositivoId=entity.getDispositivo().getDispositivoId();
		//dispositivo=entity.getDispositivo();
			
		
		
	}


	public Long getOrcamentoIdId() {
		return orcamentoId;
	}

	public void setOrcamentoId(Long orcamentoId) {
		this.orcamentoId = orcamentoId;
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
	

	
	
	public Long getDispositivoId() {
		 			
		return dispositivoId;
	}
	
	public void setDispositivoId(Long dispositivoId) {
	
			this.dispositivoId=dispositivoId;
			}

	/*
	
	public Dispositivo getDispositivo() {
		return dispositivo;
	}

	public void setDispositivo(Dispositivo dispositivo) {
		this.dispositivo = dispositivo;
	}
*/
	
	
	
	
	
}
