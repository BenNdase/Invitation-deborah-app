import { PDFDocument, rgb } from "pdf-lib";

export const generatePDF = async (
  title: string,
  name: string,
  tableName: string
) => {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 400]);
  const { height } = page.getSize();

  // Ajouter les textes au PDF
  page.drawText(`${title} ${name}`, {
    x: 50,
    y: height - 100,
    size: 30,
    color: rgb(0, 0, 0),
  });

  page.drawText(`Table: ${tableName}`, {
    x: 50,
    y: height - 150,
    size: 20,
    color: rgb(0, 0, 0),
  });

  // Sauvegarder et télécharger le PDF
  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "invitation.pdf";
  link.click();
};
