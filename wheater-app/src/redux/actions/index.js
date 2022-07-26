const axios = require("axios");
const apiKey = process.env;

export function callApi(value) {
  return (dispatch) => {
    axios.get(`https://api.weatherapi.com/v1/current.json?key=c7242eed2c7f432dbbc150036222507&q=${value}&aqi=no`)
      .then((info) => {
        return dispatch({
          type: "CALL_API",
          payload: info.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function closeCard(id) {
  return {
    type: "CLOSE_CARD",
    payload: id,
  };
}