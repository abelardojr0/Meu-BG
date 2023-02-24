const express = require("express");
const cors = require("cors");

async function connect() {
  const { Pool } = require("pg");

  if (global.connection) return global.connection.connect();

  const pool = new Pool({
    connectionString: "postgres://postgres:123@localhost:5432/Luderia",
  });
  //apenas testando a conexão
  const client = await pool.connect();
  console.log("Criou pool de conexões no PostgreSQL!");
  const res = await client.query("SELECT NOW()");
  console.log(res.rows[0]);
  client.release();
  //guardando para usar sempre o mesmo
  global.connection = pool;
  return pool.connect();
}

//FUNÇÃO PARA SELECIONAR CAMPOS DA TABELA
async function select(sql) {
  const client = await connect();
  const res = await client.query(sql);
  return res.rows;
}
//FUNÇÃO PARA INSERIR DADOS NA TABELA
async function insert(dados) {
  const client = await connect();
  const sql =
    "INSERT INTO jogos (nome, duracao, numjogadores, idade, editora) VALUES ($1, $2, $3, $4, $5);";
  const values = [
    dados.nome,
    dados.duracao,
    dados.numjogadores,
    dados.idade,
    dados.editora,
  ];
  return await client.query(sql, values);
}
//FUNÇÃO PARA ATUALIZAR DADOS DA TABELA
async function update(dados) {
  const client = await connect();
  const sql =
    "UPDATE jogos SET nome=$1, duracao=$2, numjogadores=$3, idade=$4, editora=$5 WHERE id=$6";
  const values = [
    dados.nome,
    dados.duracao,
    dados.numjogadores,
    dados.idade,
    dados.editora,
    dados.id,
  ];
  return await client.query(sql, values);
}
//FUNÇÃO PARA DELETAR DADOS DA TABELA
async function deletar(id) {
  const client = await connect();
  const sql = "DELETE FROM jogos WHERE id=$1;";
  return await client.query(sql, [id]);
}

(async () => {
  // INSERINDO DADOS DA TABELA
  await insert({
    nome: "Concept",
    duracao: "20",
    numjogadores: "1-10",
    idade: "10",
    editora: "Galapagos",
  });

  //ATUALIZANDO DADOS DA TABELA
  await update({
    nome: "Concept",
    duracao: "20",
    numjogadores: "1-10",
    idade: "16",
    editora: "Galapagos",
    id: "4",
  });

  //DELETANDO DADOS DA TABELA
  await deletar(6);

  //MOSTRANDO DADOS DA TABELA
  const jogos = await select("SELECT * FROM jogos");
  console.log(jogos);
})();
module.exports = { select, insert, update, deletar };
const app = express();

app.get("/", (req, res) => {
  res.send("TESTE");
});

app.use(cors());
app.use(express.json());

app.post("/", (req, res) => {
  const { nome } = req.body;
  const { duracao } = req.body;
  const { numjogadores } = req.body;
  const { idade } = req.body;
  const { editora } = req.body;

  console.log(nome, duracao);
});

app.listen(3001, () => {
  console.log("Logado");
});
