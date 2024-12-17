// src/pages/StudentTrackingPage.tsx

import React, { useState } from "react";

// Interface pour un étudiant
interface Student {
  id: number;
  name: string;
  email: string;
  progress: number; // En pourcentage
  lastActivity: string;
}

const StudentTrackingPage: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([
    {
      id: 1,
      name: "Jean Dupont",
      email: "jean.dupont@example.com",
      progress: 75,
      lastActivity: "2024-03-10",
    },
    {
      id: 2,
      name: "Marie Curie",
      email: "marie.curie@example.com",
      progress: 60,
      lastActivity: "2024-03-08",
    },
    {
      id: 3,
      name: "Albert Einstein",
      email: "albert.einstein@example.com",
      progress: 90,
      lastActivity: "2024-03-12",
    },
  ]);

  // Fonction pour afficher les détails de l'étudiant
  const handleViewDetails = (student: Student) => {
    alert(`Détails de ${student.name} :\\nEmail : ${student.email}\\nProgression : ${student.progress}%\\nDernière activité : ${student.lastActivity}`);
  };

  return (
    <div className="student-tracking-container">
      <h1>Suivi des Étudiants</h1>

      {/* Liste des étudiants */}
      <section className="students-list-section">
        <h2>Liste des Étudiants</h2>
        {students.length === 0 ? (
          <p>Aucun étudiant inscrit pour le moment.</p>
        ) : (
          <ul className="students-list">
            {students.map((student) => (
              <li key={student.id} className="student-item">
                <h3>{student.name}</h3>
                <p>Email : {student.email}</p>
                <p>Progression : {student.progress}%</p>
                <p>Dernière activité : {student.lastActivity}</p>
                <button onClick={() => handleViewDetails(student)}>Voir les détails</button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default StudentTrackingPage;
