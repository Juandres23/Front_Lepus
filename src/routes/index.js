import { Router } from "express"
import * as pdf from "../public/js/registrogenerador.js"
const router = Router()

router.get('/', (req, res) => res.render('index', {title: 'LEPUS'}))

router.get('/autoevaluamarketing', (req, res) => res.render('Autoevaluamarketing', {title: 'Autoevalua Marketing'}))

router.get('/idea', (req, res) => res.render('idea', {title: 'Idea de negocio'}))

router.get('/contacto', (req, res) => res.render('contacto', {title: 'Contacto'}))

router.get('/portafolio', (req, res) => res.render('portafolio', {title: 'Portafolio'}))

router.get('/nosotros', (req, res) => res.render('nosotros', {title: 'Nosotros'}))

router.get('/login', (req, res) => res.render('login', {title: 'Login Lepus'}))

router.get('/registro', (req, res) => res.render('registro', {title: 'registro'}))

router.get('/perfil', (req, res) => res.render('perfil', {title: 'perfil'}))

router.get('/portancity', (req, res) => res.render('portancity', {title: 'A & N CITY'} ))

router.get('/portfim', (req, res) => res.render('portfim', {title: 'Fimision'} ))

router.get('/portbradd', (req, res) => res.render('portbradd', {title: 'Braddning'} ))

router.post('/generatePdf', pdf.pdfGenerate)


export default router  

