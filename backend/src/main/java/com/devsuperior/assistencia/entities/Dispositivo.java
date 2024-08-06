package com.devsuperior.assistencia.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import javax.persistence.Table;

import com.devsuperior.assistencia.dto.ClienteDTO;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "tb_dispositivo")
public class Dispositivo implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long dispositivoId;
	private String dispositivoName;
	private String marca;
	private String modelo;
	private String cor;
	private String serial;
	private String descricao;


	// Mapeamento 1 cliente pode ter 1 ou mais dispositivos e 1 dispositivo pertence
	// a 1 cliente;

	@ManyToOne(cascade=CascadeType.ALL)  
	@JoinColumn(name = "cliente_id")
	private Cliente cliente;
	
	@OneToMany( mappedBy = "dispositivo" , fetch = FetchType.LAZY , cascade = CascadeType.ALL)  // remove o orçamento ao remover dispositivo
	@JsonIgnore
	private List<Orcamento> orcamentos;
 
	public Dispositivo() {
		this.cliente = new Cliente();
		this.orcamentos = new ArrayList<>();
		
	}
	

	public Dispositivo(Long dispositivoId, String dispositivoName, String marca, String modelo, String cor,
			String serial, String descricao, Cliente cliente, List<Orcamento> orcamentos) {

		this.dispositivoId = dispositivoId;
		this.dispositivoName = dispositivoName;
		this.marca = marca;
		this.modelo = modelo;
		this.cor = cor;
		this.serial = serial;
		this.descricao = descricao;
		this.cliente = cliente;
		this.orcamentos= orcamentos;
		
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

	public void setDispositivoName(String dispositivoName) {
		this.dispositivoName = dispositivoName;
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
	
	
	public Cliente getCliente() {
		
		return cliente;

	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}
	

	
	public List<Orcamento> getOrcamento() {
			if(orcamentos!=null) {
				
			}
		return orcamentos;

	}
	

	public void setOrcamento(List<Orcamento> orcamentos) {	
		if(orcamentos!=null)
		this.orcamentos= orcamentos;
		
	}

	@Override
	public int hashCode() {
		return Objects.hash(dispositivoId);
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
		return Objects.equals(dispositivoId, other.dispositivoId);
	}

	public ClienteDTO getClienteDTO() {
		// TODO Auto-generated method stub
		return new ClienteDTO(cliente);
	}



	

}
