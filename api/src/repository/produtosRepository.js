import { con } from './connection.js'

export async function cadastrarProduto(produto){
  const comando = `
  insert INTO TB_PRODUTO (ID_ADMINISTRADOR, NM_PRODUTO, VL_PRECO, QTD_ESTOQUE, DS_CAPACIDADE, DS_CORES, DS_MEDIDAS)
  values (?, ?, ?, ?, ?, ?, ?)`

  const [resposta] = await con.query(comando, [produto.id, produto.nome, produto.preco, produto.estoque, produto.capacidade, produto.cores, produto.medidas ]) 
  produto.id = resposta.insertId;
  return produto;
}
