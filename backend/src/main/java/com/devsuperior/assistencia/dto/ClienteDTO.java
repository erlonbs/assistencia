package com.devsuperior.assistencia.dto;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

import com.devsuperior.assistencia.entities.Cliente;

public class ClienteDTO {

	private Long clienteId;
	private String clienteName;
	private String address;
	private String telephone;
	private String cpf;


	private Set<DispositivoDTO> dispositivos = new HashSet<>();;

	public ClienteDTO() {
		
	}

	public ClienteDTO(Long clienteId, String clienteName, String address, String telephone, String cpf) {

		this.clienteId = clienteId;
		this.clienteName = clienteName;
		this.address = address;
		this.telephone = telephone;
		this.cpf = cpf;

	}

	public ClienteDTO(Cliente entity) {

		clienteId = entity.getClienteId();
		clienteName = entity.getClienteName();
		address = entity.getAddress();
		telephone = entity.getTelephone();
		cpf = entity.getCpf();
		dispositivos = entity.getDispositivos().stream().map(Dispositivo -> new DispositivoDTO(Dispositivo)).collect(Collectors.toSet());
		

	}

	public Long getClienteId() {
		return clienteId;
	}

	public void setClienteId(Long id) {
		this.clienteId = id;
	}

	public String getClienteName() {
		return clienteName;
	}

	public void setClienteName(String clienteName) {
		this.clienteName = clienteName;
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

	public Set<DispositivoDTO> getDispositivos() {
		return dispositivos;
	}

	public void setDispositivos(Set<DispositivoDTO> dispositivos) {
		this.dispositivos = dispositivos;
	}

}
