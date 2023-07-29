import { Router } from "express";
import jsPDF from "jspdf";
import { generatePdf } from "../public/js/registrogenerador.js";
const router = Router()


router.get('/login', (req, res) => res.render('login', {title: 'Login Lepus'}))

router.get('/registro', (req, res) => res.render('registro', {title: 'registro'}))


// Interfaz usuario
router.get('/', (req, res) => res.render('index', {title: 'LEPUS'}))

router.get('/autoevaluamarketing', (req, res) => res.render('Autoevaluamarketing', {title: 'Autoevalua Marketing'}))

router.get('/idea', (req, res) => res.render('idea', {title: 'Idea de negocio'}))

router.get('/contacto', (req, res) => res.render('contacto', {title: 'Contacto'}))

router.get('/portafolio', (req, res) => res.render('portafolio', {title: 'Portafolio'}))

router.get('/nosotros', (req, res) => res.render('nosotros', {title: 'Nosotros'}))

router.get('/perfil', (req, res) => res.render('perfil', {title: 'perfil'}))

router.get('/portancity', (req, res) => res.render('portancity', {title: 'A & N CITY'} ))

router.get('/portfim', (req, res) => res.render('portfim', {title: 'Fimision'} ))

router.get('/portbradd', (req, res) => res.render('portbradd', {title: 'Braddning'} ))

router.post('/generatePdf', generatePdf);

// Interfaz administrador
router.get('/admincontacto', (req, res) => res.render('admincontacto', {title: 'AContacto'}))

router.get('/adminportafolio', (req, res) => res.render('adminportafolio', {title: 'APortafolio'}))


export default router  

