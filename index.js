import express from 'express';
import db from './config/db.js';
import routes from './routes/routes.js';


const app = express();

// Conectar la base de datos
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(console.log)


// Definir puerto
const port = process.env.PORT || 4000;

//  habilitar pug
app.set('view engine', 'pug');

app.use((req, res, next) => {
    const year = new Date();

    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de viajes'
    return next();
})


//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));

// Definir la carpeta pública
app.use(express.static('public'))

// Definir rutas
app.use('/', routes)

app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`)
})