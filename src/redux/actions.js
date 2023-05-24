import { URL_BASE } from "../utils/URL";
import axios from "axios";
import showAlert from "../utils/modalSucessCreate";
import showAlertError from "../utils/modalErrorCreate";
export const GET_ALL_POKEMON = "GET_ALL_POKEMON";
export const GET_TYPE_POKEMON = "GET_TYPE_POKEMON";
export const GET_ID_POKEMON = "GET_ID_POKEMONS";
export const GET_NAME_POKEMON = "GET_NAME_POKEMON";
export const POST_POKEMON = "POST_POKEMON";
export const CLEAR_DETAILS_STATE = "CLEAR_DETAILS_STATE";
export const FILTER_CREATED = "FILTER_CREATED";
export const HANDLE_SORT = "HANDLE_SORT";
export const FILTER_TYPES = "FILTER_TYPES";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

// Trae todos los Pokemon
export const getAllPokemon = () => {
  return async (dispatch) => {
    try {
      const allPokemon = await axios.get(`${URL_BASE}/pokemons`);
      dispatch({ type: GET_ALL_POKEMON, payload: allPokemon.data });
    } catch (error) {
      return [];
    }
  };
};
// Trae los types de los pokemon
export const getTypesPokemon = () => {
  return async (dispatch) => {
    try {
      const typesPokemon = await axios.get(`${URL_BASE}/types`);
      dispatch({ type: GET_TYPE_POKEMON, payload: typesPokemon.data });
    } catch (error) {
      return [];
    }
  };
};
// Trae por id al Pokemon
export const getIdPokemon = (id) => {
  return async (dispatch) => {
    try {
      const detailIdPokemon = await axios.get(`${URL_BASE}/pokemons/${id}`);
      return dispatch({ type: GET_ID_POKEMON, payload: detailIdPokemon.data });
    } catch (error) {
      return [];
    }
  };
};
// Trae por query al pokemon
export const getNamePokemon = (name) => {
  return async (dispatch) => {
    try {
      const detailNamePokemon = await axios.get(
        `${URL_BASE}/pokemons/name?name=${name}`
      );
      return dispatch({
        type: GET_NAME_POKEMON,
        payload: detailNamePokemon.data,
      });
    } catch (error) {
      return dispatch({
        type: "GET_NAME_POKEMON",
        payload: "Pokemon",
      });
    }
  };
};
// Crea al Pokemón
export const postPokemon = (pokemon) => {
  return async (dispatch) => {
    try {
      const postPokemon = await axios.post(`${URL_BASE}/pokemons`, pokemon);
      showAlert("Pokemon creado con éxito");
      return dispatch({ type: POST_POKEMON, payload: postPokemon });
    } catch (error) {
      return showAlertError({ error: error.message });
    }
  };
};
// Acción que permite limpiar el estado de detalles
export const clearDetailsState = () => {
  return (dispatch) => {
    return dispatch({ type: CLEAR_DETAILS_STATE });
  };
};

// Funciones extras
// Acción que permite filtrar a los pokemones si estos vienen del api o de la base de datos
export const filterCreated = (payload) => {
  return {
    type: "FILTER_CREATED",
    payload,
  };
};

export const filterHandleSort = (payload) => {
  return {
    type: "HANDLE_SORT",
    payload,
  };
};

export const filterTypes = (payload) => {
  return {
    type: "FILTER_TYPES",
    payload,
  };
};

export const addFavorite = (payload) => {
  return (dispatch) => {
    return dispatch({ type: ADD_FAVORITE, payload });
  };
};

export const removeFavorite = (id) => {
  return (dispatch) => {
    return dispatch({
      type: REMOVE_FAVORITE,
      payload: id,
    });
  };
};
