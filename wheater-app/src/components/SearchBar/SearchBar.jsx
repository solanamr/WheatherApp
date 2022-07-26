import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { callApi } from "../../redux/actions/index";
import style from './search.module.css';


export default function SearchBar() {
  const dispatch = useDispatch();

  const { city } = useSelector((state) => {
    return state;
  });

  let arr = [];
  for (let i = 0; i < city.length; i++) {
    arr.push(city[i].name);
  }

  const [aux, setAux] = useState(false);

  const [input, setInput] = useState("");

  function handleInput(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  function handleCloseModal(e) {
    e.preventDefault();
     setAux(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (input.length === 0 || city.length > 5 || arr.includes(e.target.value) || arr.includes(e.target.value.toLowerCase())) {
      setAux(true);
    } else {
      dispatch(callApi(input));
      setInput("");
    }
  }

  return (
    <div className={style.contenedor}>
      <h2 className={style.h3}>Podes buscar hasta 6 ciudades</h2>
      <div>
        <input className={style.input} onChange={(e) => handleInput(e)} value={input} type="search" placeholder="Ciudad"></input>
        <button onClick={(e) => handleSubmit(e)}type="submit" className={style.btnBuscar}>Buscar</button>
      </div>
      <h1>Ciudades</h1>
      <dialog open={aux}>
        <div>
          <header>
            <h3>Error</h3>
            <p>Superaste el límite de búsquedas</p>
            <button onClick={(e) => handleCloseModal(e)}>X</button>
          </header>
        </div>
      </dialog>

      <Link to="/">
        <button className={style.btnVolver}>Volver</button>
      </Link>
    </div>
  );
}