//-> INICIALIZANDO SERVIDOR CON EXPRESS
const express = require('express');
const app = express();
const PORT = process.env.PORT||3535;
const server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

server.on('error', error =>{
    console.log('Sorry we found a problem ', error)
});

//-> EXPORTANDO RUTAS PRODUCTOS // ROUTER
const productRouter = require('./routes/products.routes');
//->

//-> EXPORTANDO CLASE PRODUCTOS
const Products = require('./classes/products.controllers');
//->

//-> EXPORTANDO CORS PARA PODER REALIZAR PETICIONES POST AL SERVIDOR
const cors =require('cors')
//->

//-> EXPORTANDO MULTER DESDE SERVICES -> UPLOAD.JS
const upload = require('./services/upload')

//MIDDLEWARS
//->
app.use(upload.single('image'));
app.use(upload.array('images'));
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/images', express.static(__dirname +'/public'))
app.use(express.static(__dirname +'/files'))
app.use(cors());


//ROUTES
//->
app.use('/api/productos', productRouter);
