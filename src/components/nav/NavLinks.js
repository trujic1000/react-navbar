import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavLinks = ({ setOpen }) => {
  const closeNav = () => setOpen(false);
  return (
    <ul className="nav-links">
      <li>
        <Link to="/" className="link" onClick={closeNav}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="link" onClick={closeNav}>
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="link" onClick={closeNav}>
          Contact
        </Link>
      </li>
    </ul>
  );
};

NavLinks.propTypes = {
  setOpen: PropTypes.func,
};

NavLinks.defaultProps = {
  setOpen: () => {},
};

export default NavLinks;
