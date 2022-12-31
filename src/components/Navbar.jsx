import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div>
      <style jsx="true">{`
        .logo-nav {
          width: 40px;
        }
        .left-side {
          display: flex;
          align-items: center;
        }
        .main-navbar {
          width: min(100% - 22px, 1200px);
          margin-inline: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          // padding: 10px 15px;
          padding: 11px 0;
        }
        .menu-btn {
          cursor: pointer;
        }
        .main-menu {
          position: fixed;
          display: flex;
          flex-direction: column;
          z-index: +1;
          height: 100%;
          align-items: center;
          justify-content: center;
          top: 0%;
          right: 0%;
          width: 0%;
          border-radius: 200px;
          background-color: rgb(240, 240, 250);
          color: black;
          transition: all 700ms ease-in-out;
        }

        .main-menu a {
          text-decoration: none;
          letter-spacing: 4px;
          font-size: 1.4em;
        }
        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          cursor: pointer;
        }
        .open {
          right: 0%;
          top: 0%;
          border-radius: 0px;
          width: 100%;
        }
        .close {
          top: -100%;
          width: 0%;
        }
      `}</style>

      <div className={`main-menu ${toggleMenu ? "open" : "close"}`}>
        <span
          className="material-symbols-outlined close-btn"
          onClick={() => {
            setToggleMenu(false);
          }}
        >
          close
        </span>
        <Link
          to={"/"}
          onClick={() => {
            setToggleMenu(false);
          }}
        >
          Home
        </Link>
        <Link
          to={"/about"}
          onClick={() => {
            setToggleMenu(false);
          }}
        >
          About
        </Link>
        <a
          href={"https://www.linkedin.com/in/hammad-saghir-a7a368231/"}
          onClick={() => {
            setToggleMenu(false);
          }}
        >
          My Linkedin
        </a>
      </div>
      <div className="main-navbar">
        <Link
          to={"/"}
          style={{
            textDecoration: "none",
          }}
        >
          <div className="left-side">
            <img
              className="logo-nav"
              src="logoNewsWalaPai.png"
              alt="Logo for NewsWalaPai"
            />
            <h2
              style={{
                marginLeft: "8px",
                fontSize: "1.2em",
                fontWeight: "500",
              }}
            >
              NewsWalaPai
            </h2>
          </div>
        </Link>
        <span
          className="material-symbols-outlined menu-btn"
          onClick={() => {
            setToggleMenu(true);
          }}
        >
          widgets
        </span>
      </div>
    </div>
  );
}
