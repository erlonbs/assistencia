package com.devsuperior.assistencia.entities;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity(name="tb_orcamento")
public class Orcamento implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id ;
	
		
	private String defeito;
	private Long valor;
	private Boolean autorizado;
	private String descricao;
	
	@OneToOne(cascade={CascadeType.DETACH})
	@JoinColumn(name = "dispositivo_id")
    private Dispositivo dispositivo;
	
	
	public Orcamento() {
		
	}
	

	public Orcamento(Long id, String defeito, Long valor, Boolean autorizado,
			String descricao) {
	
	    this.id=id;
		this.defeito = defeito;
		this.valor = valor;
		this.autorizado = autorizado;
		this.descricao = descricao;
	//	this.dispositivo=dispositivo;
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


	public Long getValor() {
		return valor;
	}


	public void setValor(Long valor) {
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
	
	
	
}
