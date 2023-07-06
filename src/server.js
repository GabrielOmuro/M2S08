
const express = require('express') 
const cors = require('cors') 
const { connection } = require('./database/connection') 
const routers = require('./routers/index.routes') 


class Server {
  constructor (server = express())  { 
    this.middlewares(server)  
    this.database()   
    this.appRouters(server)  
    this.initializeServer(server)  
  }
/**
 * @param {*} app 
 */
  async middlewares(app) {
    app.use(cors()) 
    app.use(express.json()) 
  }

  async database() {
    try {
      await connection.authenticate(); 
      console.log('Conexão bem sucedida!');
    } catch (error) {
      console.error('Não foi possível conectar no banco de dados.', error);
      throw error
    }
  }
  /**
   * @param {*} app 
   */
  async initializeServer(app) {
    const PORT = 3333 
    app.listen(PORT, () => console.log(`Servidor executando na porta ${PORT}`)) 
  }

  async appRouters(app) {
    app.use(routers)
  }
}

module.exports = { Server } 