import * as React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to={`/`}>
        <span>Rick and Morty app</span>
      </Link>
    </header>
  );
};
