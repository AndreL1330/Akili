CREATE DATABASE akili;
USE akili;

CREATE TABLE usuarios (
id_usuario INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(70) NOT NULL,
email VARCHAR(120) NOT NULL UNIQUE,
senha VARCHAR (20) NOT NULL,
cadastrado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
plano_assinatura VARCHAR (50) DEFAULT 'Gratuito', 
telefone VARCHAR(12) NOT NULL,
pontos INT NOT NULL 
);

CREATE TABLE sessoes_foco (
id_sessao INT AUTO_INCREMENT PRIMARY KEY, 
id_usuario INT NOT NULL,
CONSTRAINT fk_sessao_usuario FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
inicio_sessao DATETIME NOT NULL,
fim_sessao DATETIME NOT NULL,
duracao_planejada INT NOT NULL,
apps_bloqueados TEXT NOT NULL,
status_sessao VARCHAR(50) NOT NULL
);

CREATE TABLE tarefas (
id_tarefa INT AUTO_INCREMENT PRIMARY KEY,
id_usuario INT NOT NULL,
CONSTRAINT fk_tarefa_usuario FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
titulo VARCHAR(50) NOT NULL,
prioridade ENUM ('Tarefa Normal', 'Modo foco') NOT NULL,
data_inicio DATE NOT NULL,
data_fim DATE NOT NULL,
descricao TEXT NULL,
andamento ENUM('Pendente', 'Em Andamento', 'Concluída', 'Cancelada') NOT NULL
);

select * from usuarios;
