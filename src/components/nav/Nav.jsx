import "./nav.css";
import { FiHome } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      const aboutUs = document.querySelector("#about");
      const homePage = document.querySelector("#");
      const projects = document.querySelector("#experience");
      const aboutUsTop = aboutUs.offsetTop;
      const homePageTop = homePage.offsetTop;
      const projectsTop = projects.offsetTop;

      if (window.scrollY >= homePageTop && window.scrollY < aboutUsTop) {
        setActiveNav("#");
      } else if (window.scrollY >= aboutUsTop && window.scrollY < projectsTop) {
        setActiveNav("about");
      } else if (window.scrollY >= projectsTop) {
        setActiveNav("experience");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="nav">
      <a
        href="#top"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <FiHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBookAlt />
      </a>

      {/*
      <a
        href="#top"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <FiHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBookAlt />
      </a>*/}
    </nav>
  );
};

export default Nav;
