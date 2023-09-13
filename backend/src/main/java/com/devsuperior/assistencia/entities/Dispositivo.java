package com.devsuperior.assistencia.entities;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="tb_dispositivo")
public class Dispositivo implements Serializable{	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String marca;
	private String modelo;
	private String cor;
	private String serial;
	private String descricao;
	
	/*
	@OneToOne(cascade={CascadeType.DETACH})
	@JoinColumn(name= "cliente_id")
	private Cliente cliente;

		*/

public Dispositivo() {
	
}


public Dispositivo(Long id, String name, String marca, String modelo, String cor, String serial, String descricao , Cliente cliente) {
	
	
	this.id = id;
	this.name = name;
	this.marca = marca;
	this.modelo = modelo;
	this.cor = cor;
	this.serial = serial;
	this.descricao = descricao;
	//this.cliente=cliente;

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

/*
public Cliente getClient() {
	return cliente;
}


public void setClient(Cliente cliente) {
	this.cliente = cliente;
}


public Cliente getCliente() {
	return cliente;
}*/

@Override
public int hashCode() {
	return Objects.hash(id);
}


@Override
public boolean equals(Object obj) {
	if (this == obj)
		return true;
	if (obj == null)
		return false;
	if (getClass() != obj.getClass())
		return false;
	Dispositivo other = (Dispositivo) obj;
	return Objects.equals(id, other.id);
}




}
