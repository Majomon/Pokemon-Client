import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { clearDetailsState, getNamePokemon } from "../../redux/actions";
import { typesColors } from "./Utils";

import { primerLetraMayuscula } from "../../utils/Regex";
import FailSearch from "../FailSearch/FailSearch";
import style from "./CardsSearch.module.css";

function CardsSearch() {
  const dispatch = useDispatch();
  const { nameSearch } = useParams();
  const [loading, setLoading] = useState(true);
  const searchPokemon = useSelector((state) => state.searchPokemons);

  useEffect(() => {
    dispatch(getNamePokemon(nameSearch))
      .then(() => setLoading(false))
      .catch((error) => {
        setLoading(false);
      });

    return () => {
      dispatch(clearDetailsState());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nameSearch]);

  /*           <img
                  src={`${process.env.PUBLIC_URL}/sprites/${searchPokemon.id}.gif`}
                  alt={searchPokemon.id}
                  className={style.img}
                /> 
 */
  return (
    <NavLink className={style.containerBox} to={`/detail/${searchPokemon.id}`}>
      {loading ? (
        <div className={style.containerSpinner}>
          <div className={style.spinner}>
            <div className={style.dot1}></div>
            <div className={style.dot2}></div>
          </div>
        </div>
      ) : (
        <div className={style.containerCard}>
          {searchPokemon !== "Pokemon" ? (
            <div className={style.container}>
              <h2 className={style.name}>
                {searchPokemon.name && primerLetraMayuscula(searchPokemon.name)}
              </h2>
              {searchPokemon.img && (
                <img
                  src={searchPokemon.img}
                  alt={searchPokemon.id}
                  key={searchPokemon.name}
                  className={style.img}
                />
              )}
              {/* Renderizar los tipos solo si existen */}
              {searchPokemon.types && (
                <>
                  <h3
                    className={style.h3Types}
                    style={{ color: typesColors[searchPokemon.types[0]] }}
                  >
                    Types:
                  </h3>
                  <div className={style.types}>
                    {searchPokemon.types.map((type, index) => (
                      <img
                        src={`/types/${type}.png`}
                        alt={`${type}`}
                        height="80px"
                        key={index}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : (
            <FailSearch nameSearch={nameSearch} />
          )}
        </div>
      )}
      <NavLink to={"/home"} className={style.boxButton}>
        <button className={style.button}>Volver</button>
      </NavLink>
    </NavLink>
  );
}

export default CardsSearch;
