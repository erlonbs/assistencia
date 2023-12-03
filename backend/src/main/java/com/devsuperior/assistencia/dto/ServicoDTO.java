package com.devsuperior.assistencia.dto;

import com.devsuperior.assistencia.entities.Servico;

public class ServicoDTO {

	private Long id;
	private String descricao;
	private double valor;
	private String pagamento;
	
	private Long codigoOrcamento;
	private String nomeCliente;
	
	public ServicoDTO() {
		
	}

	public ServicoDTO(Long id, Long codigoOrcamento, String nomeCliente, String descricao, double valor, String pagamento) {

		this.id = id;
		this.descricao = descricao;
		this.valor = valor;
		this.pagamento = pagamento;
		this.codigoOrcamento=codigoOrcamento;
		this.nomeCliente=nomeCliente;
	}
	
	public ServicoDTO(Servico entity) {
		
		id=entity.getId();
		descricao=entity.getDescricao();
		valor=entity.getValor();
		pagamento=entity.getPagamento();
		codigoOrcamento=entity.getCodigoOrcamento();
		nomeCliente=entity.getNomeCliente();
		
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

	public void setValor(Long valor) {
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

	public String getNomeCliente() {
		return nomeCliente;
	}

	public void setNomeCliente(String nomeCliente) {
		this.nomeCliente = nomeCliente;
	}
	
	
	
}
