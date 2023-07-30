import PDFDocument from 'pdfkit';
import axios from 'axios';

// Resto del código del controlador igual que antes...


// Controlador para generar el PDF
export const generatePdf = async (req, res)=> {
  try {
    // Hacemos una petición a la API para obtener la información
    const response = await axios.get(process.env.API+'api');
    const data = response.data[0]; // La información está en el primer elemento del array

    // Creamos un nuevo documento PDF
    const doc = new PDFDocument();
  
    // Establecemos el encabezado del PDF
    res.setHeader('Content-Disposition', 'attachment; filename="usuarios.pdf"');
    res.setHeader('Content-Type', 'application/pdf');

    // Creamos el contenido del PDF
    doc.pipe(res);

    // Agregamos el logotipo

    //doc.image('public/img/lepuslogo.jpg', 50, 50, { width: 100 });

    // Agregamos la fecha y el generador
    const fechaBogota = new Date().toLocaleString('es-CO', {
      timeZone: 'America/Bogota'
    });
    doc.fontSize(10).text(`Generado por Juan Andres - ${fechaBogota}`, 170, 50);
    doc.fontSize(10);
    // Agregamos la información de los usuarios al PDF
    data.forEach((usuario, index) => {
      doc.fontSize(14).text(`Usuario ${index + 1}`, { underline: true });
      doc.fontSize(12).text(`Nombre: ${usuario.NOMBRE}`);
      doc.fontSize(12).text(`Apellido: ${usuario.APELLIDO}`);
      doc.fontSize(12).text(`Email: ${usuario.EMAIL}`);
      doc.fontSize(12).text(`Teléfono: ${usuario.TELEFONO}`);
      doc.fontSize(12).text(`Dirección: ${usuario.DIRECCION}`);
      doc.fontSize(12).text(`Fecha de nacimiento: ${new Date(usuario.FECHA_NACIMIENTO).toLocaleDateString()}`);
      doc.fontSize(12).text(`Género: ${usuario.GENERO}`);
      doc.moveDown();
    });

    // Finalizamos el PDF y enviamos la respuesta al cliente
    doc.end();
  } catch (error) {
    console.error('Error al generar el PDF:', error);
    res.status(500).send('Error al generar el PDF');
  }
}


