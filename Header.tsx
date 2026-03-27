import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { institutes } from "../data/institutes";

export const Header: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleInstituteClick = (id: string) => {
    navigate(`/institute/${id}`);
    setDropdownOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo">MaldaRailwayinstitute</div>
        <nav className="nav">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <div className="nav-item-with-dropdown">
            <button
              className="nav-link-button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Institutes
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                {institutes.map((inst) => (
                  <button
                    key={inst.id}
                    className="dropdown-item"
                    onClick={() => handleInstituteClick(inst.id)}
                  >
                    {inst.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </nav>
      </div>
    </header>
  );
};

