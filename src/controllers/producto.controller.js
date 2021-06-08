import { pool } from '../database'
const helpers = require('../libs/helpers');


export const readAllProductos = async(req, res)=>{
    try {
        const response = await pool.query('select *from producto');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
export const readProductos = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select *from producto where idproducto=$1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
export const delProducto = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from producto where idproducto=$1', [id]);
        return res.status(200).json(
            `Producto ${ id } eliminado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
export const updateProducto = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const{nomprod, precio, stock} = req.body;
        await pool.query('update producto set nomprod=$1, precio =$2 , stock=$3 where idproducto=$4', [nomprod, precio, stock,  id]);
        return res.status(200).json(
            `Usuario ${ id } modificado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
export const createProducto= async(req, res)=>{
    try {
        const{ nomprod, precio,stock} = req.body;
        await pool.query('insert into producto(nomprod, precio, stock) values($1,$2,$3)', [nomprod, precio,stock]);
        return res.status(200).json(
            `Producto ${ nomprod } creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}