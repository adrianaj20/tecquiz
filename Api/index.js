require('./config/conexion')

const cors = require('cors');

const express = require('express');
const port = (process.env.port || 3000);

const app = express();

app.use(cors());
app.use(express.json())

app.set('port', port)

app.use('/usuarios', require('./rutas'))

app.use('/temas', require('./rutas_temas'))

app.listen(app.get('port'), (error)=>{
    if(error){
        console.log('error al iniciar el servidor: '+error)
    }
    else{
        console.log('servidor iniciado en el puerto: '+port)
    }
})