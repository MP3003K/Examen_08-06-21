import { pool } from '../database'
const helpers = require('../libs/helpers');


export const readAlldetalle = async(req, res)=>{
    try {
        const response = await pool.query('select *from detalle');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error1...!');
    }
}
export const readDetalle = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select *from detalle where iddetalle=$1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
export const delDetalle = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from detalle where iddetalle=$1', [id]);
        return res.status(200).json(
            `Detalle de venta ${ id } eliminado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
export const updateDetalle = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const{precio, cantidad, idproducto,idventa} = req.body;
        await pool.query('update detalle set precio=$1, cantidad =$2 , idproducto=$3 ,idventa=$4 where iddetalle=$5', [precio, cantidad, idproducto,idventa, id]);
        return res.status(200).json(
            `Venta ${ id } modificado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error2...!');
    }
}
export const createDetalle= async(req, res)=>{
    try {
       const{precio, cantidad, idproducto,idventa} = req.body;
       console.log(req.body);
       
       await pool.query('insert into detalle (precio, cantidad, idproducto,idventa) values($1,$2,$3,$4)', [precio, cantidad, idproducto,idventa]);
        return res.status(200).json(
            `Producto ${ idventa } creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error3...!');
    }
}