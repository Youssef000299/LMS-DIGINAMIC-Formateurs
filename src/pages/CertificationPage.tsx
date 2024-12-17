// src/pages/CertificationPage.tsx

import React, { useState } from "react";

// Interface pour une certification
interface Certification {
  id: number;
  studentName: string;
  courseTitle: string;
  dateIssued: string;
}

const CertificationPage: React.FC = () => {
  const [certifications, setCertifications] = useState<Certification[]>([
    {
      id: 1,
      studentName: "Jean Dupont",
      courseTitle: "Introduction à l'IA",
      dateIssued: "2024-01-15",
    },
    {
      id: 2,
      studentName: "Marie Curie",
      courseTitle: "Data Science Avancée",
      dateIssued: "2024-02-10",
    },
  ]);

  const [newStudentName, setNewStudentName] = useState("");
  const [newCourseTitle, setNewCourseTitle] = useState("");

  // Ajouter une nouvelle certification
  const handleAddCertification = () => {
    if (newStudentName && newCourseTitle) {
      const newCertification: Certification = {
        id: certifications.length + 1,
        studentName: newStudentName,
        courseTitle: newCourseTitle,
        dateIssued: new Date().toISOString().split("T")[0],
      };
      setCertifications([...certifications, newCertification]);
      setNewStudentName("");
      setNewCourseTitle("");
    }
  };

  // Supprimer une certification
  const handleDeleteCertification = (id: number) => {
    setCertifications(certifications.filter((cert) => cert.id !== id));
  };

  return (
    <div className="certification-container">
      <h1>Gestion des Certifications</h1>

      {/* Formulaire pour ajouter une nouvelle certification */}
      <section className="add-certification-section">
        <h2>Attribuer une Nouvelle Certification</h2>
        <input
          type="text"
          placeholder="Nom de l'étudiant"
          value={newStudentName}
          onChange={(e) => setNewStudentName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Titre du cours"
          value={newCourseTitle}
          onChange={(e) => setNewCourseTitle(e.target.value)}
        />
        <button onClick={handleAddCertification}>
          Attribuer la Certification
        </button>
      </section>

      {/* Liste des certifications existantes */}
      <section className="certifications-list-section">
        <h2>Certifications Attribuées</h2>
        {certifications.length === 0 ? (
          <p>Aucune certification disponible.</p>
        ) : (
          <ul>
            {certifications.map((cert) => (
              <li key={cert.id} className="certification-item">
                <h3>{cert.studentName}</h3>
                <p>Certifié pour le cours : {cert.courseTitle}</p>
                <p>Date d'émission : {cert.dateIssued}</p>
                <button onClick={() => handleDeleteCertification(cert.id)}>
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default CertificationPage;
