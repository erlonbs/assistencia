package com.devsuperior.assistencia.dto;
import com.devsuperior.assistencia.entities.Orcamento;
import com.devsuperior.assistencia.entities.Servico;


public class ServicoDTO {

	private Long servicoId;
	private String descricao;
	private double valor;
	private Boolean pagamento;
	private String servicoRealizado;
	private Orcamento orcamento;
	private Long orcamentoId;
	private String clienteName;
	private Long clienteId;
	private Long dispositivoId;

	public ServicoDTO() {
		this.orcamento = new Orcamento();
	}

	public ServicoDTO(Long servicoId, Orcamento orcamento, String clienteName, String descricao,
			String servicoRealizado, double valor, Boolean pagamento, Long dispositivoId) {

		this.servicoId = servicoId;
		this.descricao = descricao;
		this.servicoRealizado = servicoRealizado;
		this.valor = valor;
		this.pagamento = pagamento;
		this.orcamento = orcamento;
		this.clienteName = clienteName;		
		this.orcamentoId = orcamento.getOrcamentoId();
		this.dispositivoId = orcamento.getDispotivoId();
	}

	public ServicoDTO(Servico entity) {

		servicoId = entity.getServicoId();
		descricao = entity.getDescricao();
		servicoRealizado = entity.getServicoRealizado();
		valor = entity.getValor();
		pagamento = entity.getPagamento();

		if (entity.getOrcamento() != null)
			orcamentoId = entity.getOrcamento().getOrcamentoId();

		clienteName = entity.getClienteName();
		clienteId = entity.getClienteId();
		dispositivoId = entity.getDispositivoId();

	}

	public Long getServicoId() {
		return servicoId;
	}

	public void setServicoId(Long servicoId) {
		this.servicoId = servicoId;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public double getValor() {
		return valor;
	}

	public void setValor(double valor) {
		this.valor = valor;
	}

	public Boolean getPagamento() {
		return pagamento;
	}

	public void setPagamento(Boolean pagamento) {
		this.pagamento = pagamento;
	}

	public Orcamento getOrcamento() {
		if (orcamento == null) {
			orcamento = new Orcamento();
			return orcamento;
		}
		return orcamento;
	}

	public void setOrcamento(Orcamento codigoOrcamento) {
		this.orcamento = codigoOrcamento;
	}

	public String getClienteName() {
		return clienteName;
	}

	public void setClienteName(String clienteName) {
		this.clienteName = clienteName;
	}

	public String getServicoRealizado() {
		return servicoRealizado;
	}

	public void setServicoRealizado(String servicoRealizado) {
		this.servicoRealizado = servicoRealizado;
	}

	public Long getClienteId() {
		return clienteId;
	}

	public void setClienteId(Long clienteId) {
		this.clienteId = clienteId;
	}

	public Long getDispositivoId() {
		return dispositivoId;
	}

	public void setDispositivoId(Long dispositivoId) {
		this.dispositivoId = dispositivoId;
	}

	public Long getOrcamentoId() {
		return orcamentoId;
	}

	public void setOrcamentoId(Long orcamentoId) {
		this.orcamentoId = orcamentoId;
	}

}
