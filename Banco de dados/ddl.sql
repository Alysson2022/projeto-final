CREATE DATABASE art;

DROP database art;

USE art;

create table TB_ADMINISTRADOR (
		id_administrador      int primary key auto_increment,
	    ds_email              varchar(50),
        ds_senha              varchar(50)
        
);

create table TB_PRODUTO (
		ID_PRODUTO           int PRIMARY KEY auto_increment,
        ID_ADMINISTRADOR     int,
        NM_PRODUTO           varchar(50),
        VL_PRECO             varchar(15),
        QTD_ESTOQUE          int,
        DS_CAPACIDADE        varchar(30),
        DS_CORES             varchar(20),
		DS_MEDIDAS           varchar(20),
        foreign key (ID_ADMINISTRADOR) references TB_ADMINISTRADOR (ID_ADMINISTRADOR)
);


