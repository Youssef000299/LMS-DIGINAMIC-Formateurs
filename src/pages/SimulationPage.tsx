// src/pages/SimulationPage.tsx

import React, { useState } from "react";

// Interface pour une simulation
interface Simulation {
  id: number;
  title: string;
  description: string;
  domain: string; // Domaine professionnel (Ingénierie, Management, etc.)
  status: "Not Started" | "In Progress" | "Completed";
}

const SimulationPage: React.FC = () => {
  const [simulations, setSimulations] = useState<Simulation[]>([
    {
      id: 1,
      title: "Simulation de Gestion de Projet",
      description:
        "Résolvez des problèmes de planification et de coordination en gestion de projet.",
      domain: "Management",
      status: "Not Started",
    },
    {
      id: 2,
      title: "Simulation de Maintenance Industrielle",
      description:
        "Identifiez et résolvez des pannes dans un environnement industriel.",
      domain: "Ingénierie",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Simulation de Négociation Commerciale",
      description:
        "Pratiquez des techniques de négociation dans des scénarios commerciaux.",
      domain: "Management",
      status: "Completed",
    },
  ]);

  const [newSimulationTitle, setNewSimulationTitle] = useState("");
  const [newSimulationDescription, setNewSimulationDescription] = useState("");
  const [newSimulationDomain, setNewSimulationDomain] = useState("");

  // Ajouter une nouvelle simulation
  const handleAddSimulation = () => {
    if (newSimulationTitle && newSimulationDescription && newSimulationDomain) {
      const newSimulation: Simulation = {
        id: simulations.length + 1,
        title: newSimulationTitle,
        description: newSimulationDescription,
        domain: newSimulationDomain,
        status: "Not Started",
      };
      setSimulations([...simulations, newSimulation]);
      setNewSimulationTitle("");
      setNewSimulationDescription("");
      setNewSimulationDomain("");
    }
  };

  // Démarrer une simulation
  const handleStartSimulation = (id: number) => {
    setSimulations(
      simulations.map((simulation) =>
        simulation.id === id
          ? { ...simulation, status: "In Progress" }
          : simulation
      )
    );
  };

  // Marquer une simulation comme terminée
  const handleCompleteSimulation = (id: number) => {
    setSimulations(
      simulations.map((simulation) =>
        simulation.id === id
          ? { ...simulation, status: "Completed" }
          : simulation
      )
    );
  };

  return (
    <div className="simulation-container">
      <h1>Gestion des Simulations Métiers</h1>

      {/* Formulaire pour ajouter une nouvelle simulation */}
      <section className="add-simulation-section">
        <h2>Créer une Nouvelle Simulation</h2>
        <input
          type="text"
          placeholder="Titre de la simulation"
          value={newSimulationTitle}
          onChange={(e) => setNewSimulationTitle(e.target.value)}
        />
        <textarea
          placeholder="Description de la simulation"
          value={newSimulationDescription}
          onChange={(e) => setNewSimulationDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Domaine (Ingénierie, Management, etc.)"
          value={newSimulationDomain}
          onChange={(e) => setNewSimulationDomain(e.target.value)}
        />
        <button onClick={handleAddSimulation}>Ajouter la Simulation</button>
      </section>

      {/* Liste des simulations existantes */}
      <section className="simulations-list-section">
        <h2>Simulations Disponibles</h2>
        {simulations.length === 0 ? (
          <p>Aucune simulation disponible pour le moment.</p>
        ) : (
          <ul className="simulations-list">
            {simulations.map((simulation) => (
              <li key={simulation.id} className="simulation-item">
                <h3>{simulation.title}</h3>
                <p>{simulation.description}</p>
                <p>Domaine : {simulation.domain}</p>
                <p>
                  Statut :{" "}
                  {simulation.status === "Not Started" && "🕒 Non commencée"}
                  {simulation.status === "In Progress" && "⏳ En cours"}
                  {simulation.status === "Completed" && "✅ Terminée"}
                </p>
                {simulation.status === "Not Started" && (
                  <button onClick={() => handleStartSimulation(simulation.id)}>
                    Démarrer
                  </button>
                )}
                {simulation.status === "In Progress" && (
                  <button
                    onClick={() => handleCompleteSimulation(simulation.id)}
                  >
                    Terminer
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default SimulationPage;
