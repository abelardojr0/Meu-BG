from psycopg2 import connect

class Conexao:
  def __init__(self, banco, usuario, senha, hospede, porta):
    self.conexao = connect(database=banco, user=usuario, password=senha, host=hospede, port=porta)
  
  def consultarBanco(self, sql):
    cursor = self.conexao.cursor()
    cursor.execute(sql)
    resultado = cursor.fetchall()
    cursor.close()
    return resultado
  
  def consultaCompleta(self, tabela):
    cursor = self.conexao.cursor()
    cursor.execute(f'''
                   SELECT * FROM "{tabela}"
                  ORDER BY id ASC
                  ''')
    resultado = cursor.fetchall()
    cursor.close
    return resultado  
  
  def consultaPorId(self, tabela, id):
    query = (f'''
                   SELECT * FROM "{tabela}"
                    WHERE id = {id}
                  ''')
    return query
  
  def manipularBanco(self, sql):
    cursor = self.conexao.cursor()
    cursor.execute(sql)
    self.conexao.commit()
    cursor.close()
  
  def limparDadosRepetidos(self,tabela, id, dadoRepetido):
    cursor = self._conexao.cursor()
    cursor.execute(f'''
                  DELETE FROM "{tabela}"
                      WHERE {id} IN (
                        SELECT {id}
                          FROM(
                            SELECT {id},
                              ROW_NUMBER() OVER (PARTITION BY {dadoRepetido} ORDER BY {id} asc) as cont
                                FROM "{tabela}"
                          ) A 
                        WHERE cont >= 2
                      
);
                  ''')
    self._conexao.commit()
    cursor.close
    
  def fecharConexao(self):
    self._conexao.close()