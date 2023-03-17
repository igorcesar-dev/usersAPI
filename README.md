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

#### Parâmetros
&ensp; Nenhum

#### Respostas
##### Status: 200 OK <br>
&ensp; Caso essa resposta aconteça você vai receber o menu inicial da API.<br>
&ensp; Exemplo de resposta:
```
Seja bem-vindo(a) a API de usuários, essa API foi criada no curso de Formação Node.JS
```
<hr>

### POST /user
&ensp; Esse endpoint é responsável por criar um novo usuário no banco de dados, com inserção de nome, email e senha.

#### Parâmetros
```
{
     "name": "Igor César",
     "email": "igor@gmail.com",
    "password": "123"
}
```

#### Respostas
##### Status: 200 OK
&ensp; Caso essa resposta aconteça você vai revce <br>
&ensp; Exemplo de resposta:
```
Usuário cadastrado com sucesso.
```
<hr>
