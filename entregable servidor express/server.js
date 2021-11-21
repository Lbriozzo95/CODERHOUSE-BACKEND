
const express = require('express');
const app = express();
const PORT = process.env.PORT||3030; 

const fs = require('fs');
const products = require('./classes/products.controllers');

const productos = new products()



const server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

server.on('error', error =>{
    console.log('Sorry we found a problem ', error)
})

//MIDDLEWARS
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// -> PETICIONES GET

// CONSULTA DE PRUEBA
app.get('/', (req,res) =>{
    res.send('Hola mundo');
})

//-> DEVOLVIENDO UN ARRAY CON TODOS LOS PRODUCTOS
app.get('/productos', (req,res) =>{
    productos.getAllProducts().then(result=>{
        if(result.status === "Success"){
            res.status(200).send(result.products)
        } else{
            res.status(404).send(result.message)
        }
    });
})

//-> DEVOLVIENDO UN PRODUCTO RANDOM
app.get('/productosRandom',(req,res) =>{
    productos.getRandomProduct().then(result=>{
        if(result.status === "Success"){
            res.status(200).send(result.productoRandom)
        } else {
            res.status(404).send(result.message)
        }
    });
})
