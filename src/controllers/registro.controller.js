import { Router } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import fetch from "node-fetch";
import excel from "exceljs"
import PDFDocument from "pdfkit"
import axios from "axios";

import fs from "fs"

dotenv.config();

const registrar = async (req, res) => {
    const nuevoUsuario = {
        id_usuario: req.body.ID_USUARIO,
        nombre: req.body.NOMBRE,
        apellido: req.body.APELLIDO,
        email: req.body.EMAIL,
        telefono: req.body.TELEFONO,
        direccion: req.body.DIRECCION, 
        id_rol: req.body.ID_ROL, 
        fecha_nacimiento: req.body.FECHA_NACIMIENTO,
        contrasena: req.body.CONTRASENA,
        genero: req.body.GENERO,

    };
    console.log('nuevoUsuario', nuevoUsuario);
    axios.post(process.env.API + 'api', nuevoUsuario)
        .then(response => {
            console.log(response.data);
            // Aquí puedes realizar alguna acción adicional o mostrar un mensaje de éxito.
            res.redirect('/login')

        })
        .catch(error => {
            console.error(error);
            // Aquí puedes manejar el error de alguna manera o mostrar un mensaje de error.
            res.json({ error: 'Error en el registro' }); // Redirige a una página de error o a donde desees.
        });
};

export default registrar;