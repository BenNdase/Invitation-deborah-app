"use client";

import { useState } from "react";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { saveAs } from "file-saver";
import SelectInput from "./selectInput"; // Assurez-vous de mettre le bon chemin
import TextInput from "./textInput"; // Assurez-vous de mettre le bon chemin

export default function Form() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [tableName, setTableName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Charger le modèle de PDF existant
    const existingPdfBytes = await fetch("/Dr Deborah 4.pdf").then((res) =>
      res.arrayBuffer()
    );

    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const page = pdfDoc.getPage(0); // Accéder à la première page du PDF

    // Intégrer la police Times Roman
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

    // Ajouter le titre et nom en bas
    const titleName = `${title} ${name}`;
    page.drawText(titleName, {
      x: 130,
      y: 56,
      size: 13,
      font: timesRomanFont,
      color: rgb(1, 1, 1),
    });

    // Ajouter le nom de la table
    const tableText = `${tableName}`;
    page.drawText(tableText, {
      x: 130,
      y: 26,
      size: 13,
      font: timesRomanFont,
      color: rgb(1, 1, 1),
    });

    // Sauvegarder le PDF modifié
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    saveAs(blob, `invitation-${name}.pdf`);

    // Réinitialiser les champs
    setTitle("");
    setName("");
    setTableName("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto px-6 rounded-lg shadow-md space-y-6"
    >
      <SelectInput
        id="title"
        options={[
          { value: "Mr", label: "Mr" },
          { value: "Mme", label: "Mme" },
          { value: "Rév.", label: "Rév." },
          { value: "Pasteur", label: "Pasteur" },
          { value: "Fr", label: "Fr" },
          { value: "Sr", label: "Sr" },
        ]}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <TextInput
        id="name"
        label="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <TextInput
        id="tableName"
        label="Nom de la table"
        value={tableName}
        onChange={(e) => setTableName(e.target.value)}
        required
      />

      <button
        type="submit"
        className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Générer l&apos;invitation
      </button>
    </form>
  );
}
