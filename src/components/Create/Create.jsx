import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import imgDoctor from "../../assets/img/create/doctor_oak.png";
import imgFondo from "../../assets/img/create/fondo_create.jpg";
import imgForm from "../../assets/img/create/titulo_form.png";
import { getAllPokemon, postPokemon } from "../../redux/actions";
import { primerLetraMayuscula } from "../../utils/Regex";
import style from "./Create.module.css";
import { typesColors } from "./Utils";
import { validateField, validateForm, validateType } from "./Validaciones";

function Create() {
  const dispatch = useDispatch();
  const typesPokemons = useSelector((state) => state.types);
  const allPokemons = useSelector((state) => state.pokemons);
  const [error, setError] = useState({}); //Estados locales para errores
  const [disabled, setDisabled] = useState(true); //Estado local para desabilitar o habilitar el botón de crear pokemón
  const [inputPokemon, setInputPokemon] = useState({
    name: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });
  // Cuando se monte el componente Create se hace un dispatch de getTypespokemon para traerme todos los tipos de pokemno que alla

  useEffect(() => {
    // Dejo esto por el momento si en caso falla la carga del estado desde el landing aca lo vuelve a intentar
 /*    if (typesPokemons.length === 0) {
      dispatch(getTypesPokemon());
    } */

    if (validateForm(error, inputPokemon)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [dispatch, error, inputPokemon, setDisabled]);

  // Funcion para manejar el Check de los types
  const handleImageClick = (type) => {
    // Si el Type ya esta lo saca del array. Si no esta lo agrega.
    const updatedTypes = inputPokemon.types.includes(type)
      ? inputPokemon.types.filter((selectedType) => selectedType !== type)
      : [...inputPokemon.types, type];

    setInputPokemon((prev) => ({
      ...prev,
      types: updatedTypes,
    }));

    setError((prevError) => ({
      ...prevError,
      types: validateType(updatedTypes),
    }));
  };

  // Hace seguimiento de los cambios en el Input
  function handleChange(e) {
    const { name, value } = e.target;

    // Me traigo el valor de los inputs actualizados cada que alla un cambio en alguno de ellos
    setInputPokemon({
      ...inputPokemon,
      [name]: value.trim(),
    });

    setError((prevError) => ({
      // Me traigo una copia del estado
      ...prevError,
      // Ahora con la funcion validateField valido el campo especifico en funcion del nombre y el valor.
      [name]: validateField(name, value, allPokemons),
    }));
  }

  // Funcion para crear el Pokemón
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postPokemon(inputPokemon));
    dispatch(getAllPokemon());
    setInputPokemon({
      name: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      img: "",
      types: [],
    });
  }
  return (
    <div className={style.containerCreate}>
      <img className={style.imgCreateFondo} src={imgFondo} alt={imgFondo} />
      <div className={style.info}>
        <NavLink className={style.navLinkHome} to="/home">
          <button className={style.buttonReturn}> Return home</button>
        </NavLink>
        <img className={style.imgDoctor} src={imgDoctor} alt={imgDoctor} />
      </div>
      <div className={style.container}>
        <div className={style.formContainer}>
          <div className={style.containerImgForm}>
            <img className={style.imgForm} src={imgForm} alt={imgForm} />
          </div>
          <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.containerInfoForm}>
              <div className={style.box}>
                <label htmlFor="name">Name</label>
                <input
                  className={style.inputForm}
                  type="text"
                  name="name"
                  value={inputPokemon.name}
                  style={
                    error.name
                      ? { borderColor: "#e74c3c" }
                      : inputPokemon.name !== undefined &&
                        inputPokemon.name.length
                      ? { borderColor: "#2ecc71" }
                      : {}
                  }
                  onChange={handleChange}
                />
                {error.name && <span>{error.name}</span>}
              </div>

              <div className={style.box}>
                <label htmlFor="img">Link image</label>
                <input
                  className={style.inputForm}
                  type="text"
                  name="img"
                  value={inputPokemon.img}
                  style={
                    error.img
                      ? { borderColor: "#e74c3c" }
                      : inputPokemon.img !== undefined &&
                        inputPokemon.img.length
                      ? { borderColor: "#2ecc71" }
                      : {}
                  }
                  onChange={handleChange}
                />
                {error.img && <span>{error.img}</span>}
              </div>
              <div className={style.box}>
                <label htmlFor="hp">Hp</label>
                <input
                  className={style.inputForm}
                  type="number"
                  name="hp"
                  value={inputPokemon.hp}
                  pattern="^\d+$"
                  title="Please enter an integer value"
                  style={
                    error.hp
                      ? { borderColor: "#e74c3c" }
                      : inputPokemon.hp !== undefined && inputPokemon.hp.length
                      ? { borderColor: "#2ecc71" }
                      : {}
                  }
                  onChange={handleChange}
                />
                {error.hp && <span>{error.hp}</span>}
              </div>
              <div className={style.box}>
                <label htmlFor="attack">Attack</label>
                <input
                  className={style.inputForm}
                  type="number"
                  name="attack"
                  value={inputPokemon.attack}
                  style={
                    error.attack
                      ? { borderColor: "#e74c3c" }
                      : inputPokemon.attack !== undefined &&
                        inputPokemon.attack.length
                      ? { borderColor: "#2ecc71" }
                      : {}
                  }
                  onChange={handleChange}
                />
                {error.attack && <span>{error.attack}</span>}
              </div>
              <div className={style.box}>
                <label htmlFor="defense">Defense</label>

                <input
                  className={style.inputForm}
                  type="number"
                  name="defense"
                  value={inputPokemon.defense}
                  style={
                    error.defense
                      ? { borderColor: "#e74c3c" }
                      : inputPokemon.defense !== undefined &&
                        inputPokemon.defense.length
                      ? { borderColor: "#2ecc71" }
                      : {}
                  }
                  onChange={handleChange}
                />
                {error.defense && <span>{error.defense}</span>}
              </div>
              <div className={style.box}>
                <label htmlFor="speed">Speed</label>

                <input
                  className={style.inputForm}
                  type="number"
                  name="speed"
                  value={inputPokemon.speed}
                  style={
                    error.speed
                      ? { borderColor: "#e74c3c" }
                      : inputPokemon.speed !== undefined &&
                        inputPokemon.speed.length
                      ? { borderColor: "#2ecc71" }
                      : {}
                  }
                  onChange={handleChange}
                />
                {error.speed && <span>{error.speed}</span>}
              </div>
              <div className={style.box}>
                <label htmlFor="height">Height</label>

                <input
                  className={style.inputForm}
                  type="number"
                  name="height"
                  value={inputPokemon.height}
                  style={
                    error.height
                      ? { borderColor: "#e74c3c" }
                      : inputPokemon.height !== undefined &&
                        inputPokemon.height.length
                      ? { borderColor: "#2ecc71" }
                      : {}
                  }
                  onChange={handleChange}
                />
                {error.height && <span>{error.height}</span>}
              </div>
              <div className={style.box}>
                <label htmlFor="weight">Weight</label>

                <input
                  className={style.inputForm}
                  type="number"
                  name="weight"
                  value={inputPokemon.weight}
                  style={
                    error.weight
                      ? { borderColor: "#e74c3c" }
                      : inputPokemon.weight !== undefined &&
                        inputPokemon.weight.length
                      ? { borderColor: "#2ecc71" }
                      : {}
                  }
                  onChange={handleChange}
                />
                {error.weight && <span>{error.weight}</span>}
              </div>
            </div>

            <div className={style.containerTypes}>
              <h2 className={style.h2Types}>Types</h2>
              {error.types && <p className={style.pTypes}>{error.types}</p>}

              <div className={style.listTypes}>
                {typesPokemons?.map((type) => {
                  return (
                    <div
                      htmlFor={type.name}
                      key={type.name}
                      className={`${style.boxType} ${
                        inputPokemon.types.includes(type.name)
                          ? style.checked
                          : ""
                      }`}
                    >
                      <p className={style.typeName}>
                        {primerLetraMayuscula(type.name)}
                      </p>

                      <div
                        className={`${style.circle} ${
                          inputPokemon.types.includes(type.name)
                            ? style.checkedCircle
                            : ""
                        }`}
                        name={type.name}
                        value={inputPokemon.name}
                        style={{ backgroundColor: typesColors[type.name] }}
                        onClick={() => handleImageClick(type.name)}
                      >
                        <img
                          src={`icons/${type.name}.svg`}
                          alt={`${type.name}`}
                          height="16px"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <button
              className={style.btnCreate}
              type="submit"
              disabled={disabled}
            >
              Crear pokemón
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
