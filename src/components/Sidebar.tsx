import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Tableau de bord
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gestion-cours"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Gestion des cours
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/messages"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Messages
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/evaluation"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Évaluations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/certifications"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Certifications
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/suivi-etudiants"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Suivi des étudiants
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/simulations"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Simulations Métiers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/analyse-etudiants"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Analyse des Étudiants IA
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
