
DROP TABLE IF EXISTS evento CASCADE;
DROP TABLE IF EXISTS administrador CASCADE;
DROP TABLE IF EXISTS participante CASCADE;
DROP TABLE IF EXISTS programação CASCADE;


CREATE TABLE evento (
    id SERIAL PRIMARY KEY,
    data TIMESTAMP,
    id_programa INTEGER,
    id_adm INTEGER,
    id_participante INTEGER
);

CREATE TABLE administrador (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(300),
    senha VARCHAR(255), -- Added for authentication
    id_evento INTEGER,
    FOREIGN KEY (id_evento) REFERENCES evento(id) ON DELETE SET NULL
);

CREATE TABLE participante (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(300),
    cpf INTEGER,
    id_evento INTEGER,
    FOREIGN KEY (id_evento) REFERENCES evento(id) ON DELETE SET NULL
);

CREATE TABLE programação (
    id SERIAL PRIMARY KEY,
    data TIMESTAMP,
    descrição VARCHAR(500),
    id_evento INTEGER,
    FOREIGN KEY (id_evento) REFERENCES evento(id) ON DELETE SET NULL
);


ALTER TABLE evento 
ADD CONSTRAINT fk_evento_programa 
FOREIGN KEY (id_programa) REFERENCES programação(id) ON DELETE SET NULL;

ALTER TABLE evento 
ADD CONSTRAINT fk_evento_adm 
FOREIGN KEY (id_adm) REFERENCES administrador(id) ON DELETE SET NULL;

ALTER TABLE evento 
ADD CONSTRAINT fk_evento_participante 
FOREIGN KEY (id_participante) REFERENCES participante(id) ON DELETE SET NULL;
