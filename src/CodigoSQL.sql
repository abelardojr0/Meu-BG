CREATE TABLE usuario(
	id INT GENERATED ALWAYS AS IDENTITY,
	nome VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	senha VARCHAR(20) NOT NULL,
	
	PRIMARY KEY (id)
	
);

CREATE TABLE jogo(
	id INT GENERATED ALWAYS AS IDENTITY,
	nome VARCHAR(255),
	imagem VARCHAR(255),
	duracao_min INT,
	duracao_max INT,
	jogadores_min INT,
	jogadores_max INT,
	idade INT,
	preco VARCHAR(255),
	id_usuario INT REFERENCES usuario(id),
	
	PRIMARY KEY (id)
	
)