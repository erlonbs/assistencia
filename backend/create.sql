create table tb_cliente (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), dispositivo_id int8, primary key (id));
create table tb_dispositivo (id int8 generated by default as identity, cor varchar(255), descricao varchar(255), marca varchar(255), modelo varchar(255), name varchar(255), serial varchar(255), primary key (id));
create table tb_orcamento (id int8 generated by default as identity, autorizado boolean, defeito varchar(255), descricao varchar(255), valor int8, dispositivo_id int8, primary key (id));
create table tb_servico_realizado (id int8 generated by default as identity, descricao varchar(255), pagamento varchar(255), valor int8, primary key (id));
create table tb_user (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), primary key (id));
alter table if exists tb_cliente add constraint FKkxgibw59t3x6w41m2dc15pykb foreign key (dispositivo_id) references tb_dispositivo;
alter table if exists tb_orcamento add constraint FKtfwsggd6v4d12ssiv0uxbfq3a foreign key (dispositivo_id) references tb_dispositivo;
create table tb_cliente (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), dispositivo_id int8, primary key (id));
create table tb_dispositivo (id int8 generated by default as identity, cor varchar(255), descricao varchar(255), marca varchar(255), modelo varchar(255), name varchar(255), serial varchar(255), primary key (id));
create table tb_orcamento (id int8 generated by default as identity, autorizado boolean, defeito varchar(255), descricao varchar(255), valor int8, dispositivo_id int8, primary key (id));
create table tb_servico_realizado (id int8 generated by default as identity, descricao varchar(255), pagamento varchar(255), valor int8, primary key (id));
create table tb_user (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), primary key (id));
alter table if exists tb_cliente add constraint FKkxgibw59t3x6w41m2dc15pykb foreign key (dispositivo_id) references tb_dispositivo;
alter table if exists tb_orcamento add constraint FKtfwsggd6v4d12ssiv0uxbfq3a foreign key (dispositivo_id) references tb_dispositivo;
create table tb_cliente (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), dispositivo_id int8, primary key (id));
create table tb_dispositivo (id int8 generated by default as identity, cor varchar(255), descricao varchar(255), marca varchar(255), modelo varchar(255), name varchar(255), serial varchar(255), primary key (id));
create table tb_orcamento (id int8 generated by default as identity, autorizado boolean, defeito varchar(255), descricao varchar(255), valor int8, dispositivo_id int8, primary key (id));
create table tb_servico_realizado (id int8 generated by default as identity, descricao varchar(255), pagamento varchar(255), valor int8, primary key (id));
create table tb_user (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), primary key (id));
alter table if exists tb_cliente add constraint FKkxgibw59t3x6w41m2dc15pykb foreign key (dispositivo_id) references tb_dispositivo;
alter table if exists tb_orcamento add constraint FKtfwsggd6v4d12ssiv0uxbfq3a foreign key (dispositivo_id) references tb_dispositivo;
create table tb_cliente (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), dispositivo_id int8, primary key (id));
create table tb_dispositivo (id int8 generated by default as identity, cor varchar(255), descricao varchar(255), marca varchar(255), modelo varchar(255), name varchar(255), serial varchar(255), primary key (id));
create table tb_orcamento (id int8 generated by default as identity, autorizado boolean, defeito varchar(255), descricao varchar(255), valor int8, dispositivo_id int8, primary key (id));
create table tb_servico_realizado (id int8 generated by default as identity, descricao varchar(255), pagamento varchar(255), valor int8, primary key (id));
create table tb_user (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), primary key (id));
alter table if exists tb_cliente add constraint FKkxgibw59t3x6w41m2dc15pykb foreign key (dispositivo_id) references tb_dispositivo;
alter table if exists tb_orcamento add constraint FKtfwsggd6v4d12ssiv0uxbfq3a foreign key (dispositivo_id) references tb_dispositivo;
create table tb_cliente (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), dispositivo_id int8, primary key (id));
create table tb_dispositivo (id int8 generated by default as identity, cor varchar(255), descricao varchar(255), marca varchar(255), modelo varchar(255), name varchar(255), serial varchar(255), primary key (id));
create table tb_orcamento (id int8 generated by default as identity, autorizado boolean, defeito varchar(255), descricao varchar(255), valor int8, dispositivo_id int8, primary key (id));
create table tb_servico_realizado (id int8 generated by default as identity, descricao varchar(255), pagamento varchar(255), valor int8, primary key (id));
create table tb_user (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), primary key (id));
alter table if exists tb_cliente add constraint FKkxgibw59t3x6w41m2dc15pykb foreign key (dispositivo_id) references tb_dispositivo;
alter table if exists tb_orcamento add constraint FKtfwsggd6v4d12ssiv0uxbfq3a foreign key (dispositivo_id) references tb_dispositivo;
create table tb_cliente (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), dispositivo_id int8, primary key (id));
create table tb_dispositivo (id int8 generated by default as identity, cor varchar(255), descricao varchar(255), marca varchar(255), modelo varchar(255), name varchar(255), serial varchar(255), primary key (id));
create table tb_orcamento (id int8 generated by default as identity, autorizado boolean, defeito varchar(255), descricao varchar(255), valor int8, dispositivo_id int8, primary key (id));
create table tb_servico_realizado (id int8 generated by default as identity, descricao varchar(255), pagamento varchar(255), valor int8, primary key (id));
create table tb_user (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), primary key (id));
alter table if exists tb_cliente add constraint FKkxgibw59t3x6w41m2dc15pykb foreign key (dispositivo_id) references tb_dispositivo;
alter table if exists tb_orcamento add constraint FKtfwsggd6v4d12ssiv0uxbfq3a foreign key (dispositivo_id) references tb_dispositivo;
create table tb_cliente (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), dispositivo_id int8, primary key (id));
create table tb_dispositivo (id int8 generated by default as identity, cor varchar(255), descricao varchar(255), marca varchar(255), modelo varchar(255), name varchar(255), serial varchar(255), primary key (id));
create table tb_orcamento (id int8 generated by default as identity, autorizado boolean, defeito varchar(255), descricao varchar(255), valor int8, dispositivo_id int8, primary key (id));
create table tb_servico_realizado (id int8 generated by default as identity, descricao varchar(255), pagamento varchar(255), valor int8, primary key (id));
create table tb_user (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), primary key (id));
alter table if exists tb_cliente add constraint FKkxgibw59t3x6w41m2dc15pykb foreign key (dispositivo_id) references tb_dispositivo;
alter table if exists tb_orcamento add constraint FKtfwsggd6v4d12ssiv0uxbfq3a foreign key (dispositivo_id) references tb_dispositivo;
create table tb_cliente (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), dispositivo_id int8, primary key (id));
create table tb_dispositivo (id int8 generated by default as identity, cor varchar(255), descricao varchar(255), marca varchar(255), modelo varchar(255), name varchar(255), serial varchar(255), primary key (id));
create table tb_orcamento (id int8 generated by default as identity, autorizado boolean, defeito varchar(255), descricao varchar(255), valor int8, dispositivo_id int8, primary key (id));
create table tb_servico_realizado (id int8 generated by default as identity, descricao varchar(255), pagamento varchar(255), valor int8, primary key (id));
create table tb_user (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), primary key (id));
alter table if exists tb_cliente add constraint FKkxgibw59t3x6w41m2dc15pykb foreign key (dispositivo_id) references tb_dispositivo;
alter table if exists tb_orcamento add constraint FKtfwsggd6v4d12ssiv0uxbfq3a foreign key (dispositivo_id) references tb_dispositivo;
create table tb_cliente (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), dispositivo_id int8, primary key (id));
create table tb_dispositivo (id int8 generated by default as identity, cor varchar(255), descricao varchar(255), marca varchar(255), modelo varchar(255), name varchar(255), serial varchar(255), primary key (id));
create table tb_orcamento (id int8 generated by default as identity, autorizado boolean, defeito varchar(255), descricao varchar(255), valor int8, dispositivo_id int8, primary key (id));
create table tb_servico_realizado (id int8 generated by default as identity, descricao varchar(255), pagamento varchar(255), valor int8, primary key (id));
create table tb_user (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), primary key (id));
alter table if exists tb_cliente add constraint FKkxgibw59t3x6w41m2dc15pykb foreign key (dispositivo_id) references tb_dispositivo;
alter table if exists tb_orcamento add constraint FKtfwsggd6v4d12ssiv0uxbfq3a foreign key (dispositivo_id) references tb_dispositivo;
create table tb_cliente (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), dispositivo_id int8, primary key (id));
create table tb_dispositivo (id int8 generated by default as identity, cor varchar(255), descricao varchar(255), marca varchar(255), modelo varchar(255), name varchar(255), serial varchar(255), primary key (id));
create table tb_orcamento (id int8 generated by default as identity, autorizado boolean, defeito varchar(255), descricao varchar(255), valor int8, dispositivo_id int8, primary key (id));
create table tb_servico_realizado (id int8 generated by default as identity, descricao varchar(255), pagamento varchar(255), valor int8, primary key (id));
create table tb_user (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), primary key (id));
alter table if exists tb_cliente add constraint FKkxgibw59t3x6w41m2dc15pykb foreign key (dispositivo_id) references tb_dispositivo;
alter table if exists tb_orcamento add constraint FKtfwsggd6v4d12ssiv0uxbfq3a foreign key (dispositivo_id) references tb_dispositivo;
create table tb_cliente (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), dispositivo_id int8, primary key (id));
create table tb_dispositivo (id int8 generated by default as identity, cor varchar(255), descricao varchar(255), marca varchar(255), modelo varchar(255), name varchar(255), serial varchar(255), primary key (id));
create table tb_orcamento (id int8 generated by default as identity, autorizado boolean, defeito varchar(255), descricao varchar(255), valor int8, dispositivo_id int8, primary key (id));
create table tb_servico_realizado (id int8 generated by default as identity, descricao varchar(255), pagamento varchar(255), valor int8, primary key (id));
create table tb_user (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), primary key (id));
alter table if exists tb_cliente add constraint FKkxgibw59t3x6w41m2dc15pykb foreign key (dispositivo_id) references tb_dispositivo;
alter table if exists tb_orcamento add constraint FKtfwsggd6v4d12ssiv0uxbfq3a foreign key (dispositivo_id) references tb_dispositivo;
create table tb_cliente (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), dispositivo_id int8, primary key (id));
create table tb_dispositivo (id int8 generated by default as identity, cor varchar(255), descricao varchar(255), marca varchar(255), modelo varchar(255), name varchar(255), serial varchar(255), primary key (id));
create table tb_orcamento (id int8 generated by default as identity, autorizado boolean, defeito varchar(255), descricao varchar(255), valor int8, dispositivo_id int8, primary key (id));
create table tb_servico_realizado (id int8 generated by default as identity, descricao varchar(255), pagamento varchar(255), valor int8, primary key (id));
create table tb_user (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), primary key (id));
alter table if exists tb_cliente add constraint FKkxgibw59t3x6w41m2dc15pykb foreign key (dispositivo_id) references tb_dispositivo;
alter table if exists tb_orcamento add constraint FKtfwsggd6v4d12ssiv0uxbfq3a foreign key (dispositivo_id) references tb_dispositivo;
create table tb_cliente (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), dispositivo_id int8, primary key (id));
create table tb_dispositivo (id int8 generated by default as identity, cor varchar(255), descricao varchar(255), marca varchar(255), modelo varchar(255), name varchar(255), serial varchar(255), primary key (id));
create table tb_orcamento (id int8 generated by default as identity, autorizado boolean, defeito varchar(255), descricao varchar(255), valor int8, dispositivo_id int8, primary key (id));
create table tb_servico_realizado (id int8 generated by default as identity, descricao varchar(255), pagamento varchar(255), valor int8, primary key (id));
create table tb_user (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), primary key (id));
alter table if exists tb_cliente add constraint FKkxgibw59t3x6w41m2dc15pykb foreign key (dispositivo_id) references tb_dispositivo;
alter table if exists tb_orcamento add constraint FKtfwsggd6v4d12ssiv0uxbfq3a foreign key (dispositivo_id) references tb_dispositivo;
create table tb_cliente (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), dispositivo_id int8, primary key (id));
create table tb_dispositivo (id int8 generated by default as identity, cor varchar(255), descricao varchar(255), marca varchar(255), modelo varchar(255), name varchar(255), serial varchar(255), primary key (id));
create table tb_orcamento (id int8 generated by default as identity, autorizado boolean, defeito varchar(255), descricao varchar(255), valor int8, dispositivo_id int8, primary key (id));
create table tb_servico_realizado (id int8 generated by default as identity, descricao varchar(255), pagamento varchar(255), valor int8, primary key (id));
create table tb_user (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), primary key (id));
alter table if exists tb_cliente add constraint FKkxgibw59t3x6w41m2dc15pykb foreign key (dispositivo_id) references tb_dispositivo;
alter table if exists tb_orcamento add constraint FKtfwsggd6v4d12ssiv0uxbfq3a foreign key (dispositivo_id) references tb_dispositivo;
create table tb_cliente (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), dispositivo_id int8, primary key (id));
create table tb_dispositivo (id int8 generated by default as identity, cor varchar(255), descricao varchar(255), marca varchar(255), modelo varchar(255), name varchar(255), serial varchar(255), primary key (id));
create table tb_orcamento (id int8 generated by default as identity, autorizado boolean, defeito varchar(255), descricao varchar(255), valor int8, dispositivo_id int8, primary key (id));
create table tb_servico_realizado (id int8 generated by default as identity, descricao varchar(255), pagamento varchar(255), valor int8, primary key (id));
create table tb_user (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), primary key (id));
alter table if exists tb_cliente add constraint FKkxgibw59t3x6w41m2dc15pykb foreign key (dispositivo_id) references tb_dispositivo;
alter table if exists tb_orcamento add constraint FKtfwsggd6v4d12ssiv0uxbfq3a foreign key (dispositivo_id) references tb_dispositivo;
create table tb_cliente (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), dispositivo_id int8, primary key (id));
create table tb_dispositivo (id int8 generated by default as identity, cor varchar(255), descricao varchar(255), marca varchar(255), modelo varchar(255), name varchar(255), serial varchar(255), primary key (id));
create table tb_orcamento (id int8 generated by default as identity, autorizado boolean, defeito varchar(255), descricao varchar(255), valor int8, dispositivo_id int8, primary key (id));
create table tb_servico_realizado (id int8 generated by default as identity, descricao varchar(255), pagamento varchar(255), valor int8, primary key (id));
create table tb_user (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), primary key (id));
alter table if exists tb_cliente add constraint FKkxgibw59t3x6w41m2dc15pykb foreign key (dispositivo_id) references tb_dispositivo;
alter table if exists tb_orcamento add constraint FKtfwsggd6v4d12ssiv0uxbfq3a foreign key (dispositivo_id) references tb_dispositivo;
create table tb_cliente (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), dispositivo_id int8, primary key (id));
create table tb_dispositivo (id int8 generated by default as identity, cor varchar(255), descricao varchar(255), marca varchar(255), modelo varchar(255), name varchar(255), serial varchar(255), primary key (id));
create table tb_orcamento (id int8 generated by default as identity, autorizado boolean, defeito varchar(255), descricao varchar(255), valor int8, dispositivo_id int8, primary key (id));
create table tb_servico_realizado (id int8 generated by default as identity, descricao varchar(255), pagamento varchar(255), valor int8, primary key (id));
create table tb_user (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), primary key (id));
alter table if exists tb_cliente add constraint FKkxgibw59t3x6w41m2dc15pykb foreign key (dispositivo_id) references tb_dispositivo;
alter table if exists tb_orcamento add constraint FKtfwsggd6v4d12ssiv0uxbfq3a foreign key (dispositivo_id) references tb_dispositivo;
create table tb_cliente (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), dispositivo_id int8, primary key (id));
create table tb_dispositivo (id int8 generated by default as identity, cor varchar(255), descricao varchar(255), marca varchar(255), modelo varchar(255), name varchar(255), serial varchar(255), primary key (id));
create table tb_orcamento (id int8 generated by default as identity, autorizado boolean, defeito varchar(255), descricao varchar(255), valor int8, dispositivo_id int8, primary key (id));
create table tb_servico_realizado (id int8 generated by default as identity, descricao varchar(255), pagamento varchar(255), valor int8, primary key (id));
create table tb_user (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), primary key (id));
alter table if exists tb_cliente add constraint FKkxgibw59t3x6w41m2dc15pykb foreign key (dispositivo_id) references tb_dispositivo;
alter table if exists tb_orcamento add constraint FKtfwsggd6v4d12ssiv0uxbfq3a foreign key (dispositivo_id) references tb_dispositivo;
create table tb_cliente (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), dispositivo_id int8, primary key (id));
create table tb_dispositivo (id int8 generated by default as identity, cor varchar(255), descricao varchar(255), marca varchar(255), modelo varchar(255), name varchar(255), serial varchar(255), primary key (id));
create table tb_orcamento (id int8 generated by default as identity, autorizado boolean, defeito varchar(255), descricao varchar(255), valor int8, dispositivo_id int8, primary key (id));
create table tb_servico_realizado (id int8 generated by default as identity, descricao varchar(255), pagamento varchar(255), valor int8, primary key (id));
create table tb_user (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), primary key (id));
alter table if exists tb_cliente add constraint FKkxgibw59t3x6w41m2dc15pykb foreign key (dispositivo_id) references tb_dispositivo;
alter table if exists tb_orcamento add constraint FKtfwsggd6v4d12ssiv0uxbfq3a foreign key (dispositivo_id) references tb_dispositivo;
create table tb_cliente (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), dispositivo_id int8, primary key (id));
create table tb_dispositivo (id int8 generated by default as identity, cor varchar(255), descricao varchar(255), marca varchar(255), modelo varchar(255), name varchar(255), serial varchar(255), primary key (id));
create table tb_orcamento (id int8 generated by default as identity, autorizado boolean, defeito varchar(255), descricao varchar(255), valor int8, dispositivo_id int8, primary key (id));
create table tb_servico_realizado (id int8 generated by default as identity, descricao varchar(255), pagamento varchar(255), valor int8, primary key (id));
create table tb_user (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), primary key (id));
alter table if exists tb_cliente add constraint FKkxgibw59t3x6w41m2dc15pykb foreign key (dispositivo_id) references tb_dispositivo;
alter table if exists tb_orcamento add constraint FKtfwsggd6v4d12ssiv0uxbfq3a foreign key (dispositivo_id) references tb_dispositivo;
create table tb_cliente (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), dispositivo_id int8, primary key (id));
create table tb_dispositivo (id int8 generated by default as identity, cor varchar(255), descricao varchar(255), marca varchar(255), modelo varchar(255), name varchar(255), serial varchar(255), primary key (id));
create table tb_orcamento (id int8 generated by default as identity, autorizado boolean, defeito varchar(255), descricao varchar(255), valor int8, dispositivo_id int8, primary key (id));
create table tb_servico_realizado (id int8 generated by default as identity, descricao varchar(255), pagamento varchar(255), valor int8, primary key (id));
create table tb_user (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), primary key (id));
alter table if exists tb_cliente add constraint FKkxgibw59t3x6w41m2dc15pykb foreign key (dispositivo_id) references tb_dispositivo;
alter table if exists tb_orcamento add constraint FKtfwsggd6v4d12ssiv0uxbfq3a foreign key (dispositivo_id) references tb_dispositivo;
create table tb_cliente (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), dispositivo_id int8, primary key (id));
create table tb_dispositivo (id int8 generated by default as identity, cor varchar(255), descricao varchar(255), marca varchar(255), modelo varchar(255), name varchar(255), serial varchar(255), primary key (id));
create table tb_orcamento (id int8 generated by default as identity, autorizado boolean, defeito varchar(255), descricao varchar(255), valor int8, dispositivo_id int8, primary key (id));
create table tb_servico_realizado (id int8 generated by default as identity, descricao varchar(255), pagamento varchar(255), valor int8, primary key (id));
create table tb_user (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), primary key (id));
alter table if exists tb_cliente add constraint FKkxgibw59t3x6w41m2dc15pykb foreign key (dispositivo_id) references tb_dispositivo;
alter table if exists tb_orcamento add constraint FKtfwsggd6v4d12ssiv0uxbfq3a foreign key (dispositivo_id) references tb_dispositivo;
create table tb_cliente (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), dispositivo_id int8, primary key (id));
create table tb_dispositivo (id int8 generated by default as identity, cor varchar(255), descricao varchar(255), marca varchar(255), modelo varchar(255), name varchar(255), serial varchar(255), primary key (id));
create table tb_orcamento (id int8 generated by default as identity, autorizado boolean, defeito varchar(255), descricao varchar(255), valor int8, dispositivo_id int8, primary key (id));
create table tb_servico_realizado (id int8 generated by default as identity, descricao varchar(255), pagamento varchar(255), valor int8, primary key (id));
create table tb_user (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), primary key (id));
alter table if exists tb_cliente add constraint FKkxgibw59t3x6w41m2dc15pykb foreign key (dispositivo_id) references tb_dispositivo;
alter table if exists tb_orcamento add constraint FKtfwsggd6v4d12ssiv0uxbfq3a foreign key (dispositivo_id) references tb_dispositivo;
<<<<<<< HEAD
create table tb_cliente (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), dispositivo_id int8, primary key (id));
create table tb_dispositivo (id int8 generated by default as identity, cor varchar(255), descricao varchar(255), marca varchar(255), modelo varchar(255), name varchar(255), serial varchar(255), primary key (id));
create table tb_orcamento (id int8 generated by default as identity, autorizado boolean, defeito varchar(255), descricao varchar(255), valor int8, dispositivo_id int8, primary key (id));
create table tb_servico_realizado (id int8 generated by default as identity, descricao varchar(255), pagamento varchar(255), valor int8, primary key (id));
create table tb_user (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), primary key (id));
alter table if exists tb_cliente add constraint FKkxgibw59t3x6w41m2dc15pykb foreign key (dispositivo_id) references tb_dispositivo;
alter table if exists tb_orcamento add constraint FKtfwsggd6v4d12ssiv0uxbfq3a foreign key (dispositivo_id) references tb_dispositivo;
create table tb_cliente (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), dispositivo_id int8, primary key (id));
create table tb_dispositivo (id int8 generated by default as identity, cor varchar(255), descricao varchar(255), marca varchar(255), modelo varchar(255), name varchar(255), serial varchar(255), primary key (id));
create table tb_orcamento (id int8 generated by default as identity, autorizado boolean, defeito varchar(255), descricao varchar(255), valor int8, dispositivo_id int8, primary key (id));
create table tb_servico_realizado (id int8 generated by default as identity, descricao varchar(255), pagamento varchar(255), valor int8, primary key (id));
create table tb_user (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), primary key (id));
alter table if exists tb_cliente add constraint FKkxgibw59t3x6w41m2dc15pykb foreign key (dispositivo_id) references tb_dispositivo;
alter table if exists tb_orcamento add constraint FKtfwsggd6v4d12ssiv0uxbfq3a foreign key (dispositivo_id) references tb_dispositivo;
create table tb_cliente (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), dispositivo_id int8, primary key (id));
create table tb_dispositivo (id int8 generated by default as identity, cor varchar(255), descricao varchar(255), marca varchar(255), modelo varchar(255), name varchar(255), serial varchar(255), primary key (id));
create table tb_orcamento (id int8 generated by default as identity, autorizado boolean, defeito varchar(255), descricao varchar(255), valor int8, dispositivo_id int8, primary key (id));
create table tb_servico_realizado (id int8 generated by default as identity, descricao varchar(255), pagamento varchar(255), valor int8, primary key (id));
create table tb_user (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), primary key (id));
alter table if exists tb_cliente add constraint FKkxgibw59t3x6w41m2dc15pykb foreign key (dispositivo_id) references tb_dispositivo;
alter table if exists tb_orcamento add constraint FKtfwsggd6v4d12ssiv0uxbfq3a foreign key (dispositivo_id) references tb_dispositivo;
=======
>>>>>>> dd91e96603d911bd8c36063ce8dddc74f9c72656
create table tb_cliente (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), dispositivo_id int8, primary key (id));
create table tb_dispositivo (id int8 generated by default as identity, cor varchar(255), descricao varchar(255), marca varchar(255), modelo varchar(255), name varchar(255), serial varchar(255), primary key (id));
create table tb_orcamento (id int8 generated by default as identity, autorizado boolean, defeito varchar(255), descricao varchar(255), valor int8, dispositivo_id int8, primary key (id));
create table tb_servico_realizado (id int8 generated by default as identity, descricao varchar(255), pagamento varchar(255), valor int8, primary key (id));
create table tb_user (id int8 generated by default as identity, address varchar(255), cpf varchar(255), name varchar(255), telephone varchar(255), primary key (id));
alter table if exists tb_cliente add constraint FKkxgibw59t3x6w41m2dc15pykb foreign key (dispositivo_id) references tb_dispositivo;
alter table if exists tb_orcamento add constraint FKtfwsggd6v4d12ssiv0uxbfq3a foreign key (dispositivo_id) references tb_dispositivo;
