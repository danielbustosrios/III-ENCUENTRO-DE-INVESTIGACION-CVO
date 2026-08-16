import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generatePdf() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 format
  const { width, height } = page.getSize();

  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // Top header bar / decoration
  page.drawRectangle({
    x: 0,
    y: height - 12,
    width: width,
    height: 12,
    color: rgb(0.106, 0.263, 0.196), // #1B4332
  });

  // Institution Sub-header
  page.drawText('III ENCUENTRO DE INVESTIGACIÓN ESCOLAR 2026', {
    x: 50,
    y: height - 60,
    size: 10,
    font: helveticaBold,
    color: rgb(0.737, 0.424, 0.145), // #BC6C25
  });

  page.drawText('I.E. Carlos Vieco Ortiz · MOVA Centro de Innovación del Maestro', {
    x: 50,
    y: height - 75,
    size: 9,
    font: helvetica,
    color: rgb(0.345, 0.482, 0.337), // #587B56
  });

  // Divider line
  page.drawLine({
    start: { x: 50, y: height - 90 },
    end: { x: width - 50, y: height - 90 },
    thickness: 1,
    color: rgb(0.898, 0.878, 0.831), // #EDE7DC
  });

  // Bullet and Name
  page.drawText('•  Sandra Loaiza Marín', {
    x: 50,
    y: height - 130,
    size: 16,
    font: helveticaBold,
    color: rgb(0.106, 0.263, 0.196), // #1B4332
  });

  // Section: Perfil
  page.drawText('Perfil:', {
    x: 50,
    y: height - 170,
    size: 12,
    font: helveticaBold,
    color: rgb(0.106, 0.263, 0.196),
  });

  const profileText = 'Magíster en Comunicación Estratégica. Comunicadora Audiovisual y Multimedial bilingüe con experiencia laboral con más de 14 años en proyectos públicos y privados en las áreas de cultura, educación y comunicaciones.';
  
  // Wrap text nicely
  function wrapText(text: string, maxCharsPerLine: number) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    for (const word of words) {
      if ((currentLine + word).length <= maxCharsPerLine) {
        currentLine += (currentLine ? ' ' : '') + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
  }

  const profileLines = wrapText(profileText, 72);
  let currentY = height - 192;
  for (const line of profileLines) {
    page.drawText(line, {
      x: 50,
      y: currentY,
      size: 11,
      font: helvetica,
      color: rgb(0.18, 0.18, 0.18),
    });
    currentY -= 18;
  }

  // Section: Resumen del encuentro
  currentY -= 15;
  page.drawText('Resumen del encuentro:', {
    x: 50,
    y: currentY,
    size: 12,
    font: helveticaBold,
    color: rgb(0.106, 0.263, 0.196),
  });

  currentY -= 20;
  page.drawText('Taller de fotografía digital básica', {
    x: 50,
    y: currentY,
    size: 11,
    font: helvetica,
    color: rgb(0.18, 0.18, 0.18),
  });

  // Bottom footer info
  page.drawRectangle({
    x: 50,
    y: 50,
    width: width - 100,
    height: 40,
    color: rgb(0.965, 0.957, 0.941),
    borderColor: rgb(0.898, 0.878, 0.831),
    borderWidth: 1,
  });

  page.drawText('Documento oficial informativo de facilitadores · III Encuentro de Investigación Escolar 2026', {
    x: 65,
    y: 67,
    size: 9,
    font: helvetica,
    color: rgb(0.345, 0.482, 0.337),
  });

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.join(process.cwd(), 'public', 'documentos', 'perfil-sandra-loaiza.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log('PDF successfully created at:', outputPath);
}

generatePdf().catch(console.error);
