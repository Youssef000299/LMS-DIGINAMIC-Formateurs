// src/pages/EvaluationPage.tsx

import React, { useState } from "react";

// Interface pour une évaluation
interface Evaluation {
  id: number;
  title: string;
  description: string;
  date: string;
}

const EvaluationPage: React.FC = () => {
  const [evaluations, setEvaluations] = useState<Evaluation[]>([
    {
      id: 1,
      title: "Évaluation sur les Bases de l'IA",
      description:
        "Test sur les concepts fondamentaux de l'intelligence artificielle.",
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "Quiz sur la Data Science",
      description: "Évaluation des compétences en Data Science avancée.",
      date: "2024-02-10",
    },
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  // Fonction pour ajouter une nouvelle évaluation
  const handleAddEvaluation = () => {
    if (newTitle && newDescription) {
      const newEvaluation: Evaluation = {
        id: evaluations.length + 1,
        title: newTitle,
        description: newDescription,
        date: new Date().toISOString().split("T")[0],
      };
      setEvaluations([...evaluations, newEvaluation]);
      setNewTitle("");
      setNewDescription("");
    }
  };

  // Fonction pour supprimer une évaluation
  const handleDeleteEvaluation = (id: number) => {
    setEvaluations(evaluations.filter((evaluation) => evaluation.id !== id));
  };

  return (
    <div className="evaluation-container">
      <h1>Gestion des Évaluations</h1>

      {/* Formulaire pour ajouter une nouvelle évaluation */}
      <section className="add-evaluation-section">
        <h2>Ajouter une Nouvelle Évaluation</h2>
        <input
          type="text"
          placeholder="Titre de l'évaluation"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <textarea
          placeholder="Description de l'évaluation"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <button onClick={handleAddEvaluation}>Ajouter l'Évaluation</button>
      </section>

      {/* Liste des évaluations existantes */}
      <section className="evaluations-list-section">
        <h2>Évaluations Existantes</h2>
        {evaluations.length === 0 ? (
          <p>Aucune évaluation disponible.</p>
        ) : (
          <ul>
            {evaluations.map((evaluation) => (
              <li key={evaluation.id} className="evaluation-item">
                <h3>{evaluation.title}</h3>
                <p>{evaluation.description}</p>
                <p>Date : {evaluation.date}</p>
                <button onClick={() => handleDeleteEvaluation(evaluation.id)}>
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

export default EvaluationPage;
