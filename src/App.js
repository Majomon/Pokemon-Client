import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Create from "./components/Create/Create";
import Detail from "./components/Detail/Detail";
import Home from "./components/Home/Home";
import SearchResults from "./components/SearchResults/SearchResults";
import SideBar from "./components/SideBar/SideBar";
import LandingPage from "./view/LandingPage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Team from "./components/Team/Team";

//Antes de ROUTES tengo que poner el navbar para que cargue cuando la ruta sea distinta al componente Start

function App() {
  const location = useLocation();
  const pathname = location.pathname;
  const shouldShowNavbar = !(
    pathname === "/" ||
    pathname === "/create" ||
    pathname.startsWith("/detail/")
  );

  return (
    <div className="App">
      {shouldShowNavbar && <SideBar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/searchResults/:nameSearch" element={<SearchResults />} />
        <Route path="/create" element={<Create />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
