import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    filterCreated,
    filterHandleSort,
    filterTypes
} from "../../redux/actions";
import { primerLetraMayuscula } from "../../utils/Regex.js";
import style from "./FilterHome.module.css";

function FilterHome({setSortFilter,setCurrentPage,}) {
  const typePokemons = useSelector((state) => state.types);
  const dispatch = useDispatch();
  const handleSort = (e) => {
    setSortFilter(e.target.value); // Actualizar el estado del filtro de ordenamiento
    setCurrentPage(1); // Reiniciar la página a la primera página
    dispatch(filterHandleSort(e.target.value));
  };

  const handlerCreate = (e) => {
    setSortFilter(e.target.value); // Actualizar el estado del filtro de ordenamiento
    dispatch(filterCreated(e.target.value));
  };

  const handlerTypes = (e) => {
    setSortFilter(e.target.value);
    dispatch(filterTypes(e.target.value));
  };
  return (
    <div className={style.sortfilter}>
      <div className={style.boxFiltro}>
        <label className={style.labelFiltro}>Ordenar: </label>
        <select onChange={(e) => handleSort(e)}>
          <option value="allAlf">All</option>
          <option value="asc">A - Z</option>
          <option value="desc">Z - A</option>
          <option value="HAttack">Highest Attack</option>
          <option value="LAttack">Lowest Attack</option>
        </select>
      </div>
      <div className={style.boxFiltro}>
        <label className={style.labelFiltro}>Filtrar: </label>
        <select className={style.select} onChange={(e) => handlerCreate(e)}>
          <option value="todo">All</option>
          <option value="api">API</option>
          <option value="created">Created</option>
        </select>
        <select className={style.select} onChange={(e) => handlerTypes(e)}>
          <option value="allTypes">All types</option>
          {typePokemons.map((type) => (
            <option value={type.name} key={type.name}>
              {primerLetraMayuscula(type.name)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default FilterHome;
