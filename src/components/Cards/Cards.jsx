import React from "react";
import Card from "../Card/Card";
import FilterFail from "../FailSearch/FailSearch";
import style from "./Cards.module.css";

function Cards({ currentCards, pagination }) {
  /*   const allPokemons = useSelector((state) => state.pokemons);
  const typePokemons = useSelector((state) => state.types);
 */
  const loading = currentCards.length === 0 || pagination.length === 0;

  return (
    <div>
      {loading ? (
        <div className={style.containerSpinner}>
          <div className={style.spinner}>
            <div className={style.dot1}></div>
            <div className={style.dot2}></div>
          </div>
        </div>
      ) : (
        <div>
          <div className={style.cardContainer}>
            {currentCards.length ? (
              currentCards.map(({ id, name, img, types, height, weight }) => (
                <Card
                  key={id}
                  id={id}
                  name={name}
                  img={img}
                  types={types}
                  height={height}
                  weight={weight}
                />
              ))
            ) : (
              <FilterFail />
            )}
          </div>
          <div className={style.pagination}>{pagination}</div>
        </div>
      )}
    </div>
  );
}

export default Cards;
