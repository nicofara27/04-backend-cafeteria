import express from 'express'

//Crear una instancia de express
const app = express();  
//Configurar un puerto
app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), ()=>{
    console.log('Estoy en el puerto ' + app.get('port'));
});

//middlewares: funciones que se ejecutan antes de llegar a las rutas

//rutas: 