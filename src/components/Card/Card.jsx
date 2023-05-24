import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addFavorite, removeFavorite } from "../../redux/actions";
import { primerLetraMayuscula } from "../../utils/Regex";
import style from "./Card.module.css";
import { typesColors } from "./Utils";

function Card({ id, name, img, types, height, weight }) {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorite);
  const [isFav, setIsFav] = useState(false);

  let sprite;
  if (id >= 1 && id <= 151) {
    sprite = true;
  }

  useEffect(() => {
    setIsFav(favorite.some((fav) => fav.id === id));
  }, [favorite, id]);

  const handleFavorite = (pokemon) => {
    if (isFav) {
      dispatch(removeFavorite(pokemon.id));
    } else {
      dispatch(addFavorite(pokemon));
    }
  };

  return (
    <div className={style.container}>
      <div className={style.containerCard} to={`/detail/${id}`}>
        {isFav ? (
          <button
            className={`${style.favActive} ${style.imgFav}`}
            onClick={() =>
              handleFavorite({ id, name, img, types, height, weight })
            }
          >
            ❤️
          </button>
        ) : (
          <button
            className={`${style.favInactive} ${style.imgFav}`}
            onClick={() =>
              handleFavorite({ id, name, img, types, height, weight })
            }
          >
            🤍
          </button>
        )}
        <h2 className={style.name}>{primerLetraMayuscula(name)}</h2>
        {sprite ? (
          <NavLink className={style.navLink} to={`/detail/${id}`}>
            <img
              src={`sprites/${id}.gif`}
              alt={id}
              className={style.img}
              key={id}
            />
          </NavLink>
        ) : (
          <NavLink className={style.navLink} to={`/detail/${id}`}>
            <img src={img} alt={id} className={style.img} key={id} />
          </NavLink>
        )}
        <h3 className={style.h3Types} style={{ color: typesColors[types[0]] }}>
          Types:
        </h3>
        <div className={style.types}>
          {types.map((type, index) => (
            <img
              src={`/types/${type}.png`}
              alt={`${type}`}
              height="80px"
              key={index}
            />
          ))}
        </div>
        <div className={style.containerAbout}>
          <h3
            style={{ color: typesColors[types[0]] }}
            className={style.titleAbout}
          >
            About
          </h3>
          <div className={style.infoAbout}>
            <div className={style.box}>
              <img className={style.imgAbout} src="/Altura.png" alt={id} />
              <span>{height / 10}m</span>
              <p className={style.detalle}>Height</p>
            </div>
            <div className={style.box}>
              <img className={style.imgAbout} src="/Peso.png" alt={id} />
              <span>{weight / 10}kg</span>
              <p className={style.detalle}>Weight</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
