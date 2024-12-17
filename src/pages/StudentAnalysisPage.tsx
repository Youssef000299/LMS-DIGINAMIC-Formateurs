// src/pages/StudentAnalysisPage.tsx

import React, { useState } from "react";

// Interface pour un étudiant
interface Student {
  id: number;
  name: string;
  email: string;
  progress: number; // Progression en pourcentage
  feedback: string;
  participation: number; // Participation en pourcentage
  lastActivity: string; // Date de la dernière activité
}

// Interface pour une analyse générée par l'IA
interface AIAnalysis {
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
  engagementScore: number; // Score d'engagement de l'étudiant
}

const StudentAnalysisPage: React.FC = () => {
  const [students] = useState<Student[]>([
    {
      id: 1,
      name: "Jean Dupont",
      email: "jean.dupont@example.com",
      progress: 85,
      feedback:
        "Le cours est très intéressant, mais certaines sections sont difficiles à comprendre.",
      participation: 90,
      lastActivity: "2024-03-10",
    },
    {
      id: 2,
      name: "Marie Curie",
      email: "marie.curie@example.com",
      progress: 60,
      feedback:
        "J'apprécie le contenu, mais j'aurais besoin de plus d'exercices pratiques.",
      participation: 70,
      lastActivity: "2024-03-08",
    },
    {
      id: 3,
      name: "Albert Einstein",
      email: "albert.einstein@example.com",
      progress: 95,
      feedback: "Excellent cours ! Très complet et instructif.",
      participation: 95,
      lastActivity: "2024-03-12",
    },
  ]);

  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [analysis, setAnalysis] = useState<AIAnalysis | null>(null);

  // Fonction pour générer une analyse simulée avec l'IA
  const handleAnalyzeStudent = (student: Student) => {
    setSelectedStudent(student);

    // Simulation d'une analyse par IA basée sur la progression et la participation
    const generatedAnalysis: AIAnalysis = {
      strengths: [
        student.progress > 80
          ? "Bonne compréhension des concepts clés"
          : "Bonne motivation",
        student.participation > 80
          ? "Participation active aux cours"
          : "Bonne assiduité",
      ],
      weaknesses: [
        student.progress < 70
          ? "Besoin de renforcer la compréhension des notions de base"
          : "Rythme de progression irrégulier",
        student.participation < 70
          ? "Participation insuffisante"
          : "Faible interaction avec les pairs",
      ],
      recommendations: [
        student.progress < 70
          ? "Recommander des exercices supplémentaires et des sessions de tutorat."
          : "Proposer des défis avancés pour stimuler l'apprentissage.",
        student.participation < 70
          ? "Encourager la participation via des activités interactives."
          : "Maintenir le niveau d'engagement avec des discussions en groupe.",
      ],
      engagementScore: Math.round(
        (student.progress + student.participation) / 2
      ),
    };

    setAnalysis(generatedAnalysis);
  };

  return (
    <div className="student-analysis-container">
      <h1>Analyse Avancée des Étudiants</h1>
      <p>
        Utilisez l'intelligence artificielle pour obtenir des analyses
        détaillées des performances et des feedbacks des étudiants.
      </p>

      {/* Liste des étudiants */}
      <section className="students-list-section">
        <h2>Liste des Étudiants</h2>
        <ul className="students-list">
          {students.map((student) => (
            <li key={student.id} className="student-item">
              <h3>{student.name}</h3>
              <p>Email : {student.email}</p>
              <p>Progression : {student.progress}%</p>
              <p>Participation : {student.participation}%</p>
              <p>Dernière activité : {student.lastActivity}</p>
              <button onClick={() => handleAnalyzeStudent(student)}>
                Analyser avec l'IA
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Affichage de l'analyse */}
      {selectedStudent && analysis && (
        <section className="analysis-section">
          <h2>Analyse IA pour {selectedStudent.name}</h2>
          <p>
            <strong>Email :</strong> {selectedStudent.email}
          </p>
          <p>
            <strong>Feedback :</strong> {selectedStudent.feedback}
          </p>
          <p>
            <strong>Score d'Engagement :</strong> {analysis.engagementScore}/100
          </p>

          <h3>Forces</h3>
          <ul>
            {analysis.strengths.map((strength, index) => (
              <li key={index}>✅ {strength}</li>
            ))}
          </ul>

          <h3>Faiblesses</h3>
          <ul>
            {analysis.weaknesses.map((weakness, index) => (
              <li key={index}>⚠️ {weakness}</li>
            ))}
          </ul>

          <h3>Recommandations</h3>
          <ul>
            {analysis.recommendations.map((recommendation, index) => (
              <li key={index}>💡 {recommendation}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default StudentAnalysisPage;
