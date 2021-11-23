const { response } = require('express');
const fs = require('fs');
const makeId = require('../utils');
const makeIdNumber = require('../utils')


class Products{ 
    async createProduct(product){
        try{
            let data = await fs.promises.readFile('./files/productos.txt', 'utf-8')
            let products = JSON.parse(data);
            if(products.some(prdct=>prdct.title===product.title)){
                return {status:"error",message:"Ya existe un producto registrado con ese nombre"}
            } else {
                
                let dataObj = {
                    id:makeId(7),
                    title: product.title,
                    price: product.price,
                    thumbnail: product.thumbnail
                    }
                    products.push(dataObj);
                    try{
                        await fs.promises.writeFile('./files/productos.txt', JSON.stringify(products,null,2));
                        return {status:"Success", message:"Producto agregado con exito"}
                        // console.log('Producto agregado con exito')
                    }catch(err){    
                        return {status:"Error", message:"No se pudo crear el producto"}

                    }
            }   
        }catch{

            let dataObj = {
                id:makeId(7),
                title: product.title,
                price: product.price,
                thumbnail: product.thumbnail
                }
        try{    
            await fs.promises.writeFile('./files/productos.txt', JSON.stringify([dataObj], null, 2));
            return {status:"Success", message:"Producto registrado con exito"};
            // console.log('Producto creado con exito')
        }catch(error){
            return {status:"Error", message:"No se pudo registrar el producto "+error};
            // console.log(error);

        }
    }
}

async getById(id){
    try{
        let data = await fs.promises.readFile('./files/productos.txt', 'utf-8')
        let products = JSON.parse(data);
        let product = products.filter(prdct=>prdct.id===id);
        if(product){
            return{status:"Success", product:product}
        }      

    }catch(err){    
        return {status:"Error", message:"No se encontro el ID buscado"}

    }
}

async getAllProducts (products){
   try{ 
    let data = await fs.promises.readFile('./files/productos.txt', 'utf-8')
    let products = JSON.parse(data);
    return {status:"Success", products}
}
    catch(error){
        return {status:"Error", message:"Ups..No se pudieron obtener los productos"+error}
    }
}

async deleteById(id){
   
    try{
    let data = await fs.promises.readFile('./files/productos.txt', 'utf-8')
    let products = JSON.parse(data);
    let product = products.filter(prdct=>prdct.id!==id);
    if(product){    
        console.log(product)
        return{status:"Success", product:product}} 

    } catch(error){
        return {status:"Error", message:"No se encontro el ID buscado "+error}

    }
}

async deleteFile(file){
    try{    
        let data = await fs.promises.unlink('./files/productos.txt').then(()=>{
            return{status:"Success", message:"Archivo eliminado con exito"}
        })
        
    }
    catch(error){
        return {status:"Error", message:"Ups, hubo un problema para eliminar el archivo "+error}
        // console.log("Algo anduvo mal tratando de eliminar el archivo "+error)

    }
}

async getRandomProduct(product){
    let contRandom = 0;

    try{

    contRandom++;
    let data = await fs.promises.readFile('./files/productos.txt', 'utf-8');
    let products = JSON.parse(data);
    let numeroAleatorio = Math.floor(Math.random() * products.length)
    let productoRandom = products[numeroAleatorio];
    return {status:"Success", productoRandom}
    }
    catch(error){
        return {status:"Error", message:"Error, Algo anduvo mal "+error}
    }
}

async uptdateByid(id){
    try{
        let data = await fs.promises.readFile('./files/productos.txt', 'utf-8')
        let products = JSON.parse(data);
        let product = req.body
        if(id){
        product = products.map((products)=>{
            if(id === products.id){ 
                products.title = product.title;
                products.price = product.price;
                products.thumbnail = product.thumbnail;
                return {status:"Success", products:product}
            }
        })

        } else {
            return {message:"No se encontro ningun producto con el ID especificado"}
        }
        res.json(product)

    }catch(err){    
        return {status:"Error", message:"No se encontro el ID buscado"}

    }

}

}

module.exports = Products;
