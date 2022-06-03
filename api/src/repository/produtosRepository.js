import { con } from './connection.js'

export async function cadastrarProduto(produto){
  const comando = `
  insert INTO TB_PRODUTO (ID_ADMINISTRADOR, VL_PRECO, QTD_ESTOQUE, DS_CAPACIDADE, DS_CORES, DS_MEDIDAS)
  values (?, ?, ?, ?, ?, ?)`

  const [resposta] = await con.query(comando, [produto.ADMINISTRADOR, produto.PRECO, produto.ESTOQUE, produto.CAPACIDADE, produto.CORES, produto.MEDIDAS ]) 
  produto.id = resposta.insertID;

  return resposta
}
