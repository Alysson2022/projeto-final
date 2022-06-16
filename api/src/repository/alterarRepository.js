import { con } from './connection.js'

export async function alterarProduto(id, produto) {
    const comando = `
    update tb_produto 
    set     nm_produto              = ?,
            vl_preco                = ?,
            qtd_estoque             = ?,
            ds_capacidade           = ?,
            ds_cores                = ?,
            ds_medidas              = ?
    where   id_produto              = ?`

    const [resposta] = await con.query(comando, [produto.nome, produto.preco, produto.estoque, produto.capacidade, produto.cores, produto.medidas, id]);
    return resposta.affectedRows;
}

export async function listarProduto(nome) {
    const comando = 
    `select id_produto			id,
            nm_produto			nome,
            vl_preco		    valor,
            qtd_estoque     quantidade,
            ds_capacidade	  capacidade,
            ds_cores 			  cores,
            ds_medidas			medidas
       from tb_produto
      where nm_produto			like ?`
  
    const [resposta] = await con.query(comando, [`%${nome}%`])
    return resposta
  }

  export async function deletarProduto(id) {
    const comando = 
    `delete from tb_produto
           where id_produto = ?`

    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;
}