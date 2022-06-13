import { con } from './connection.js'

export async function alterarProduto(produto, id) {
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