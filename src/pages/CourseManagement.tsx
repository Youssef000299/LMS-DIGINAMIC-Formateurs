// src/pages/CourseManagement.tsx

import React, { useState } from "react";

interface Course {
  id: number;
  title: string;
  description: string;
  createdAt: string;
}

const CourseManagement: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([
    {
      id: 1,
      title: "Introduction à l'IA",
      description:
        "Un cours pour découvrir les bases de l'intelligence artificielle.",
      createdAt: "2024-01-01",
    },
    {
      id: 2,
      title: "Data Science Avancée",
      description: "Approfondissez vos connaissances en Data Science.",
      createdAt: "2024-02-15",
    },
  ]);

  const [newCourseTitle, setNewCourseTitle] = useState("");
  const [newCourseDescription, setNewCourseDescription] = useState("");

  // Ajouter un nouveau cours
  const handleAddCourse = () => {
    if (newCourseTitle && newCourseDescription) {
      const newCourse: Course = {
        id: courses.length + 1,
        title: newCourseTitle,
        description: newCourseDescription,
        createdAt: new Date().toISOString().split("T")[0],
      };
      setCourses([...courses, newCourse]);
      setNewCourseTitle("");
      setNewCourseDescription("");
    }
  };

  // Supprimer un cours
  const handleDeleteCourse = (id: number) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  return (
    <div>
      <h1>Gestion des Cours</h1>

      {/* Formulaire pour ajouter un nouveau cours */}
      <div>
        <h2>Ajouter un Nouveau Cours</h2>
        <input
          type="text"
          placeholder="Titre du cours"
          value={newCourseTitle}
          onChange={(e) => setNewCourseTitle(e.target.value)}
        />
        <textarea
          placeholder="Description du cours"
          value={newCourseDescription}
          onChange={(e) => setNewCourseDescription(e.target.value)}
        />
        <button onClick={handleAddCourse}>Ajouter le Cours</button>
      </div>

      {/* Liste des cours existants */}
      <div>
        <h2>Liste des Cours</h2>
        {courses.length === 0 ? (
          <p>Aucun cours disponible.</p>
        ) : (
          <ul>
            {courses.map((course) => (
              <li key={course.id}>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <p>Date de création : {course.createdAt}</p>
                <button onClick={() => handleDeleteCourse(course.id)}>
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CourseManagement;
