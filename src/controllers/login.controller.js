import axios from 'axios';
import jwt from 'jsonwebtoken';


const loginUser = async (req, res) => {
  console.log('req.body:', req.body);
  const { email, contrasena, id_rol} = req.body;

  // Validación de campos vacíos
  if (email === '' || contrasena === '' || id_rol === '') {
    return res.json({ error: 'Todos los campos son obligatorios' });
  }

  try {
    const response = await axios.get(process.env.API +'api');
    const usuarioData = response.data;
    const user = usuarioData[0];
    const usuario = user.find((u) => u.EMAIL === email);

    if (!usuario) {
      return res.json({ error: 'Usuario no encontrado' });
    }

    if (usuario.CONTRASENA !== contrasena) {
      return res.json({ error: 'Usuario o contrasena incorrecta' });
    }

    if (usuario.ID_ROL !== parseInt(id_rol)) {
      return res.json({ error: 'No tiene permiso para acceder a este recurso' });
    }
    // Generación del token JWT
    const token = jwt.sign({ id: user.ID_USUARIO, name: user.NOMBRE, type: user.ID_ROL }, process.env.JWT_SECRET, {
      expiresIn: '24h',
    }); 

    // Envío del token en la cookie
    res.cookie('authToken', token, { httpOnly: true, secure: process.env.NODE_ENV !== 'development' });
    console.log('Token JWT:', token); // Agrega esta línea para depurar
    // Redireccionar según el tipo de usuario
    if (usuario.ID_ROL === 1) {
      res.json({ redirect: "/adminportafolio" });
    } else if (usuario.ID_ROL === 2) {
      res.json({ redirect: "/" });

    } else {
      res.status(400).json({ error: 'Tipo de usuario no reconocido' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener datos de usuarios', error: error.message });
  }
};

export const logoutUser = (req, res) => {
  res.clearCookie('authToken');
  res.redirect('/');
};





export { loginUser};