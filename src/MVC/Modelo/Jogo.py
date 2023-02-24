class Jogo:
  def __init__(self, id, nome, duracao, numJogadores, idade, editora):
    self.id = id
    self.nome = nome
    self.duracao = duracao
    self.numJogadores = numJogadores
    self.idade = idade
    self.editora = editora
  
  def setNome(self, novoNome):
    self.nome = novoNome
  def getNome(self):
    return self.nome
  
  def setDuracao(self, novoDuracao):
    self.duracao = novoDuracao
  def getDuracao(self):
    return self.duracao
  
  def setNumJogadores(self, novoNumJogadores):
    self.numJogadores = novoNumJogadores
  def getNumJogadores(self):
    return self.numJogadores
  
  def setIdade(self, novoIdade):
    self.idade = novoIdade
  def getIdade(self):
    return self.idade
  
  def setEditora(self, novoEditora):
    self.editora = novoEditora
  def getEditora(self):
    return self.editora
  
  def inserirJogo(self):
    query = (f'''
            INSERT INTO "jogos"
              VALUES(DEFAULT, '{self.nome}','{self.duracao}', '{self.numJogadores}', '{self.idade}', '{self.editora}' )
            ''')
    return query
  
  def visualizarJogo(self):
    print(f'''
          ID - {self.id}
          Nome - {self.nome}
          Duração - {self.duracao}
          Número de Jogadores - {self.numJogadores}
          Idade Mínima - {self.idade}
          Editora - {self.editora}
          ''')
    
  def atualizarJogo(self):
    query = (f'''
            UPDATE "jogos"
              SET "nome" = '{self.nome}',
                  "duracao" = '{self.duracao}',
                  "numjogadores" = '{self.numJogadores}',
                  "idade" = '{self.idade}',
                  "editora" = '{self.editora}'
              WHERE "id" = '{self.id}'
            ''')
    return query
  
  def deletarJogo(self):
    query = (f'''
            DELETE FROM "jogos"
              WHERE "id" = {self.id}
            ''')
    return query
  
