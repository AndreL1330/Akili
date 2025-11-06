const express = require('express');
const path  = require('path');
const app = express();
const bcrypt = require('bcryptjs');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3000;

const connection = mysql.createConnection({

  host: 'localhost',
  user: 'root',
  password: 'mendesarmy1998*',
  database: 'akili'

});

connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar no MySQL:', err.message);
    return;
  }
  console.log('Conexão com MySQL estabelecida com sucesso!');
});

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public', 'login.html'));
});

app.get('/tarefas',(req,res)=>{
    res.sendFile(path.join(__dirname,'public', 'tarefas.html'));
});
app.get('/foco',(req,res)=>{
    res.sendFile(path.join(__dirname,'public', 'modoFoco.html'));
});
app.get('/appDist',(req,res)=>{
    res.sendFile(path.join(__dirname,'public', 'appDistracao.html'));

});
app.get('/addTarefas',(req,res)=>{
    res.sendFile(path.join(__dirname,'public', 'criarTarefas.html'));

});
app.get('/attTarefas',(req,res)=>{
    res.sendFile(path.join(__dirname,'public', 'atualizarTarefas.html'));

});
app.get('/ranking',(req,res)=>{
    res.sendFile(path.join(__dirname,'public', 'ranking.html'));
});


app.post('/cadastro', (req, res) => {

  const { nome, email, senha, telefone } = req.body;

  const sql = 'INSERT INTO usuarios (nome, email, senha, telefone) VALUES (?, ?, ?)';

  connection.query(sql, [nome, email, senha, telefone], (err) => {

    if (err) {

      console.error('Erro ao inserir dados:', err.message);

      return res.send();

    }

    res.send('http://localhost:${PORT}/tarefas');
  });

});

app.post('/cadastro', (req, res) => {

  const { nome, email, senha, telefone } = req.body;

  const sql = 'INSERT INTO usuarios (nome, email, senha, telefone) VALUES (?, ?, ?)';

  connection.query(sql, [nome, email, senha, telefone], (err) => {

    if (err) {

      console.error('Erro ao inserir dados:', err.message);

      return res.send();

    }

    res.send('http://localhost:${PORT}/tarefas');
  });

});

app.post('/addTarefa', (req, res) => {

  const {titulo, prioridade, data_inicio, data_fim, descricao, andamento} = req.body;

  const sql = 'INSERT INTO tarefas (titulo, prioridade, data_inicio, data_fim, descricao, andamento) VALUES (?, ?, ?, ?, ?, ?)';

  connection.query(sql, [titulo, prioridade, data_inicio, data_fim, descricao, andamento], (err) => {

    if (err) {

      console.error('Erro ao adicionar tarefa:', err.message);

      return res.send();

    }

    res.send('http://localhost:${PORT}/tarefas');
  });

});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/tarefas`);
});
app.listen(PORT, () => {
  console.log(`Página de foco em http://localhost:${PORT}/foco`);
});
app.listen(PORT, () => {
  console.log(`Página apps de distração em http://localhost:${PORT}/appDist`);
});
app.listen(PORT, () => {
  console.log(`Página de tarefas em http://localhost:${PORT}/addTarefas`);
});
app.listen(PORT, () => {
  console.log(`Página de adicionar tarefas em http://localhost:${PORT}/attTarefas`);
});
app.listen(PORT, () => {
  console.log(`Página de ranking em http://localhost:${PORT}/ranking`);
});