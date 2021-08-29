import React from "react";
import {Link} from "react-router-dom";

const Dropdown = ({isOpen, toggle}) => {
  return (
    <div>
      <div className={isOpen ? "lg:hidden md:hidden flex flex-col w-screen text-center bg-yellow-500 text-white" : "hidden"}
      onClick={toggle}>
        <Link to="/" className="py-4">
          Home
        </Link>
        <Link to="/about" className="py-4">
          About
        </Link>
        <Link to="/contact" className="py-4">
          Contact
        </Link>
        <Link to="/features" className="py-4">
          Features
        </Link>
        <Link to="/gallery" className="py-4">
          Gallery
        </Link>
      </div>
    </div>
  );
};

export default Dropdown;
