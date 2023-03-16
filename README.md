# API de Usuários
Está API é utilizada cada cadastrar, buscar, editar e/ou excluir usuários de um banco de dados. As tecnologias utilizadas foram:

* JavaScript;
* Node.JS;
* Knex.JS;
* JWT;
* Bcrypt;

## Endpoints
### GET /
&ensp; Esse endpoint é responsável por retornar o menu inicial da API.

#### Parametros
&ensp; Nenhum

#### Respostas
##### OK! 200
&ensp; Caso essa resposta aconteça você vai receber a listagem de todos os usuários

### POST /user
&ensp; Esse endpoint é responsável por criar um novo usuário no banco de dados, com inserção de nome, email e senha.

### GET /user
&ensp; Esse endpoint é responsável por exibir todos os usuários cadastros.

### GET /user/:id
&ensp; Esse endpoint é responsável por exibir todos os usuários cadastros.

### PUT /user


### DELETE /user/:id


### POST /recoverypassword


### POST /changepassword


### POST /login
