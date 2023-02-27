class Usuario:
  def __init__(self, id, nome, cpf, anoNasc, login, senha):
    self.id = id
    self.nome = nome
    self.cpf = cpf
    self.anoNasc = anoNasc
    self.login = login
    self.senha = senha
  
  def setNome(self, novoNome):
    self.nome = novoNome
  def getNome(self):
    return self.nome
  
  def setCpf(self, novoCpf):
    self.cpf = novoCpf
  def getCpf(self):
    return self.cpf
  
  def setAnoNasc(self, novoAnoNasc):
    self.anoNasc = novoAnoNasc
  def getAnoNasc(self):
    return self.anoNasc
  
  def setLogin(self, novoLogin):
    self.login = novoLogin
  def getLogin(self):
    return self.login
  
  def setSenha(self, novaSenha):
    self.senha = novaSenha
  def getSenha(self):
    return self.senha
  
  def inserirUsuario(self):
    query = (f'''
            INSERT INTO "usuarios"
              VALUES(DEFAULT, '{self.nome}','{self.cpf}','{self.anoNasc}','{self.login}','{self.senha}' )
            ''')
    return query
  
  def visualizarUsuario(self):
    print(f'''
          ID - {self.id}
          Nome - {self.nome}
          CPF - {self.cpf}
          Ano de Nascimento - {self.anoNasc}
          Login - {self.login}
          Senha - {self.senha}
          ''')
    
  def atualizarUsuario(self):
    query = (f'''
            UPDATE "usuarios"
              SET "nome" = '{self.nome}',
                  "cpf" = '{self.cpf}',
                  "anonasc" = '{self.anoNasc}',
                  "login" = '{self.login}',
                  "senha" = '{self.senha}'
              WHERE "id" = '{self.id}'
            ''')
    return query
  
  def deletarUsuario(self):
    query = (f'''
            DELETE FROM "usuarios"
              WHERE "id" = {self.id}
            ''')
    return query
  
