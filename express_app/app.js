// Importação e criação de um app express
const express = require('express');
const app = express()
  
// Mensagem para confirmação do sucesso na instalação do contêiner
msg = "Nodejs funcionando no contêiner docker"
// Direcionando o express para a raiz da aplicação
app.get('/', (req, res) => res.send(msg));
  
// Rodando a aplicação na porta 3000
app.listen(3000, () => {
    console.log("app running on port 3000...");
})