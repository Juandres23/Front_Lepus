import fetch from "node-fetch";
import jwt from "jsonwebtoken";
import axios from "axios";
import PDFDocument from "pdfkit-table";
import path from "path";


// Generar PDF
export const pdfGenerate = async (req, res) => {
    try {
      const response = await axios.post('http://localhost:2000/registro');
  
      const registro = response.data[0]; 
  
      const doc = new PDFDocument({ margin: 30, size: 'A4' });
  
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=reporteRegistroUsuario.pdf');
      doc.pipe(res);
  
      // encabezado
      doc.fontSize(24).text('Registro de Usuario', { align: 'center' });
  
      // espacio después del encabezado
      doc.moveDown(3);
  
    // logo de LEPUS
      const logoHeight = 80;
      const logoWidth = 80;
      const __dirname = path.resolve()
      const imagePath = path.resolve(path.join(__dirname, 'public', 'img', 'lepuslogo.jpg')) ;
      const logoX = 30;
      const logoY = 100;
  
      doc.image(imagePath, logoX, logoY, { width: logoWidth, height: logoHeight });
  
      // Agrega espacio después de la imagen
      doc.moveDown(2);
  
      // Crear la tabla
      const table = {
        headers: ['id', 
        'nombres', 
        'apellidos', 
        'correo',
        'telefono', 
        'direccion',  
        'fecha'],
        rows: usuario.map(usuario => [
          id_usuario,
          nombre,
          apellido,
          correo,
          telefono,
          direccion,
          fecha_nacimiento,
          rol
        ])
      };
  
      // Agrega la tabla al documento con un tamaño de letra más pequeño
      await doc.table(table, { width: 500, prepareHeader: () => doc.font('Helvetica-Bold').fontSize(10), prepareRow: () => doc.font('Helvetica').fontSize(10) });
  
      doc.moveDown(2)
  
      // Agrega el pie de página
      const generador = 'Registro de usuario';
      const fechaImpresion = new Date().toLocaleString();
      doc.fontSize(10).text(`Generado por: ${generador}`);
      doc.fontSize(10).text(`Fecha y hora de impresión: ${fechaImpresion}`, { align: 'right' });
  
      // Finaliza el PDF
      doc.end();
  
    } catch (error) {
      // Maneja errores de solicitud o cualquier otro error
      console.error(error);
      res.status(500).send('Error al generar el PDF');
    }};