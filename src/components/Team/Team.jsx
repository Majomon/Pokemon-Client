import React, { useState } from "react";
import style from "./Team.module.css";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import { primerLetraMayuscula } from "../../utils/Regex";
import videoActive from "../../assets/video/cardFavoritos.mp4";

function Team() {
  const team = useSelector((state) => state.favorite);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={style.container}>
      <div className={style.carousel}>
        <div className={style.cardsContainer}>
          {team.map((pokemon, index) => (
            <div
              key={index}
              className={`${style.card} ${
                index === activeIndex ? style.active : style.inactive
              }`}
              onClick={() => handleClick(index)}
            >
              {/* Renderizar contenido de la card de cada pokemon */}
              <h3>{primerLetraMayuscula(pokemon.name)}</h3>
              <img
                src={pokemon.img}
                alt={pokemon.name}
                className={style.cardImg}
              />
              {index === activeIndex && (
                <video
                  src={videoActive}
                  className={style.cardVideo}
                  autoPlay
                  loop
                  muted
                />
              )}
              {/* Agrega más elementos según las propiedades de cada pokemon */}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Team;
