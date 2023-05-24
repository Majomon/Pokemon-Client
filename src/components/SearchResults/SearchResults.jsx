import React from "react";
import style from "./SearchResults.module.css";
import CardsSearch from "../CardsSearch/CardsSearch";
import Footer from "../Footer/Footer";

function SearchResults() {
  return (
    <div className={style.containerSearch}>
      <CardsSearch />
      <Footer/>
    </div>
  );
}

export default SearchResults;
