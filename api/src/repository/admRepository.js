import {con} from './connection.js'


export async function Login(email, senha) {
    const comando =
     ` select id_administrador	  id,
              ds_email		        email
         from	tb_administrador
        where	ds_email             = ?
         and	ds_senha             = ?`

   const [linhas] = await con.query(comando, [email, senha])
  return linhas[0];

}