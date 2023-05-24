import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemon, getTypesPokemon } from "../../redux/actions";

import Cards from "../Cards/Cards";
import FilterHome from "../FilterHome/FilterHome";
import Footer from "../Footer/Footer";
import style from "./Home.module.css";

function Home() {
  const dispatch = useDispatch();
  const pokemonsTypesFilter = useSelector((state) => state.pokemonsCopy);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortFilter, setSortFilter] = useState("");

  const cardsPerPage = 12;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = pokemonsTypesFilter.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = Math.ceil(pokemonsTypesFilter.length / cardsPerPage);
  const pagination = [];
  for (let i = 1; i <= pageNumbers; i++) {
    pagination.push(
      <button
        key={i}
        className={i === currentPage ? style.activePage : ""}
        onClick={() => handlePageChange(i)}
      >
        {i}
      </button>
    );
  }
  useEffect(() => {
    if (pokemonsTypesFilter.length === 0) {
      dispatch(getAllPokemon());
      dispatch(getTypesPokemon());
    }
  }, [dispatch, pokemonsTypesFilter]);

  useEffect(() => {
    setCurrentPage(1);
  }, [pokemonsTypesFilter, sortFilter]);

  return (
    <div className={style.containerHome}>
   
      <FilterHome
        setSortFilter={setSortFilter}
        setCurrentPage={setCurrentPage}
      />
      <Cards
        currentCards={currentCards}
        pagination={pagination}
        currentPage={currentPage}
      />
      <Footer />
    </div>
  );
}

export default Home;
