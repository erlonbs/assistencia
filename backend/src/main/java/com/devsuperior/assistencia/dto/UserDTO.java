package com.devsuperior.assistencia.dto;

import com.devsuperior.assistencia.entities.User;

public class UserDTO {
	
	private Long id;
	private String name;
	private String telephone;
	private String address;
	private String cpf;

	
	public UserDTO() {
		
	}


	public UserDTO(Long id, String name, String telephone, String address, String cpf) {
		
		this.id = id;
		this.name = name;
		this.telephone = telephone;
		this.address = address;
		this.cpf = cpf;
	}
	
	public UserDTO(User entity) {
		
		id=entity.getId();
		name=entity.getName();
		telephone=entity.getTelephone();
		address=entity.getTelephone();
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


	public String getTelephone() {
		return telephone;
	}


	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getCpf() {
		return cpf;
	}


	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	
	
	
}


