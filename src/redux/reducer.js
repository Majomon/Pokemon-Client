import {
  GET_ALL_POKEMON,
  GET_ID_POKEMON,
  GET_TYPE_POKEMON,
  GET_NAME_POKEMON,
  POST_POKEMON,
  CLEAR_DETAILS_STATE,
  FILTER_CREATED,
  HANDLE_SORT,
  FILTER_TYPES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from "./actions";

const initialState = {
  pokemons: [], //estado actual
  pokemonsCopy: [], // Copia de los pokemon filtratos para aplicar otras cosas luego
  types: [], // Arreglo de Types
  details: [], // Details del pokemon
  searchPokemons: [], // Guarda los pokemones buscado en el searchBar
  favorite: [],
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_POKEMON:
      return {
        ...state,
        pokemons: payload,
        pokemonsCopy: payload,
      };
    case GET_TYPE_POKEMON:
      return {
        ...state,
        types: payload,
      };
    case GET_ID_POKEMON:
      return {
        ...state,
        details: payload,
      };
    case GET_NAME_POKEMON:
      return {
        ...state,
        searchPokemons: payload,
      };
    case POST_POKEMON:
      return { ...state };
    case CLEAR_DETAILS_STATE:
      return {
        ...state,
        details: [],
        searchPokemons: [],
      };
    case HANDLE_SORT:
      let arrSort;
      if (payload === "asc") {
        arrSort = state.pokemonsCopy.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        });
      }
      if (payload === "desc") {
        arrSort = state.pokemonsCopy.sort(function (a, b) {
          if (a.name > b.name) {
            return -1;
          }
          if (b.name > a.name) {
            return 1;
          }
          return 0;
        });
      }
      if (payload === "HAttack") {
        arrSort = state.pokemonsCopy.sort(function (a, b) {
          if (a.attack > b.attack) {
            return -1;
          }
          if (b.attack > a.attack) {
            return 1;
          }
          return 0;
        });
      }
      if (payload === "LAttack") {
        arrSort = state.pokemonsCopy.sort(function (a, b) {
          if (a.attack > b.attack) {
            return 1;
          }
          if (b.attack > a.attack) {
            return -1;
          }
          return 0;
        });
      }
      if (payload === "allAlf") {
        const apiPokes = state.pokemonsCopy
          .filter((el) => !el.createdInDb)
          .sort(function (a, b) {
            if (a.id > b.id) {
              return 1;
            }
            if (b.id > a.id) {
              return -1;
            }
            return 0;
          });
        const dbPokes = state.pokemonsCopy
          .filter((el) => el.createdInDb)
          .sort(function (a, b) {
            if (a.id > b.id) {
              return 1;
            }
            if (b.id > a.id) {
              return -1;
            }
            return 0;
          });
        arrSort = [...apiPokes, ...dbPokes];
      }
      return { ...state, pokemonsCopy: arrSort };

    case FILTER_CREATED:
      const allPokemons2 = state.pokemons;
      const statusFiltered2 =
        payload === "created"
          ? allPokemons2.filter((el) => el.createdInDb)
          : allPokemons2.filter((el) => !el.createdInDb);

      return {
        ...state,
        pokemonsCopy:
          payload === "todo"
            ? allPokemons2
            : statusFiltered2.length
            ? statusFiltered2
            : [],
      };
    case FILTER_TYPES:
      const allPokemons = state.pokemons;
      const statusFiltered =
        payload === "allTypes"
          ? allPokemons
          : allPokemons.filter((el) => el.types.includes(payload));

      return {
        ...state,
        pokemonsCopy: statusFiltered.length ? statusFiltered : [],
      };
      case ADD_FAVORITE:
        const newFavorite = payload;
        const isFavorite = state.favorite.some((el) => el.id === newFavorite.id);
        if (isFavorite) {
          return state; // Si el pokemon ya es favorito, no hace cambios
        } else {
          return {
            ...state,
            favorite: [...state.favorite, newFavorite],
          };
        }
  
      case REMOVE_FAVORITE:
        const idToRemove = payload;
        const updatedFavorites = state.favorite.filter((el) => el.id !== idToRemove);
        return {
          ...state,
          favorite: updatedFavorites,
        };
  

 
    default:
      return state;
  }
}

export default rootReducer;
