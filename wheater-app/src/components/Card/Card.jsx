import React from "react";
import { useDispatch } from "react-redux";
import { closeCard } from "../../redux/actions/index";

export default function Card({ data }) {
  const dispatch = useDispatch();

  function handleClose(e) {
    e.preventDefault();
    dispatch(closeCard(e.target.value));
  }

  return (
    <div>
      <button value={data.location.tz_id} onClick={(e) => handleClose(e)}>X</button>
      <div>
        <h1>{data.location.name}</h1>
        <h4>Temperatura: {data.current.temp_c}°C</h4>
        <h4>Viento: {data.current.wind_kph} km/h</h4>
      </div>
      <div>
        <img src={data.icono} alt="" />
      </div>
    </div>
  );
}
