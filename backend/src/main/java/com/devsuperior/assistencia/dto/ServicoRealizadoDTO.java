package com.devsuperior.assistencia.dto;

import com.devsuperior.assistencia.entities.ServicoRealizado;

public class ServicoRealizadoDTO {

	private Long id;
	private String descricao;
	private double valor;
	private String pagamento;
	
	public ServicoRealizadoDTO() {
		
	}

	public ServicoRealizadoDTO(Long id, String descricao, double valor, String pagamento) {

		this.id = id;
		this.descricao = descricao;
		this.valor = valor;
		this.pagamento = pagamento;
	}
	
	public ServicoRealizadoDTO(ServicoRealizado entity) {
		
		id=entity.getId();
		descricao=entity.getDescricao();
		valor=entity.getValor();
		pagamento=entity.getPagamento();
		
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
	
	
	
}
