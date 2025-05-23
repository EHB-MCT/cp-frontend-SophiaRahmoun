import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import SearchFilter from "./SearchFilter";
import { Link } from "react-router-dom";

const genres = [
  "All",
  "fantasie",
  "avontuur",
  "horror",
  "fantasy",
  "folklore",
  "magisch",
  "muzikaal",
  "historical",
];

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <header className="app-header">
      <img src="/cp-frontend-SophiaRahmoun/assets/logo.png" alt="Logo" className="logo" onClick={() => navigate("/")}
        style={{ cursor: "pointer" }} />
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                Sprookjes
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {genres.map((genre, i) => (
                  <Dropdown.Item
                    key={i}
                    onClick={() => navigate(`/sprookjes?genre=${genre}`)}
                  >
                    {genre}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li><Link to="/makingof">MAKING OF</Link></li>
          <li><Link to="/about">ABOUT US</Link></li>
          <li><SearchFilter /></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;