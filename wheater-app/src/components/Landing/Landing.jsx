import React from "react";
import { Link } from "react-router-dom";
import style from './landing.module.css';

export default function Landing(){
    return(
        <div className={style.container}>
            <div className={style.containerP}>
            <p className={style.p}>"If you want to see the sunshine, you have to weather the storm"</p>
            </div>
            <Link to= '/home'>
            <button className={style.btn}>Ingresar</button>
            </Link>
        </div>
    )
}