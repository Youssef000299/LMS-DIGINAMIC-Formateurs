// src/pages/Dashboard.tsx

import React from "react";

// Composant pour les cartes de statistiques
interface StatCardProps {
  title: string;
  value: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value }) => {
  return (
    <div className="stat-card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

// Composant pour les cartes de cours
interface CourseCardProps {
  title: string;
  description: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description }) => {
  return (
    <div className="course-card">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

// Composant principal du tableau de bord
const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <h1>Tableau de Bord</h1>

      {/* Section Statistiques */}
      <section className="stats-section">
        <h2>Statistiques</h2>
        <div className="stats-grid">
          <StatCard title="Total des Cours" value="15" />
          <StatCard title="Étudiants Inscrits" value="320" />
          <StatCard title="Évaluations Complétées" value="120" />
          <StatCard title="Messages Non Lus" value="8" />
        </div>
      </section>

      {/* Section Cours Récents */}
      <section className="recent-courses-section">
        <h2>Cours Récents</h2>
        <div className="courses-grid">
          <CourseCard
            title="Introduction à l'IA"
            description="Découvrez les bases de l'intelligence artificielle."
          />
          <CourseCard
            title="Data Science Avancée"
            description="Approfondissez vos compétences en Data Science."
          />
          <CourseCard
            title="Développement Web"
            description="Apprenez à créer des sites web modernes."
          />
        </div>
      </section>

      {/* Section Notifications */}
      <section className="notifications-section">
        <h2>Notifications</h2>
        <ul className="notifications-list">
          <li>✅ Évaluation complétée par Marie Curie</li>
          <li>📢 Nouveau cours ajouté : "Machine Learning pour Débutants"</li>
          <li>💬 Nouveau message de Jean Dupont</li>
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
