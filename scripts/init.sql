-- init.sql

-- Criar tabela de usuários com UUID como chave primária
CREATE TABLE IF NOT EXISTS evento (
id SERIAL PRIMARY KEY,
evento VARCHAR(150),
endereço VARCHAR(300),
data TIMESTAMP,
FOREIGN KEY (id_programa) REFERENCES programação(id),
FOREIGN KEY (id_adm) REFERENCES administrador(id),
FOREIGN KEY (id_participante) REFERENCES participante(id)
);
CREATE TABLE IF NOT EXISTS administrador(
id SERIAL PRIMARY KEY,
nome VARCHAR(100),
FOREIGN KEY (id_evento) REFERENCES evento(id),
email VARCHAR(300)
);
CREATE TABLE IF NOT EXISTS participante (
id SERIAL PRIMARY KEY,
nome VARCHAR(100),
email VARCHAR(300),
cpf INT,
FOREIGN KEY (id_evento) REFERENCES evento(id)
);
CREATE TABLE IF NOT EXISTS programação (
id SERIAL PRIMARY KEY,
data TIMESTAMP,
descrição VARCHAR(500),
FOREIGN KEY (id_evento) REFERENCES evento(id)
);