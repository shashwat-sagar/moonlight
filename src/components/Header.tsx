import  { useEffect, useState } from "react";
import "../styles/Header.scss";
import { logo_main2 } from "../assets/images";
import Drawer from "./Drawer";
import TopBar from "./TopBar";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdInfo } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { IoMdContact } from "react-icons/io";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [, setIsBackTopActive] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const isScrollBottom = lastScrollPos < currentScrollPos;

    if (currentScrollPos >= 50) {
      setIsHeaderActive(true);
      setIsBackTopActive(true);
    } else {
      setIsHeaderActive(false);
      setIsBackTopActive(false);
    }

    if (isScrollBottom) {
      document.querySelector(".header")?.classList.add("hide");
    } else {
      document.querySelector(".header")?.classList.remove("hide");
    }

    setLastScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPos]);

  const navItems = [
    { id: 1, title: "Home", link: "/", icon: <FaHome color="#e4c590" /> },
    { id: 2, title: "About", link: "/about", icon: <MdInfo color="#e4c590" /> },
    { id: 3, title: "Gallery", link: "/gallery", icon: <GrGallery color="#e4c590" /> },
    { id: 4, title: "Contact", link: "/contact", icon: <IoMdContact color="#e4c590" /> },
    { id: 4, title: "Menu", link: "/menu", icon: <IoMdContact color="#e4c590" /> },
  ];

  return (
    <>
      <TopBar />
      <header
        className={`header ${isHeaderActive ? "active" : ""}`}
        data-header
      >
        <div className="headerContainer">
          <a href="/" className="logo">
            <img src={logo_main2} width="60" height="50" alt="Grilli - Home" />
          </a>
          <nav className="nav">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.id} className="nav-item">
                  <Link to={item.link} className="nav-link">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className="nav-open-btn"
            aria-label="open menu"
            onClick={() => setIsDrawerOpen(true)}
          >
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </button>

          <div className="overlay" data-nav-toggler data-overlay></div>
          <Drawer
            data={navItems}
            isOpen={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
