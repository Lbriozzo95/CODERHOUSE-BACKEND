import express from 'express';
import upload from '../services/upload.js'
import Products from '../classes/products.controllers.js';
import Server from '../server.js'

const router = express.Router();
const productos = new Products();

// CONSULTA DE PRUEBA
router.get('/', (req,res) =>{
    res.send('Hola mundo');
})

//METODO GET
//-> DEVOLVIENDO UN ARRAY CON TODOS LOS PRODUCTOS
router.get('/allProducts', (req,res) =>{
    productos.getAllProducts().then(result=>{
        if(result.status === "Success"){
            res.status(200).send(result)
        } else{
            res.status(404).send(result.message)
        }
    });
})

//-> DEVUELVE UN PRODUCTO SEGUN SU ID
router.get('/:id', (req,res) =>{
    let id = req.params.id;
    productos.getById(id).then(result=>{
        if(result.status === "Success"){
            res.status(200).send(result)
        } else {
            res.status(404).send(result.message)
        }
    })
});


// METODO POST
//-> RECIBE Y AGREGA UN PRODUCTO Y LO DEVUELVE CON SU ID ASIGNADO
router.post('/addProduct',upload.single('image'),(req,res) =>{
    let file = req.file;
    let product = req.body;
    
    product.thumbnail = req.protocol+"://"+req.hostname+":3535"+'/images/'+file.filename;
    console.log(product)
    productos.createProduct(product).then(result=>{
        res.send(result);  
    })
})

//-> CARGAR MULTIPLES IMAGENES -> IMPORTANTE QUE CONTENGA FILE'S' O IMAGE'S' Y UPLOAD.ARRAY -> PRUEBA
router.post('/uploadFile', upload.array('images'), (req,res) => {
    const files = req.files;
    console.log(files)
    if(!files||files.length===0){
        res.status(500).send({message:"No se pudo subir el archivo"})
    }
    res.send(files);
})

//-> CARGAR UN SOLO ARCHIVO O IMAGEN "CAMBIO FILE POR IMAGE" -> PRUEBA
router.post('/uploadFile', upload.single('file'), (req,res) => {
    const file = req.file;
    console.log(file)
    if(!file||file.length===0){
        res.status(500).send({message:"No se pudo subir el archivo"})
    }
    res.send(file);
})



// METODO PUT 
//-> RECIBE Y ACTUALIZA UN PRODUCTO SEGUN SU ID
router.put('/:id', (req,res) => {
    let id = req.params.id;
    productos.uptdateByid(id).then(result =>{
        if(result.status === "Success"){
            res.status(200).send(result.product)
        } else {
            res.status(404).send(result.message)
        }
    })

})

//METODO DELETE
//->ELIMINA UN PRODUCTO SEGUN SU ID
router.delete('/:id', (req,res) =>{
    let id = req.params.id;
    productos.deleteById(id).then(result=>{
        if(status === "Success"){
            res.status(200).send(result.product)
        } else {
            res.status(404).send(result.message)
        }
    })
})

export default router;
