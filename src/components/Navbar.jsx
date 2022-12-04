import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleClick() {
    setToggleMenu(!toggleMenu);
  }

  return (
    <div className="fixed z-10 w-full h-[50px] flex  items-center px-4 md:px-10 bg-[white] text-gray-900">
      <Link to="/">
        <div className="z-10 flex flex-row items-center gap-2 pr-20">
          <img src={Logo} alt="logo" className="w-[40px]" />
          <h1 className="text-2xl font-bold cursor-pointer text-primary">
            Pokéntial
          </h1>
        </div>
      </Link>

      <div className="my-auto">
        <SearchBar />
      </div>

      {/* menu */}

      <ul className="hidden md:flex md:justify-end md:w-full">
        <li>
          <Link to="/">Pokémon</Link>
        </li>
        <li>
          <Link to="/type">Types</Link>
        </li>
        <li>
          <Link to="/ability">Abilities</Link>
        </li>
        <li>
          <Link to="/move">Moves</Link>
        </li>
        <li>
          <Link to="/location">Locations</Link>
        </li>
        <li>
          <Link to="/nature">Natures</Link>
        </li>
        <li>
          <Link to="/item">Items</Link>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!toggleMenu ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !toggleMenu
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[black] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            0.Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            01.About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            02.Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            03.Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            04.Contact
          </Link>
        </li>
      </ul>

      {/* socials */}
      <div className="hidden"></div>
    </div>
  );
}
