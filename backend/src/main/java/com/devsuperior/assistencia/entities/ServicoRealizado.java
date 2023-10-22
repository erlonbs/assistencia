package com.devsuperior.assistencia.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tb_servico_realizado")
public class ServicoRealizado implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String descricao;
	private Long valor;
	private String pagamento;
	
	public ServicoRealizado() {
		
	}

	public ServicoRealizado(Long id, String descricao, Long valor, String pagamento) {
	
		this.id = id;
		this.descricao = descricao;
		this.valor = valor;
		this.pagamento = pagamento;
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

	public Long getValor() {
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

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
	
	
}
