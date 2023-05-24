import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import pokemonLanding from "../assets/img/Pok.webp";
import fondo from "../assets/img/landing_page.webp";
import { getAllPokemon, getTypesPokemon } from "../redux/actions";
import style from "./LandingPage.module.css";

function LandingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTypesPokemon());
    dispatch(getAllPokemon());
  }, [dispatch]);

  return (
    <div className={style.containerLanding}>
      <img className={style.backImg} src={fondo} alt={fondo}></img>
      <div className={style.landing}>
        <div className={style.box}>
          <img className={style.tituloPokemon} src={pokemonLanding} alt={pokemonLanding}></img>
        </div>
        <NavLink className={style.navLink} to="/home">
          <button className={style.buttonLanding}>Home</button>
        </NavLink>
      </div>
    </div>
  );
}

export default LandingPage;