USE art;

SELECT *FROM (TB_ADMINISTRADOR);

SELECT *FROM (TB_PRODUTO);


insert INTO TB_ADMINISTRADOR (DS_SENHA, DS_EMAIL)
     values ('1234', 'dede@admin.com.br');

     -- login
 select id_administrador	  id,
		ds_email		email
  from	tb_administrador
 where	ds_email   = 'dede@admin.com.br'
   and	ds_senha   = '1234';
   
   -- cadastrar produtos
insert INTO TB_PRODUTO (ID_ADMINISTRADOR, VL_PRECO, QTD_ESTOQUE, DS_CAPACIDADE, DS_CORES, DS_MEDIDAS)
     values (1, '50.5', 2, '500ml', 'azul', '50cm');
     

   -- alterar produto
   update tb_produto 
   set vl_preco      = '70.5',
       qtd_estoque    = 3,
       ds_capacidade  = '550ml',
       ds_cores = 'vermelho',
       ds_medidas = '40cm'
 where id_produto = 1;


     
	-- listar produtos por nome
    select id_produto			id,
	  nm_produto			nome,
       vl_preco		        valor,
       qtd_estoque          quantidade,
       ds_capacidade	    capacidade,
       ds_cores 			cores,
       ds_medidas			medidas
  from tb_produto
 where nm_produto			like '%a%';
    
     
     
     
     
	-- remover produtos
delete from tb_produto
      where id_produto = 1;