import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import path from 'path'
import productoRouter from './routes/productos.routes'
//Llamar a la conexion a la BD
import './database'

//Crear una instancia de express
const app = express();  
//Configurar un puerto
app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), ()=>{
    console.log('Estoy en el puerto ' + app.get('port'));
});

//middlewares: funciones que se ejecutan antes de llegar a las rutas
app.use(cors()); //Permite peticiones remotas
//Permite recibir y usar objetos en formato json
app.use(express.json());
app.use(express.urlencoded({extended:true}));//Descarga el formato json y lo interpreta
//Informacion extra
app.use(morgan('dev'))
//Cargar un archivo estatico
app.use(express.static(path.join(__dirname, '../public')))

//rutas:
// app.get('/prueba', (req, res)=>{
//     res.send('desde el backend en la peticion get')
// }) 

//La direccion seria http://localhost/4000/apicafe/prueba
app.use('/apicafe', productoRouter)