import React from "react";
import { useDispatch } from "react-redux";
import { closeCard } from "../../redux/actions/index";
import style from './card.module.css';

export default function Card({ data }) {
  const dispatch = useDispatch();

  function handleClose(e) {
    e.preventDefault();
    dispatch(closeCard(e.target.value));
  }

  return (
    <div className={style.container}> {/*padre */}
      <div className={style.box}> {/*contenedor de todo */}
        <div className={style.data}>{/*contenedor de la informacion */}
          <button value={data.location.tz_id} onClick={(e) => handleClose(e)} className={style.btn}>X</button>
          <h1>{data.location.name}</h1>
          <h4>Temperatura: {data.current.temp_c}°C</h4>
          <h4>Viento: {data.current.wind_kph} km/h</h4>
          <img src={data.icono} alt="" className={style.img} />
        </div>
      </div>
    </div>
  );
}
