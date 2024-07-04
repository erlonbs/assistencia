package com.devsuperior.assistencia.entities;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "tb_cliente")
public class Cliente implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long clienteId;
	private String clienteName;
	private String address;
	private String telephone;
	private String cpf;
																// será removido também dispositivo ao remover cliente				
	@OneToMany(mappedBy = "cliente", fetch = FetchType.EAGER , cascade = CascadeType.DETACH, orphanRemoval = true) //Pegando todos os dados do dispositivo do cliente usando EAGER
	private Set<Dispositivo> dispositivos = new HashSet<>();

	public Cliente() {
		
	}

	public Cliente(Long clienteId, String clienteName, String address, String telephone, String cpf
			) {

		this.clienteId = clienteId;
		this.clienteName = clienteName;
		this.address = address;
		this.telephone = telephone;
		this.cpf = cpf;
	

	}

	public Set<Dispositivo> getDispositivos() {
		return dispositivos;
	}

	public void setDispositivos(Set<Dispositivo> dispositivos) {
		this.dispositivos = dispositivos;
	}

	public Long getClienteId() {
		return clienteId;
	}

	public void setClienteId(Long clienteId) {
		this.clienteId = clienteId;
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

	public void setAddress(String adress) {
		this.address = adress;
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

	@Override
	public int hashCode() {
		return Objects.hash(clienteId);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Cliente other = (Cliente) obj;
		return Objects.equals(clienteId, other.clienteId);
	}

}
