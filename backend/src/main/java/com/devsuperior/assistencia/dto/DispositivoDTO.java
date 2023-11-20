package com.devsuperior.assistencia.dto;

import com.devsuperior.assistencia.entities.Dispositivo;

public class DispositivoDTO {

	private Long dispositivoId;
	private String dispositivoName;
	private String marca;
	private String modelo;
	private String cor;
	private String serial;
	private String descricao;
	
	
	
	public DispositivoDTO() {
		
	}

	public DispositivoDTO(Long dispositivoId, String dispositivoName, String marca, String modelo, String cor, String serial,
			String descricao) {
		
		this.dispositivoId = dispositivoId;
		this.dispositivoName = dispositivoName;
		this.marca = marca;
		this.modelo = modelo;
		this.cor = cor;
		this.serial = serial;
		this.descricao = descricao;
	
	}
	
	public DispositivoDTO(Dispositivo entity) {
		
		dispositivoId=entity.getId();
		dispositivoName=entity.getName();
		marca=entity.getMarca();
		modelo=entity.getModelo();
		cor=entity.getCor();
		serial=entity.getSerial();
		descricao=entity.getDescricao();
		
	}

	public Long getId() {
		return dispositivoId;
	}

	public void setId(Long id) {
		this.dispositivoId = id;
	}

	public String getName() {
		return dispositivoName;
	}

	public void setName(String name) {
		this.dispositivoName = name;
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
