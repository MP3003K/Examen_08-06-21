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
        const response2 = await pool.query('delete from detalle where idventa=$1', [id]);

        return res.status(200).json(
            `Venta ${ id } y detalle eliminado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
export const updateVenta = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const{tipodoc, numdoc, idcliente,idusuario,idempleado,precio,cantidad,idproducto} = req.body;
        await pool.query('update venta set tipodoc=$1, numdoc =$2 , idcliente=$3 ,idusuario=$4, idempleado=$5 where idventa=$6', [tipodoc, numdoc, idcliente,idusuario, idempleado, id]);
        await pool.query('update detalle set precio=$1, cantidad =$2 , idproducto=$3  where idventa=$4', [precio,cantidad,idproducto, id]);

        return res.status(200).json(
            `Venta ${ id } y detalle modificado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
export const createVenta= async(req, res)=>{
    try {
        const{ tipodoc, numdoc, idcliente,idusuario,idempleado,precio, cantidad, idproducto} = req.body;
    console.log(req.body);
        const reponse = await pool.query('insert into venta(tipodoc, numdoc, idcliente,idusuario,idempleado) values($1,$2,$3,$4,$5) returning idventa', [tipodoc, numdoc, idcliente,idusuario,idempleado]);
      const idventa=reponse.rows[0][1];
    
      console.log(idventa);
      
      await pool.query('insert into detalle (precio, cantidad, idproducto,idventa) values($1,$2,$3,$4)', [precio, cantidad, idproducto,idventa]);

        return res.status(200).json(
            `Venta  y detalle creado correctamente...!`);
       
               
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}