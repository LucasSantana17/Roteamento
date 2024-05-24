import http from 'http';
import app from './app.js';
const PORT = process.env.PORT || 3000;


const server = http.createServer(app);

const serverRodando =_=> console.log('Servidor rodando...');

server.listen(PORT, serverRodando);



