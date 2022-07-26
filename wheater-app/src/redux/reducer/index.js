import lightRain from "../../styles/imgs/icons/500.png";
import moderateRain from "../../styles/imgs/icons/501.png";
import heavyRain from "../../styles/imgs/icons/502.png";
import clear from "../../styles/imgs/icons/800.png";
import fewClouds from "../../styles/imgs/icons/801.png";
import scatteredClouds from "../../styles/imgs/icons/802.png";
import brokenClouds from "../../styles/imgs/icons/803.png";
import overcastClouds from "../../styles/imgs/icons/804.png";

const initialState = {
  city: [],
};


function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "CALL_API":
      let icono;
      const condition = action.payload.current.condition.code;
      if (condition === 1000) {
        icono = clear;
      } else if (condition === 1003) {
        icono = fewClouds;
      } else if (condition === 1009) {
        icono = overcastClouds;
      } else if (condition === 1006) {
        icono = scatteredClouds;
      } else if (condition === 1189) {
        icono = moderateRain;
      } else if (condition === 1663) {
        icono = lightRain;
      } else if (condition === 804) {
        icono = heavyRain;
      } else {
        icono = brokenClouds;
      }
      const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      };
      const name = removeAccents(action.payload.location.name);

      const info = { ...action.payload, icono, name };

      return {
        ...state,
        city: [...state.city, info],
      };

    case "CLOSE_CARD":
      const aux = state.city.filter((pais) => {
        return pais.location.tz_id !== action.payload;
      });

      return {
        ...state,
        city: aux,
      };

    default:
      return state;
  }
}

export default rootReducer;