package com.devsuperior.assistencia.dto;

import com.devsuperior.assistencia.entities.Servico;

public class ServicoDTO {

	private Long id;
	private String descricao;
	private double valor;
	private String pagamento;
	private String servicoRealizado;	
	private Long codigoOrcamento;
	private String clienteName;
	private Long clienteId;
	private Long dispositivoId;
	
	public ServicoDTO() {
		
	}

	public ServicoDTO(Long id, Long codigoOrcamento, String clienteName, String descricao, String servicoRealizado, double valor, String pagamento) {

		this.id = id;
		this.descricao = descricao;
		this.servicoRealizado=servicoRealizado;
		this.valor = valor;
		this.pagamento = pagamento;
		this.codigoOrcamento=codigoOrcamento;
		this.clienteName=clienteName;
	}
	
	public ServicoDTO(Servico entity) {
		
		id=entity.getId();
		descricao=entity.getDescricao();
		servicoRealizado=entity.getServicoRealizado();
		valor=entity.getValor();
		pagamento=entity.getPagamento();
		codigoOrcamento=entity.getCodigoOrcamento();
		clienteName=entity.getClienteName();
		clienteId=entity.getClienteId();
		dispositivoId=entity.getDispositivoId();
		
		
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public double getValor() {
		return valor;
	}

	public void setValor(double valor) {
		this.valor = valor;
	}

	public String getPagamento() {
		return pagamento;
	}

	public void setPagamento(String pagamento) {
		this.pagamento = pagamento;
	}

	public Long getCodigoOrcamento() {
		return codigoOrcamento;
	}

	public void setCodigoOrcamento(Long codigoOrcamento) {
		this.codigoOrcamento = codigoOrcamento;
	}

	public String getClienteName() {
		return clienteName;
	}

	public void setClienteName(String clienteName) {
		this.clienteName = clienteName;
	}

	public String getServicoRealizado() {
		return servicoRealizado;
	}

	public void setServicoRealizado(String servicoRealizado) {
		this.servicoRealizado = servicoRealizado;
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
		this.dispositivoId = dispositivoId;
	}
	
	
	
}
