class Lista:
  def __init__(self, id, id_usuario, nome):
    self.id = id
    self.id_usuario = id_usuario
    self.nome = nome
  
  
  def setId_usuario(self,novoId_usuario):
    self.id_usuario = novoId_usuario
  def getId_usuario(self):
    return self.id_usuario
  
  
  def setNome(self,novoNome):
    self.nome = novoNome
  def getNome(self):
    return self.nome
  
  def inserirLista(self):
    query = (f'''
            INSERT INTO colecao (id_usuario, nome)
                                    VALUES ('{self.id_usuario}', '{self.nome}')
            ''')
    return query
  
  def visualizarLista(self):
    query = (f'''
              SELECT id, nome FROM colecao
                  WHERE id_usuario = '{self.id_usuario}'
            ''')
    print("Sua lista de coleções")
    for colecao in query:
      print(f"{colecao[0]} - {colecao[1]}")
      
  def deletarLista(self):
    query = (f'''
            DELETE FROM colecao
                WHERE id = '{self.id}' 
            ''')
    return query
    