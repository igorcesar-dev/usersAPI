# API de Usuários
Está API é utilizada cada cadastrar, buscar, editar e/ou excluir usuários de um banco de dados. As tecnologias utilizadas foram:

* JavaScript;
* Node.JS;
* Knex.JS;
* JWT;
* Bcrypt;

## Endpoints
### 1 - GET /
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

### 2 - POST /user
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
&ensp; Caso essa resposta aconteça você vai receber uma mensagem de confirmação de cadastro. <br>
&ensp; Exemplo de resposta:
```
Usuário cadastrado com sucesso.
```

##### Status: 406 Not Acceptable
&ensp; Caso essa resposta aconteça, isso significa que occorreu alguma falha durante o processo de cadastro do usuário. <br>
&ensp; Motivos: O email do novo usuário pode já ter sido cadastrado. <br>
&ensp; Exemplo de resposta:
```
{
    "err": "O email já está cadastrado."
}
```

<hr>

### 3 - GET /user
&ensp; Esse endpoint é responsável por buscar todos os usuários no banco de dados, apresentando o id, nome, email e papel(para controle de acesso).

#### Parâmetros
&ensp; Nenhum.

#### Respostas
##### Status: 200 OK
&ensp; Caso essa resposta aconteça você vai receber uma mensagem. <br>
&ensp; Exemplo de resposta:
```
[
    {
        "id": 1,
        "email": "igor@gmail.com",
        "name": "Igor",
        "role": 0
    },
    {
        "id": 3,
        "email": "igor3@gmail.com",
        "name": "Igor2",
        "role": 0
    },
    {
        "id": 4,
        "email": "igor31@gmail.com",
        "name": "Igor2",
        "role": 0
    }
]
```
##### Status: 404 Not Found
&ensp; Caso essa resposta aconteça, isso significa que occorreu alguma falha durante o processo de busca dos usuários. <br>
&ensp; Motivos: Não há nenhum usuário cadastrado. <br>
&ensp; Exemplo de resposta:
```
{
    "err": "Nenhum usuário encontrado."
}
```

<hr>

### 4 - GET /user/:id
&ensp; Esse endpoint é responsável por buscar um usuário pelo id, apresentando o id, nome, email e papel(para controle de acesso).

#### Parâmetros
&ensp; Na rota da API você deve digitar o id do usuário que deseja buscar. <br>
&ensp; Por exemplo:
```
http://localhost:8686/user/3
```

#### Respostas
##### Status: 200 OK
&ensp; Caso essa resposta aconteça você vai receber uma mensagem. <br>
&ensp; Exemplo de resposta:
```
{
    "id": 3,
    "email": "igor3@gmail.com",
    "name": "Igor2",
    "role": 0
}
```
##### Status: 404 Not Found
&ensp; Caso essa resposta aconteça, isso significa que occorreu alguma falha durante busca do usuário apresentado.<br> 
&ensp; Motivos: Não há nenhum usuário cadastrado com esse ID. <br>
&ensp; Exemplo de resposta:
```
{
    "err": "Nenhum usuário encontrado."
}
```

<hr>

### 5 - PUT /user
&ensp; Esse endpoint é responsável por atualizar informações de um usuário, podendo ser apresentado o id para identificar o usuário e atualizar informações como nome, email e papel(para controle de acesso).

#### Parâmetros
```
{
    "id": 3,
    "email": "novoEmail@gmail.com",
    "name": "NovoNome",
    "role": "1"
}
```

#### Respostas
##### Status: 200 OK
&ensp; Caso essa resposta aconteça você vai receber uma mensagem. <br>
&ensp; Exemplo de resposta:
```
Usuário editado com sucesso.
```

##### 406 Not Acceptable
&ensp; Caso essa resposta aconteça, isso significa que o usuário não existe no banco de dados. <br>
&ensp; Exemplo de resposta:
```
O usuário não existe!
```
<hr>

### 6 - DELETE /user/:id
&ensp; Esse endpoint é responsável por deletar um usuário pelo id, apagando as informações desse usuário no banco de dados.

#### Parâmetros
&ensp; Na rota da API você deve digitar o id do usuário que deseja deletar. <br>
&ensp; Por exemplo:
```
http://localhost:8686/user/2
```

#### Respostas
##### Status: 200 OK
&ensp; Caso essa resposta aconteça você vai receber uma mensagem. <br>
&ensp; Exemplo de resposta:
```
Usuário deletado com sucesso.
```
##### Status: 406 Not Acceptable
&ensp; Caso essa resposta aconteça, isso significa que occorreu alguma falha durante o processo de exclusão do usuário. <br>
&ensp; Motivos: Não há nenhum usuário cadastrado com esse ID. <br>
&ensp; Exemplo de resposta:
```
O usuário não existe, portando não pode ser deletado.
```
<hr>


### 7 - POST /recoverypassword
&ensp; Esse endpoint é responsável por retornar um token ao usuário para o mesmo recuperar a senha.

#### Parâmetros
&ensp; Na rota da API você deve digitar o email do usuário que deseja recuperar a senha. <br>
&ensp; Por exemplo:
```
"email": "igor@gmail.com"
```

#### Respostas
##### Status: 200 OK
&ensp; Caso essa resposta aconteça você vai receber um token para recuperação de senha, esse token pode ser utilizado na rota seguinte /changepassword <br>
&ensp; Exemplo de resposta:
```
1679077070650
```
##### Status: 406 Not Acceptable
&ensp; Caso essa resposta aconteça, isso significa que occorreu alguma falha durante o processo de autenticação da requisição. <br>
&ensp; Motivos: Não há nenhum usuário cadastrado com esse email. <br>
&ensp; Exemplo de resposta:
```
O e-mail passado não existe no banco de dados.
```
<hr>

### 8 - POST /changepassword
&ensp; Esse endpoint é responsável por retornar um token ao usuário para o mesmo recuperar a senha.

#### Parâmetros
&ensp; Na rota da API você deve digitar o token recebido da rota /recoverypassword e digitar uma nova senha. <br>
&ensp; Por exemplo:
```
{
     "token": "1679077070650",
     "password": "novasenha"
}
```

#### Respostas
##### Status: 200 OK
&ensp; Caso essa resposta aconteça a senha será alterada com sucesso. <br>
&ensp; Exemplo de resposta:
```
Senha alterada com sucesso.
```
##### Status: 406 Not Acceptable
&ensp; Caso essa resposta aconteça, isso significa que occorreu alguma falha durante o processo. <br>
&ensp; Motivos: O token pode ser inválido. <br>
&ensp; Exemplo de resposta:
```
Token inválido.
```
<hr>


### 9 - POST /login
&ensp; Esse endpoint é responsável para realizar um login de um usuário retornando um token ao usuário.

#### Parâmetros
&ensp; Na rota da API você deve digitar o token recebido da rota /recoverypassword e digitar uma nova senha. <br>
&ensp; Por exemplo:
```
{
    "email": "igor@gmail.com",
    "password": "novasenha"
}
```

#### Respostas
##### Status: 200 OK
&ensp; Caso essa resposta aconteça a senha será alterada com sucesso. <br>
&ensp; Exemplo de resposta:
```
Senha alterada com sucesso.
```
##### Status: 406 Not Acceptable
&ensp; Caso essa resposta aconteça, isso significa que occorreu alguma falha durante o processo. <br>
&ensp; Motivos: O token pode ser inválido. <br>
&ensp; Exemplo de resposta:
```
Token inválido.
```
<hr>
