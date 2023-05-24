import React from "react";
import style from "./SideBar.module.css";
import logoHome from "../../assets/img/logoHome.png";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className={style.containerSideBar}>
      <div className={style.container}>
        <NavLink to="/home" className={style.containerImg}>
          <img className={style.imgSlideBar} src={logoHome} alt={logoHome} />
        </NavLink>
        <SearchBar />
        <NavLink className={style.buttonContainer} to="/team">
          <button className={style.buttonTeam}>Favoritos</button>
        </NavLink>
        <NavLink className={style.buttonContainer} to="/create">
          <button className={style.buttonCreate}>Create</button>
        </NavLink>
      </div>
    </div>
  );
}

export default SideBar;
