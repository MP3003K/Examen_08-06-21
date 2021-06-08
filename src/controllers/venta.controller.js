import { pool } from '../database'
const helpers = require('../libs/helpers');


export const readAllventa = async(req, res)=>{
    try {
        const response = await pool.query('select *from venta');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
export const readVenta = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select *from venta where idventa=$1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
export const delVenta = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from venta where idventa=$1', [id]);
        return res.status(200).json(
            `Venta ${ id } eliminado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
export const updateVenta = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const{tipodoc, numdoc, idcliente,idusuario,idempleado} = req.body;
        await pool.query('update venta set tipodoc=$1, numdoc =$2 , idcliente=$3 ,idusuario=$4, idempleado=$5 where idventa=$6', [tipodoc, numdoc, idcliente,idusuario, idempleado, id]);
        return res.status(200).json(
            `Venta ${ id } modificado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
export const createVenta= async(req, res)=>{
    try {
        const{ tipodoc, numdoc, idcliente,idusuario,idempleado} = req.body;
        await pool.query('insert into venta(tipodoc, numdoc, idcliente,idusuario,idempleado) values($1,$2,$3,$4,$5)', [tipodoc, numdoc, idcliente,idusuario,idempleado]);
        return res.status(200).json(
            `Producto ${ idusuario } creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}