import psycopg2
from psycopg2 import Error
from flask import Flask, jsonify, request
from flask_cors import CORS

try:
    conn = psycopg2.connect(
        host="localhost",
        database="Meu_BG",
        user="postgres",
        password="123",
        port="5432"
    )
    app = Flask(__name__)
    
    CORS(app)
    print("Conectado")   

    cur = conn.cursor()
    @app.route('/insert', methods=['POST'])
    def add_jogo():
        print(request.json)
        nome = request.json['nome']
        imagem = request.json['imagem']
        duracao_min = request.json['duracao_min']
        duracao_max = request.json['duracao_max']
        jogadores_min = request.json['jogadores_min']
        jogadores_max = request.json['jogadores_max']
        idade = request.json['idade']
        preco = request.json['preco']
        id_usuario = request.json['id_usuario']
        cur.execute("INSERT INTO jogo (nome, imagem, duracao_min, duracao_max, jogadores_min, jogadores_max, idade, preco, id_usuario) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)", (nome,imagem, duracao_min, duracao_max, jogadores_min, jogadores_max, idade, preco, id_usuario))
        conn.commit()
        return jsonify({'status': 'success'})
    

    @app.route('/cadastrar', methods=['POST'])
    def cadastrar_user():
        cur = conn.cursor()
        nome = request.json['nome']
        email = request.json['email']
        senha = request.json['senha']
        cur.execute("INSERT INTO usuario (nome, email, senha) VALUES (%s, %s, %s)", (nome, email, senha))
        conn.commit()
        return jsonify({'status': 'success'})
    
    @app.route('/atualizarUsuario', methods=['POST'])
    def atualizar_user():
        cur = conn.cursor()
        nome = request.json['nome']
        email = request.json['email']
        senha = request.json['senha']
        id_usuario = request.json['id_usuario']
        cur.execute("UPDATE usuario SET nome=%s, email =%s, senha=%s WHERE id = %s", (nome, email, senha, id_usuario))
        conn.commit()
        return jsonify({'status': 'success'})
    
    @app.route('/deletarJogo', methods=['POST'])
    def deletar_jogo():
        cur = conn.cursor()
        id = request.json['id']
        cur.execute(f"DELETE FROM jogo WHERE id = '{id}'")
        conn.commit()
        return jsonify({'status': 'success'})
    
    @app.route('/buscarUsuarios', methods=['GET'])
    def get_tabela():
        cur = conn.cursor()
        cur.execute("SELECT * FROM usuario")
        results = cur.fetchall()
        return jsonify(results)
    
    @app.route('/buscarColecao/<int:id>', methods=['GET'])
    def get_jogos(id):
        cur = conn.cursor()
        cur.execute(f"SELECT * FROM jogo WHERE id_usuario = '{id}'")
        results = cur.fetchall()
        return jsonify(results)
    
    if __name__ == '__main__':
            app.run(debug=True)
        
except(Error) as error:
    print("Ocorreu um erro: ", error)