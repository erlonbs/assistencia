package com.devsuperior.assistencia.dto;

import com.devsuperior.assistencia.entities.Cliente;

public class ClienteDTO {

	private Long id;
	private String name;
	private String address;
	private String telephone;
	private String cpf;
	
	public ClienteDTO () {
		
	}

	public ClienteDTO(Long id, String name, String address, String telephone, String cpf) {
	
		this.id = id;
		this.name = name;
		this.address = address;
		this.telephone = telephone;
		this.cpf = cpf;
	}
	
	public ClienteDTO(Cliente entity) {
		
		id=entity.getId();
		name=entity.getName();
		address=entity.getAddress();
		telephone=entity.getTelephone();
		cpf=entity.getCpf();
			
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	
	
	
}
