const http = require('http');
const app = require('./src/app');
const { PORT } = process.env;


const server = http.createServer(app);


server.listen(PORT, () => {
    console.log(`Aplicacion corriendo en el puerto ${PORT}`);
})