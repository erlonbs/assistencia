package com.devsuperior.assistencia.entities;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;




@Entity
@Table(name="tb_servico")
public class Servico implements Serializable {
	private static final long serialVersionUID = 1L;
		

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long servicoId;
	private String descricao;
	private double valor;
	private String pagamento;
	private String clienteName;
	private Long clienteId;
	private String servicoRealizado;
	private Long dispositivoId;
	
	
	@ManyToOne(cascade=CascadeType.REFRESH)
    @JoinColumn(name = "orcamento_id")		
    private Orcamento orcamento;
	
	public Servico() {
		this.orcamento= new Orcamento();
	}

	public Servico(Long servicoId, Orcamento orcamento, String clienteName,Long clienteId, String descricao,String servicoRealizado, double valor, String pagamento, Long dispositivoId) {
	
		this.servicoId = servicoId;	
		this.orcamento=orcamento;
		this.clienteName=clienteName;
		this.descricao = descricao;
		this.servicoRealizado=servicoRealizado;
		this.valor = valor;
		this.pagamento = pagamento;
		this.clienteId=clienteId;
		this.dispositivoId=dispositivoId;
		this.orcamento=orcamento;
	}

	public Long getServicoId() {
		return servicoId;
	}

	public void setServicoId(Long id) {
		this.servicoId = id;
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

	public Orcamento getOrcamento() {
	
	return orcamento;
	}

	public void setOrcamento(Orcamento orcamento) {
		if(orcamento!=null)
		this.orcamento = orcamento;
	}

	
	public Long getOrcamentoId() {

		return this.orcamento.getOrcamentoId();
	}
	
	
	public void setOrcamentoId(Long orcamentoId) {
		if(orcamentoId!=null)
		this.orcamento.setOrcamentoId(orcamentoId);
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
