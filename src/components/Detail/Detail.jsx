import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import height from "../../assets/img/cards/Altura.png";
import weight from "../../assets/img/cards/Peso.png";
import hp from "../../assets/img/cards/heart.svg";
import defense from "../../assets/img/cards/shield.svg";
import speed from "../../assets/img/cards/speed.svg";
import attack from "../../assets/img/cards/sword.svg";
import { clearDetailsState, getIdPokemon } from "../../redux/actions";
import { primerLetraMayuscula } from "../../utils/Regex";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
import style from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.details);
  const [loading, setLoading] = useState(true);
  const [section, setSection] = useState(1);

  useEffect(() => {
    dispatch(getIdPokemon(id))
      .then(() => setLoading(false))
      .catch((error) => {
        setLoading(false);
      });
    return () => {
      dispatch(clearDetailsState());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  function handleSection(e) {
    if (e.target.innerHTML === "About") {
      setSection(1);
      console.log(e.target.innerHTML);
    } else if (e.target.innerHTML === "Stats") {
      setSection(2);
      console.log(e.target.innerHTML);
    }
  }

  return (
    <>
      {loading ? (
        <div className={style.containerSpinner}>
          <div className={style.spinner}>
            <div className={style.dot1}></div>
            <div className={style.dot2}></div>
          </div>
        </div>
      ) : pokemon.length === 0 ? (
        <>
          <SideBar />
          <div className={style.pokemonNotFound}>
            <h1>{`El pokemón de ID: ${id} no existe`}</h1>
          </div>
          <Footer />
        </>
      ) : (
        <div className={style.container}>
          <div className={style.containerDetail}>
            <div className={style.pokemonBase}>
              <img className={style.img} src={pokemon.img} alt={pokemon.id} />
              <h3 className={style.h3Style}>Types:</h3>
              <div className={style.containerStyles}>
                {pokemon.types.map((type, index) => (
                  <img
                    key={type}
                    src={`/types/${type}.png`}
                    alt={`${index}`}
                    height="100px"
                  />
                ))}
              </div>
            </div>
            <div className={style.pokemonInfo}>
              <div className={style.encabezado}>
                <h1 className={style.name}>
                  {primerLetraMayuscula(pokemon.name)}
                </h1>
                <h4 className={style.idPokemon}>Pokedex #{id}</h4>
              </div>

              <nav className={style.sections}>
                <div
                  className={style.sectionsBox}
                  style={{ position: "relative" }}
                >
                  <button
                    onClick={(e) => handleSection(e)}
                    className={section === 1 ? style.active : style.inactive}
                  >
                    About
                  </button>
                  <span
                    className={style.lineab}
                    style={
                      section === 1 ? { opacity: "100%" } : { opacity: "0%" }
                    }
                  ></span>
                </div>
                <div
                  className={style.sectionsBox}
                  style={{ position: "relative" }}
                >
                  <button
                    onClick={(e) => handleSection(e)}
                    className={section === 2 ? style.active : style.inactive}
                  >
                    Stats
                  </button>
                  <span
                    className={style.linestat}
                    style={
                      section === 2 ? { opacity: "100%" } : { opacity: "0%" }
                    }
                  ></span>
                </div>
              </nav>

              <section className={section === 1 ? style.show : style.hide}>
                <div className={style.containerAbaout}>
                  <div className={style.sectionDescripcion}>
                    <h6>Description</h6>
                    <span>
                      Muchos lorem por ACA Lorem Lorem Lorem Lorem Lorem Lorem
                      Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                      Lorem{" "}
                    </span>
                  </div>
                  <div className={style.sectionRelleno}>
                    <div className={style.relleno1}>
                      <h6>Habilidades</h6>
                      <span>
                        Muchos lorem por ALLA Lorem Lorem Lorem Lorem Lorem
                        Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                        Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                        Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                        Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                        Lorem Lorem Lorem
                      </span>
                    </div>
                    <div className={style.relleno2}>
                      <h6>Localización 1</h6>
                      <span>Muchos lorem por ACULLA Lorem</span>
                    </div>
                    <div className={style.relleno3}>
                      <h6>Localización 2</h6>
                      <span>Muchos lorem por ACULLA Lorem</span>
                    </div>
                  </div>
                </div>
              </section>
              <section className={section === 2 ? style.show : style.hide}>
                <div className={style.sectionStats}>
                  <div className={style.fadeIn}>
                    <span>Hp: </span>
                    <img className={style.icon} src={hp} alt={hp} key={hp} />
                  </div>
                  <input
                    className={style.rangeAnimationHp}
                    type="range"
                    value={pokemon.hp}
                    max={300}
                    min={0}
                    style={{ "--pokemon-hp": pokemon.hp }}
                    readOnly
                  />
                  <div className={style.fadeIn}>
                    <span>Attack: </span>
                    <img
                      className={style.icon}
                      src={attack}
                      alt={attack}
                      key={attack}
                    />
                  </div>
                  <input
                    className={style.rangeAnimationAttack}
                    type="range"
                    value={pokemon.attack}
                    max={300}
                    min={0}
                    style={{ "--pokemon-attack": pokemon.attack }}
                    readOnly
                  />
                  <div className={style.fadeIn}>
                    <span>Defense: </span>
                    <img
                      className={style.icon}
                      src={defense}
                      alt={defense}
                      key={defense}
                    />
                  </div>
                  <input
                    className={style.rangeAnimationDefense}
                    type="range"
                    value={pokemon.defense}
                    max={300}
                    min={0}
                    style={{ "--pokemon-defense": pokemon.defense }}
                    readOnly
                  />
                  <div className={style.fadeIn}>
                    <span>Speed: </span>
                    <img
                      className={style.icon}
                      src={speed}
                      alt={speed}
                      key={speed}
                    />
                  </div>
                  <input
                    className={style.rangeAnimationSpeed}
                    type="range"
                    value={pokemon.speed}
                    max={300}
                    min={0}
                    style={{ "--pokemon-speed": pokemon.speed }}
                    readOnly
                  />

                  <div>
                    <div>
                      <img
                        className={style.icon}
                        src={height}
                        alt={height}
                        key={height}
                      />

                      <p>Height: {pokemon.height}</p>
                    </div>
                    <div>
                      <img
                        className={style.icon}
                        src={weight}
                        alt={weight}
                        key={weight}
                      />

                      <p>Weight: {pokemon.weight}</p>
                    </div>
                  </div>
                </div>
              </section>

              <NavLink to={"/home"}>
                <button className={style.buttonBack}>Volver</button>
              </NavLink>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default Detail;
