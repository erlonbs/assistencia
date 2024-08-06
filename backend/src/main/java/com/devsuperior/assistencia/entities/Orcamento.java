package com.devsuperior.assistencia.entities;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity(name="tb_orcamento")

public class Orcamento implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long orcamentoId ;	
		
	private String defeito;
	private BigDecimal valor;
	private Boolean autorizado;
	private String descricao;	

	
	
	@OneToOne(cascade=CascadeType.REFRESH)
    @JoinColumn(name = "dispositivo_id")
    private Dispositivo dispositivo;
	
	
	@OneToMany( mappedBy = "orcamento" , fetch = FetchType.LAZY , cascade = CascadeType.ALL)  // remove o orçamento ao remover dispositivo
	@JsonIgnore
	private List<Servico> servicos = new ArrayList<>();
	
	@Column(name = "dispositivo_name")
    private String dispositivoName;	
	
	
	private String clienteName;
	
	@JoinColumn(name= "cliente_id")
	private Long clienteId;


	public Orcamento() {
		this.dispositivo = new Dispositivo();
		
	}
	

	public Orcamento(Long orcamentoId,  Dispositivo dispositivo, String dispositivoName, String clienteName, String defeito, String descricao, BigDecimal valor, Boolean autorizado, Long clienteId ,  List<Servico> servicos
			) {
	
	    this.orcamentoId=orcamentoId;
	    this.dispositivo=dispositivo;	
	    this.dispositivoName=dispositivoName;
		this.defeito = defeito;
		this.descricao = descricao; 
		this.valor = valor;
		this.autorizado = autorizado;
		this.clienteId=clienteId;
		this.servicos=servicos;
	
		
		
	}

	public void setOrcamentoId(Long orcamentoId) {
		this.orcamentoId=orcamentoId;
	}


	public Long getOrcamentoId() {
		return orcamentoId;
	}


	public Boolean getAutorizado() {
		return autorizado;
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
	
	public Dispositivo getDispositivo() {		
	return dispositivo;
		
	}


	public void setDispositivo(Dispositivo dispositivo) {
	  if(dispositivo!=null)
		this.dispositivo = dispositivo;
		
		
	}
	
	public Long getDispotivoId() {
		return dispositivo.getDispositivoId();
	}
	
	public void setDispositivoId(Long dispositivoId) {
		if(this.dispositivo == null) {
			this.dispositivo=new Dispositivo();
		}
		dispositivo.setDispositivoId(dispositivoId);
	}


	public String getDispositivoName() {
		return dispositivoName;
	}


	public void setDispositivoName(String  dispositivoName) {
		this.dispositivoName = dispositivoName;
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
	
	public List< Servico> getServicos(){
		return servicos;
	}
	
	public void setServicos(List <Servico> servicos){
		this.servicos=servicos;
	}
	
}
