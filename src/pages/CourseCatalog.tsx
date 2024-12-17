import React, { useState } from "react";

interface Course {
  id: number;
  title: string;
  instructor: string;
  duration: string;
  level: string;
  category: string;
  image?: string;
  description: string;
  modules: string[];
}

const mockCourses: Course[] = [
  {
    id: 1,
    title: "Introduction à l'Intelligence Artificielle",
    instructor: "Marie Dupont",
    duration: "3h 30min",
    level: "Débutant",
    category: "IA",
    image:
      "https://cdn.prod.website-files.com/645e5ca8882c17703ced9581/6659d72ee534f2ca02bf5baf_Comment%20l%27intelligence%20artificielle%20va%20transformer%20le%20monde%20du%20travail%20%20(1).jpg",
    description:
      "Découvrez les bases de l'IA, les algorithmes simples et les domaines d'application.",
    modules: [
      "Présentation de l'IA",
      "Algorithmes de base",
      "Cas d'utilisation",
    ],
  },
  {
    id: 2,
    title: "Analyse de Données avec Python",
    instructor: "Jean Martin",
    duration: "4h 00min",
    level: "Intermédiaire",
    category: "Data Science",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    description:
      "Apprenez à manipuler, nettoyer, et visualiser des données avec Python.",
    modules: [
      "Importation de données",
      "Nettoyage et transformation",
      "Visualisation avancée",
    ],
  },
  {
    id: 3,
    title: "Développement Web Moderne",
    instructor: "Sophie Lemaitre",
    duration: "5h 15min",
    level: "Avancé",
    category: "Développement",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnvU6ameeAEAk8W2aDZBmAWga8QChgcz7f8A&s",
    description:
      "Maîtrisez les dernières technologies web : React, TypeScript, et CI/CD.",
    modules: [
      "Bases de React",
      "TypeScript pour le web",
      "CI/CD avec GitHub Actions",
    ],
  },
];

const CourseCatalog: React.FC = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const filteredCourses = mockCourses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory = selectedCategory
      ? course.category === selectedCategory
      : true;
    const matchesLevel = selectedLevel ? course.level === selectedLevel : true;
    let matchesDuration = true;
    if (selectedDuration === "short") {
      // Moins de 2h (logique simplifiée)
      matchesDuration = course.duration.toLowerCase().includes("h")
        ? false
        : true;
    } else if (selectedDuration === "medium") {
      // 2-5h
      matchesDuration =
        course.duration.toLowerCase().includes("3h") ||
        course.duration.toLowerCase().includes("4h");
    } else if (selectedDuration === "long") {
      // Plus de 5h
      matchesDuration = course.duration.toLowerCase().includes("5h");
    }

    return matchesSearch && matchesCategory && matchesLevel && matchesDuration;
  });

  return (
    <div className="course-catalog-container">
      <h1>Catalogue des Cours</h1>

      {/* Barre de recherche et filtres */}
      <div className="filters-container">
        <input
          type="text"
          placeholder="Rechercher un cours…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />

        <div className="filter-group">
          <label>Catégorie :</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Toutes</option>
            <option value="Développement">Développement</option>
            <option value="Data Science">Data Science</option>
            <option value="IA">IA</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Niveau :</label>
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
          >
            <option value="">Tous</option>
            <option value="Débutant">Débutant</option>
            <option value="Intermédiaire">Intermédiaire</option>
            <option value="Avancé">Avancé</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Durée :</label>
          <select
            value={selectedDuration}
            onChange={(e) => setSelectedDuration(e.target.value)}
          >
            <option value="">Toutes</option>
            <option value="short">Moins de 2h</option>
            <option value="medium">2-5h</option>
            <option value="long">Plus de 5h</option>
          </select>
        </div>
      </div>

      {/* Liste des cours */}
      <div className="courses-list">
        {filteredCourses.map((course) => (
          <div
            className="course-card"
            key={course.id}
            onClick={() => setSelectedCourse(course)}
          >
            {course.image && <img src={course.image} alt={course.title} />}
            <h3>{course.title}</h3>
            <p>{course.instructor}</p>
            <p>Durée : {course.duration}</p>
            <p>Niveau : {course.level}</p>
            <button className="cta-button">Voir le cours</button>
          </div>
        ))}
      </div>

      {/* Section détails du cours sélectionné */}
      {selectedCourse && (
        <div className="course-details">
          <h2>{selectedCourse.title}</h2>
          <p>
            <strong>Formateur :</strong> {selectedCourse.instructor}
          </p>
          <p>
            <strong>Durée :</strong> {selectedCourse.duration}
          </p>
          <p>
            <strong>Niveau :</strong> {selectedCourse.level}
          </p>
          <p>
            <strong>Description :</strong> {selectedCourse.description}
          </p>
          <h3>Modules inclus :</h3>
          <ul>
            {selectedCourse.modules.map((mod, idx) => (
              <li key={idx}>{mod}</li>
            ))}
          </ul>
          <button className="cta-button">
            Poser une question au formateur
          </button>
          <button
            className="close-details"
            onClick={() => setSelectedCourse(null)}
          >
            Fermer
          </button>
        </div>
      )}

      {/* Pagination (exemple statique) */}
      <div className="pagination">
        <button className="pagination-button">Précédent</button>
        <button className="pagination-button">Suivant</button>
      </div>
    </div>
  );
};

export default CourseCatalog;