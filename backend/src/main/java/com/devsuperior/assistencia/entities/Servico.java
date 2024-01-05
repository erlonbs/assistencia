package com.devsuperior.assistencia.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tb_servico")
public class Servico implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String descricao;
	private double valor;
	private String pagamento;
	private Long codigoOrcamento;
	private String clienteName;
	private Long clienteId;
	private String servicoRealizado;
	private Long dispositivoId;
	
	public Servico() {
		
	}

	public Servico(Long id, Long codigoOrcamento, String clienteName,Long clienteId, String descricao,String servicoRealizado, double valor, String pagamento) {
	
		this.id = id;
		this.codigoOrcamento=codigoOrcamento;
		this.clienteName=clienteName;
		this.descricao = descricao;
		this.servicoRealizado=servicoRealizado;
		this.valor = valor;
		this.pagamento = pagamento;
		this.clienteId=clienteId;
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

	public static long getSerialversionuid() {
		return serialVersionUID;
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
	
	public Long getClienteId() {
		return clienteId;
	}
	
	public void setClienteId(Long clienteId) {
		this.clienteId=clienteId;
	}

	public String getServicoRealizado() {
		return servicoRealizado;
	}

	public void setServicoRealizado(String servicoRealizado) {
		this.servicoRealizado = servicoRealizado;
	}

	
	public Long getDispositivoId() {
		return dispositivoId;
	}

	public void setDispositivoId(Long dispositivoId) {
		this.dispositivoId = dispositivoId;
	}

	
	
	
}
