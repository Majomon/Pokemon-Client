import React from "react";
import { NavLink } from "react-router-dom";
import linkedin from "../../assets/img/redes/logo-linkedin.svg";
import github from "../../assets/img/redes/logo-github.svg";
import insta from "../../assets/img/redes/logo-instagram.svg";
import style from "./Footer.module.css";

function Footer() {
  return (
    <div className={style.containerFooter}>
      <div className={style.box}>
        <NavLink
          to={"https://www.linkedin.com/in/mauricio-monzon-589243184/"}
          target="_blank"
        >
          <img className={style.imgFooter} src={linkedin} alt={linkedin} />
        </NavLink>
        <NavLink to={"https://github.com/Majomon"} target="_blank">
          <img className={style.imgFooter} src={github} alt={github} />
        </NavLink>
        <NavLink
          to={"https://www.instagram.com/maurimonzon_j/"}
          target="_blank"
        >
          <img className={style.imgFooter} src={insta} alt={insta} />
        </NavLink>
      </div>
    </div>
  );
}

export default Footer;
