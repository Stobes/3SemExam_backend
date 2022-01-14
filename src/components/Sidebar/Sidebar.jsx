import React from "react";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { IconContext } from "react-icons/lib";
import "bootstrap/dist/css/bootstrap.min.css";
//import LogIn from "../Login";

const Sidebar = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        
        <nav className="nav-menu">
          <ul nav-menu-items>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
