import { Router } from "express";
import jsPDF from "jspdf";
import { loginUser,  logoutUser  } from '../controllers/login.controller.js';
import { generatePdf } from "../public/js/registrogenerador.js";
import registrar from "../controllers/registro.controller.js";
import { requireAuth, requireAuthJSON} from '../midleware/authMiddleware.js';


const router = Router()


router.post('/login', loginUser);
router.get('/logout', logoutUser);

router.get('/login', (req, res) => res.render('login', {title: 'Login Lepus'}))

router.get('/registro', (req, res) => res.render('registro', {title: 'registro'}))
router.post('/registrar',registrar)


// Interfaz usuario
router.get('/',requireAuth, (req, res) => res.render('index', {title: 'LEPUS'}))

router.get('/autoevaluamarketing',requireAuth, (req, res) => res.render('Autoevaluamarketing', {title: 'Autoevalua Marketing'}))

router.get('/idea',requireAuth, (req, res) => res.render('idea', {title: 'Idea de negocio'}))

router.get('/contacto',requireAuth, (req, res) => res.render('contacto', {title: 'Contacto'}))

router.get('/portafolio',requireAuth, (req, res) => res.render('portafolio', {title: 'Portafolio'}))

router.get('/nosotros',requireAuth, (req, res) => res.render('nosotros', {title: 'Nosotros'}))

router.get('/perfil',requireAuth, (req, res) => res.render('perfil', {title: 'perfil'}))

router.get('/portancity',requireAuth, (req, res) => res.render('portancity', {title: 'A & N CITY'} ))

router.get('/portfim',requireAuth, (req, res) => res.render('portfim', {title: 'Fimision'} ))

router.get('/portbradd',requireAuth, (req, res) => res.render('portbradd', {title: 'Braddning'} ))

router.post('/generatePdf', generatePdf);

// Interfaz administrador
router.get('/admincontacto',requireAuth, (req, res) => res.render('admincontacto', {title: 'AContacto'}))

router.get('/adminportafolio',requireAuth, (req, res) => res.render('adminportafolio', {title: 'APortafolio'}))


export default router  

