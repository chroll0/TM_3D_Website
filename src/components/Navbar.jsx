import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [navbarVis, setNavbarVis] = useState(false);
  return (
    <div className="flex justify-center ">
      <div
        onClick={() => setNavbarVis(!navbarVis)}
        className="flex justify-center absolute top-12 cursor-pointer z-20 w-16 rounded-full bg-white text-blue-500 text-xs"
      >
        {navbarVis ? "▲" : "▼"}
      </div>

      <header className={`header ${navbarVis ? "top-0" : "top-[-100px]"}`}>
        <NavLink to="/">
          <p className="blue-gradient_text font-bold text-2xl uppercase">tm</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium font-sans">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-black"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-black"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-black"
            }
          >
            Contact
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
