# Boilerplate MVC em Node.js com PostgreSQL

# Projeto Individual Integrado - Módulo 2025-1B

### Antes de começar: ###

---

Neste projeto, você será responsável por desenvolver um sistema web completo, com banco de dados, backend e frontend integrados. O objetivo é aplicar os conceitos do módulo e construir um projeto que possa ser incluído no seu portfólio profissional. Quem sabe você poderá apresentá-lo em um processo seletivo para estágio! 🚀

Você deve escolher um entre os tipos de sistema abaixo para desenvolver:
- Opção 1: Gerenciador de tarefas para organização e produtividade.
- Opção 2: Sistema de reserva de salas para agendamentos. 
- Opção 3: Plataforma de eventos com gerenciamento de inscrições. 

Seu projeto será desenvolvido progressivamente ao longo das semanas, por meio de entregas parciais (autoestudos ponderados 1, 2, 3 e 4), garantindo que cada etapa do sistema seja construída de forma estruturada.

## Requisitos:
Para que o sistema seja considerado completo, ele deverá incluir:

 ✅ Banco de Dados: Estrutura relacional ou não-relacional para armazenamento das informações.

 ✅ Backend: Implementação da lógica de negócio e conexão com o banco de dados.

 ✅ Frontend: Interface intuitiva para interação do usuário.

 ✅ Integração: Comunicação entre frontend e backend utilizando API.

 ✅ Documentação e código no GitHub: O código-fonte deve ser documentado e armazenado em um repositório público no seu perfil do GitHub.

 ## Entregas Parciais

[Semana 01 (UX Parte 1): Personas e US](UX_Ponderada1.md)  

[Semana 02 (COMP Parte 1): Base do Projeto](Comp_Ponderada1.md)  

[Semana 03 (UX Parte 2): Wireframes](UX_Ponderada2.md)  

[Semana 04 (COMP Parte 2): Conectando Banco de Dados e Servidor](Comp_Ponderada2.md)  

[Semana 05 (UX Parte 3): Protótipo de Alta](UX_Ponderada3.md)  

[Semana 06 (COMP Parte 3): Sistema Completo com Funcionalidades e Interface](Comp_Ponderada3.md)  

[Semana 07 (COMP Parte 4): Demonstração e Documentação](Comp_Ponderada4.md)  


## Requisitos

- Node.js (versão X.X.X)
- PostgreSQL (versão X.X.X)

## Instalação

1. **Clonar o repositório:**

```bash
   git clone https://github.com/seu-usuario/seu-projeto.git
   cd seu-projeto
```

2. **Instalar as dependências:**
    
```bash
npm install
```
    
3. **Configurar o arquivo `.env`:**
    
Renomeie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente necessárias, como as configurações do banco de dados PostgreSQL.
    

Configuração do Banco de Dados
------------------------------

1. **Criar banco de dados:**
    
    Crie um banco de dados PostgreSQL com o nome especificado no seu arquivo `.env`.
    
2. **Executar o script SQL de inicialização:**
    
```bash
npm run init-db
```
    
Isso criará a tabela `users` no seu banco de dados PostgreSQL com UUID como chave primária e inserirá alguns registros de exemplo.
    

Funcionalidades
---------------

* **Padrão MVC:** Estrutura organizada em Model, View e Controller.
* **PostgreSQL:** Banco de dados relacional utilizado para persistência dos dados.
* **UUID:** Utilização de UUID como chave primária na tabela `users`.
* **Scripts com `nodemon`:** Utilização do `nodemon` para reiniciar automaticamente o servidor após alterações no código.
* **Testes:** Inclui estrutura básica para testes automatizados.

Scripts Disponíveis
-------------------

* `npm start`: Inicia o servidor Node.js.
* `npm run dev`: Inicia o servidor com `nodemon`, reiniciando automaticamente após alterações no código.
* `npm run test`: Executa os testes automatizados.
* `npm run test:coverage`: Executa os testes e gera um relatório de cobertura de código.

Estrutura de Diretórios
-----------------------

* **`config/`**: Configurações do banco de dados e outras configurações do projeto.
* **`controllers/`**: Controladores da aplicação (lógica de negócio).
* **`models/`**: Modelos da aplicação (definições de dados e interações com o banco de dados).
* **`routes/`**: Rotas da aplicação.
* **`tests/`**: Testes automatizados.
* **`views/`**: Views da aplicação (se aplicável).

Contribuição
------------

Contribuições são bem-vindas! Sinta-se à vontade para abrir um issue ou enviar um pull request.

Licença
-------

Este projeto está licenciado sob a Licença MIT.

Este README.md fornece uma visão geral clara do boilerplate, incluindo instruções de instalação, configuração do banco de dados, funcionalidades principais, scripts disponíveis, estrutura de diretórios, como contribuir e informações de licença. Certifique-se de personalizar as seções com detalhes específicos do seu projeto conforme necessário.