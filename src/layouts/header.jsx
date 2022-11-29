import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavMenu } from "../data";

export function Header() {
  const { pathname } = useLocation();
  const active = NavMenu.findIndex((e) => e.path === pathname);
  const [navbar, setNavbar] = useState(false);
  function changeBg() {
    window.scrollY >= 100 ? setNavbar(true) : setNavbar(false);
  }
  window.addEventListener("scroll", changeBg);
  return (
    <div
      className={`fixed z-10 md:block w-full md:bottom-auto bottom-0 duration-500 ${
        navbar ? "bg-slate-200 text-slate-900 bg-slate-900" : ""
      }`}
    >
      <nav className="header-nav px-5 py-5 text-xl flex items-center md:justify-between justify-center md:w-10/11">
        <a href="/" className="fixed top-0 md:static md:top-auto md:mt-0 mt-5">
          <h1
            className={`text-xl font-bold uppercase lg:text-3xl md:text-2xl text-white ${
              navbar ? "md:inline-flex hidden" : ""
            }`}
          >
            reju bagibagi dotcom
          </h1>
        </a>

        <ul className="nav-menu flex lg:gap-6 gap-10">
          {NavMenu.map((menu, i) => {
            return (
              <li key={i} className={`${i === active ? "active" : "nav-text"}`}>
                <Link to={menu.path}>{menu.display}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
