const Products = require('./classes/products.controller');

const productos = new Products();

//GENERANDO EL OBJETO {PRODUCTO} Y GUARDANDOLO CON UN ID DENTRO DEL ARRAY 
// productos.createProduct({

//     title:'Swimwear Tao',
//     price: 3260,
//     thumbnail:'https://media.karousell.com/media/photos/products/2020/12/15/swimwears_swimsuits_1608001211_883e5fb9_progressive.jpg'

// }).then(result=>{
//     console.log(result.message);
// })

//BUSCANDO PRODUCTO POR ID
// productos.getById("IXLKCXF").then(result=>{
//     console.log(result.product);
// })

//DEVOLVIENDO TODOS LOS PRODUCTOS DEL ARRAY
// productos.getAllProducts()

// ELIMINADO ARCHIVO POR ID
// productos.deleteById('YHS1M58').then(result =>{
//     console.log(result.product);
// })

//ELIMINANDO TODOS LOS ARCHIVOS
// productos.deleteFile().then(result => {
//     console.log(result.message);
// })
