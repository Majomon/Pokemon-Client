import React from "react";
import style from "./FailSearch.module.css";

function FailSearch({ nameSearch }) {
  return (
    <div className={style.filterContainer}>
      <h2>
        El pokemón <span>{nameSearch}</span> no existe
      </h2>
    </div>
  );
}

export default FailSearch;
