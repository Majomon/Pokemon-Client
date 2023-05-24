import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { getNamePokemon } from "../../redux/actions";
import style from "./SearchBar.module.css";

function SearchBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isInputActive, setIsInputActive] = useState(false);
  const [name, setName] = useState("");

  const handleFocus = () => {
    setIsInputActive(true);
  };

  const handleBlur = () => {
    setIsInputActive(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value.trim().toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);
    if (name !== "") {
      setName("");
      dispatch(getNamePokemon(name));
      navigate(`/searchResults/${name}`);
    }
  };

  return (
    <form
      className={style.containerSearchBar}
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        className={style.inputSearch}
        type="text"
        name="name"
        value={name}
        onChange={(e) => handleChange(e)}
        placeholder={isInputActive ? "" : "Search"}
        autoComplete="off"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      ></input>
      {/* <button className={style.button} type="submit" value="Buscar" /> */}
    </form>
  );
}

export default SearchBar;
