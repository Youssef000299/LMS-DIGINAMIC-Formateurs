import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        {/* Ajout du logo via lien externe */}
        <img
          src="https://www.emploilr.com/photos/agenda/diginamic-logo-fondblanc-petit-png163012.png"
          alt="Diginamic Formation"
          className="logo"
        />
      </div>
      <div className="header-right">
        <span>Michel Sauvage</span>
        <button className="icon-button">🔔</button>
        <button className="icon-button">⚙️</button>
      </div>
    </header>
  );
};

export default Header;
