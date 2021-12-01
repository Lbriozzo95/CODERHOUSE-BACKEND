//MODULES
//->
import productRouter from './routes/products.routes.js';
import Products from './classes/products.controllers.js';
import upload from './services/upload.js';
import cors from 'cors';
import express from 'express';
import {__dirname} from './utils.js';
import {engine} from 'express-handlebars';


//SERVER
//->
const app = express();
const PORT = process.env.PORT||3535;
const server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

server.on('error', error =>{
    console.log('Sorry we found a problem ', error)
});



//MIDDLEWARS
//->

app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+'/public'))
app.use((req,res,next)=>{
    console.log(new Date().toTimeString().split(" ")[0], req.method, req.url);
    next();
})


app.use(upload.single('image'));
app.use(upload.array('images'));

//ROUTES
//->
app.use('/api/productos', productRouter);

export default server;
