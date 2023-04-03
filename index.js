const express = require('express');
const server = express();

var bodyParser = require("body-parser");
server.use(bodyParser.json());




var porta = 8005;
server.listen(porta,() => {
 console.log ('O servidor está funcionando na porta', porta)
});
let array_usuarios = []

// rota post : permite que clientes enviem dados para um servidor. 
//Essa rota é comumente utilizada para a criação de novos recursos 
//como criar um novo usuário em um sistema).


//Quando o cliente envia uma requisição POST com dados no corpo, esses dados são recebidos pelo servidor
// e armazenados no objeto req.body. 
//Esse objeto pode ser acessado dentro da rota para manipulação dos dados.

server.post('/usuarios', function(req, res)  {
    const { cpf, nome, data_nascimento } = req.body;
    const usuario = { cpf, nome, data_nascimento };
    array_usuarios.push(usuario);
    res.send('Usuário cadastrado com sucesso!');
});


server.get('/usuarios/:cpf', function(req, res) {
   const cpf = req.params.cpf;
   for (let i = 0; i < array_usuarios.length; i++){
    if (array_usuarios[i].cpf == cpf){
        return res.json(array_usuarios[i]);
    } 
   }
   res.json({message: 'Esse usuário não foi encontrado'})

   });