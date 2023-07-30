import express from 'express'
import {dirname, join} from 'path'
import { fileURLToPath } from 'url'
import fetch from "node-fetch";
import jwt from "jsonwebtoken";
import axios from "axios";
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import dotenv from "dotenv"
import PDFDocument from "pdfkit";
import path from "path";
import indexRoutes from './routes/index.js'
dotenv.config();
const app = express()


const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.json()); // para peticiones con Content-Type: application/json
app.use(express.urlencoded({ extended: true })); // para peticiones con Content-Type: application/x-www-form-urlencoded
app.use(cookieParser());

app.use(indexRoutes);

app.use(express.static(join(__dirname, 'public')))

app.listen(2000)
console.log('Server is listening on port', 2000)