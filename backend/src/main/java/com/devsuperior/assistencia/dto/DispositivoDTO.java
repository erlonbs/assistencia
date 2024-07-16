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
	private String clienteName;
	private Long clienteId;
	private Long orcamentoId;

	

	
	public DispositivoDTO() {
	
	}
		

	public DispositivoDTO(Long dispositivoId, String dispositivoName, String clienteName, String marca, String modelo, String cor,
			String serial, String descricao, Long clienteId, Long orcamentoId) {

		this.dispositivoId = dispositivoId;
		this.dispositivoName = dispositivoName;
		this.marca = marca;
		this.modelo = modelo;
		this.cor = cor;
		this.serial = serial;
		this.descricao = descricao;
		this.clienteName=clienteName;
		this.clienteId=clienteId;
		this.orcamentoId=orcamentoId;

	}

	public DispositivoDTO(Dispositivo entity) {

		this.dispositivoId = entity.getDispositivoId();
		this.dispositivoName = entity.getDispositivoName();
		this.marca = entity.getMarca();
		this.modelo = entity.getModelo();
		this.cor = entity.getCor();
		this.serial = entity.getSerial();
		this.descricao = entity.getDescricao();			
		this.clienteName=entity.getCliente().getClienteName();
		this.clienteId = entity.getCliente().getClienteId();
	
	}

	public Long getDispositivoId() {
		return dispositivoId;
	}

	public void setDispositivoId(Long id) {
		this.dispositivoId = id;
	}

	public String getDispositivoName() {
		return dispositivoName;
	}

	public void setDispositivoName(String name) {
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

	public Long getClienteId() {
		return clienteId;
	}

	public void setClienteId(Long clienteId) {
		if (clienteId != null) {
			this.clienteId = clienteId;
		}

	}

	public String getClienteName() {
		return clienteName;
	}

	public void setClienteName(String clienteName) {
		this.clienteName = clienteName;
	}

	public Long getOrcamentoId() {
		
		return orcamentoId;
	}

	public void setOrcamentoId(Long orcamentoId) {				
			this.orcamentoId=orcamentoId;
		}
	}


