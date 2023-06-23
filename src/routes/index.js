import { Router } from "express"

const router = Router()

router.get('/', (req, res) => res.render('index', {title: 'LEPUS'}))

router.get('/autoevaluamarketing', (req, res) => res.render('autoevaluamarketing', {title: 'Autoevalua Marketing'}))

router.get('/idea', (req, res) => res.render('idea', {title: 'Idea de negocio'}))

router.get('/contacto', (req, res) => res.render('contacto', {title: 'Contacto'}))

router.get('/portafolio', (req, res) => res.render('portafolio', {title: 'Portafolio'}))

router.get('/nosotros', (req, res) => res.render('nosotros', {title: 'Nosotros'}))

router.get('/login', (req, res) => res.render('login', {title: 'Login Lepus'}))

router.get('/registro', (req, res) => res.render('registro', {title: 'registro'}))

export default router