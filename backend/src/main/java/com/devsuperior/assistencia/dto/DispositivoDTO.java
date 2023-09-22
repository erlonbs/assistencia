package com.devsuperior.assistencia.dto;

import com.devsuperior.assistencia.entities.Dispositivo;

public class DispositivoDTO {

	private Long id;
	private String name;
	private String marca;
	private String modelo;
	private String cor;
	private String serial;
	private String descricao;
	//private Orcamento orcamento;
	
	
	public DispositivoDTO() {
		
	}

	public DispositivoDTO(Long id, String name, String marca, String modelo, String cor, String serial,
			String descricao/*, Orcamento orcamento*/) {
		
		this.id = id;
		this.name = name;
		this.marca = marca;
		this.modelo = modelo;
		this.cor = cor;
		this.serial = serial;
		this.descricao = descricao;
	//	this.orcamento=orcamento;
	}
	
	public DispositivoDTO(Dispositivo entity) {
		
		id=entity.getId();
		name=entity.getName();
		marca=entity.getMarca();
		modelo=entity.getModelo();
		cor=entity.getCor();
		serial=entity.getSerial();
		descricao=entity.getDescricao();
		//orcamento=entity.getOrcamento();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public String getModelo() {
		return modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
	}

	public String getCor() {
		return cor;
	}

	public void setCor(String cor) {
		this.cor = cor;
	}

	public String getSerial() {
		return serial;
	}

	public void setSerial(String serial) {
		this.serial = serial;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
	
}
