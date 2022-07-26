import React, {useEffect} from 'react';
import { useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import Card from "../Card/Card";
import style from './home.module.css';


export default function Home() {
  const { city } = useSelector((state) => {
    return state;
  });

  let array = [];
  let array2 = [];
  for (let i = 0; i < city.length; i++) {
    if (!array2.includes(city[i].location.name)) {
      array2.push(city[i].location.name);
      array.push(city[i]);
    }
  }

  return (
    <div className={style.container}>
      <SearchBar/>
      <div className={style.card}>
        {array.length > 0 &&
          array.map((el) => (
            <div key={el.location.name}>
              <Card data={el}/>
            </div>
          ))}
      </div>
    </div>
  );
}