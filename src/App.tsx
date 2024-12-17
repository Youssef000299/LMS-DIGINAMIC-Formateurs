import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import MessagingPage from "./pages/MessagingPage";
import CourseCatalog from "./pages/CourseCatalog";
import CourseManagement from "./pages/CourseManagement";
import EvaluationPage from "./pages/EvaluationPage";
import CertificationPage from "./pages/CertificationPage";
import StudentTrackingPage from "./pages/StudentTrackingPage";
import SimulationPage from "./pages/SimulationPage";
import StudentAnalysisPage from "./pages/StudentAnalysisPage";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/messages" element={<MessagingPage />} />
            <Route path="/catalogue" element={<CourseCatalog />} />
            <Route path="/gestion-cours" element={<CourseManagement />} />
            <Route path="/evaluation" element={<EvaluationPage />} />
            <Route path="/certifications" element={<CertificationPage />} />
            <Route path="/suivi-etudiants" element={<StudentTrackingPage />} />
            <Route path="/simulations" element={<SimulationPage />} />
            <Route
              path="/analyse-etudiants"
              element={<StudentAnalysisPage />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
