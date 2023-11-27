package com.devsuperior.assistencia.entities;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="tb_orcamento")
public class Orcamento implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id ;
	
		
	private String defeito;
	private BigDecimal valor;
	private Boolean autorizado;
	private String descricao;	
	

	
	@Column(name = "dispositivo_id")
    private Long dispositivoId;
	
	@Column(name = "dispositivo_name")
    private String dispositivoName;	
	
	public Orcamento() {
		
	}
	

	public Orcamento(Long id,  Long dispositivoId, String dispositivoName, String defeito, String descricao, BigDecimal valor, Boolean autorizado
			) {
	
	    this.id=id;
	    this.dispositivoId=dispositivoId;	
	    this.dispositivoName=dispositivoName;
		this.defeito = defeito;
		this.descricao = descricao;
		this.valor = valor;
		this.autorizado = autorizado;
		
		
	}



	public Long getId() {
		return id;
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
	
	public Long getDispositivoId() {
		return dispositivoId;
	}


	public void setDispositivoId(Long dispositivo) {
		this.dispositivoId = dispositivo;
	}


	public String getDispositivoName() {
		return dispositivoName;
	}


	public void setDispositivoName(String  dispositivoName) {
		this.dispositivoName = dispositivoName;
	}


	

	
	
	
}
