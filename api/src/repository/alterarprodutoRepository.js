import { con } from './connection.js'

export function alterarProduto() {
    const comando = `
    update tb_produto 
    set vl_preco                = ?,
        qtd_estoque             = ?,
        ds_capacidade           = ?,
        ds_cores                = ?,
        ds_medidas              = ?
        where id_produto        = 1;
    `

    const [resposta] = await con.query(comando, [])
}