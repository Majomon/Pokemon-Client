const urlPatternValidation = (URL) => {
  const regex = new RegExp(/\.(?=.*[a-zA-Z])\S*$/);
  return regex.test(URL);
};

export const validateForm = (error, inputPokemon) => {
  return (
    !error.name &&
    inputPokemon.name.length &&
    !error.img &&
    inputPokemon.img.length &&
    !error.hp &&
    inputPokemon.hp.length &&
    !error.attack &&
    inputPokemon.attack.length &&
    !error.defense &&
    inputPokemon.defense.length &&
    !error.speed &&
    inputPokemon.speed.length &&
    !error.height &&
    inputPokemon.height.length &&
    !error.weight &&
    inputPokemon.weight.length &&
    !error.types &&
    inputPokemon.types.length >= 2 &&
    inputPokemon.types.length <= 3
  );
};

export const validateType = (update) => {
  if (update.length === 0 ||update.length<2 || update.length>3) {
    return "Elige entre 2 y 3 tipos";
  } else if (update.length >= 2 && update.length <= 3) {
    return "";
  }
};

// Valida un campo específico
export const validateField = (name, value, pokemons) => {
  // Para evitar caracteres especiales
  let RegExpression = /^[a-zA-Z\s]*\s*$/;
  // Para controlar que solo sea número entero / No me esta funcionando
  /*   let RegEntero = /^\d+$/; */

  switch (name) {
    case "name":
      if (!value) {
        return "Name required";
      } else if (!RegExpression.test(value)) {
        return "Special characters are not allowed";
      } else if (value.length > 18) {
        return `The name can't be longer than 18 characters`;
      } else if (pokemons.some((poke) => poke.name === value)) {
        return "A pokemon with that name is already existing";
      }
      break;
    case "img":
      if (!urlPatternValidation(value) && value !== "")
        return "Format not supported";
      break;

    case "hp":
      if (value < 1 || value > 99) {
        if (value < 1) {
          return "The minimum value is 1";
        }
        if (value > 99) {
          return "The maximun value is 99";
        }
      }
      break;
    case "attack":
      if (value < 1 || value > 99) {
        if (value < 1) {
          return "The minimum value is 1";
        }
        if (value > 99) {
          return "The maximun value is 99";
        }
      }
      break;
    case "defense":
      if (value < 1 || value > 99) {
        if (value < 1) {
          return "The minimum value is 1";
        }
        if (value > 99) {
          return "The maximun value is 99";
        }
      }
      break;
    case "speed":
      if (value < 1 || value > 99) {
        if (value < 1) {
          return "The minimum value is 1";
        }
        if (value > 99) {
          return "The maximun value is 99";
        }
      }
      break;
    case "height":
      if (value < 1 || value > 99) {
        if (value < 1) {
          return "The minimum value is 1";
        }
        if (value > 99) {
          return "The maximun value is 99";
        }
      }
      break;
    case "weight":
      if (value < 1 || value > 99) {
        if (value < 1) {
          return "The minimum value is 1";
        }
        if (value > 99) {
          return "The maximun value is 99";
        }
      }
      break;
    default:
      break;
  }

  return "";
};
