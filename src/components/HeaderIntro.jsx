import React from "react";
import styles from "./HeaderIntro.module.css";
import CardsControl from "./CardsControl";


export default function HeaderIntro(props) {

    return (
        <div className={styles.headerIntro}>
              
              <div className={styles.title}>
                  <h1>Rick and Morty App</h1>
                  <p>Para crear la carta de uno de los personajes, ingresa su id y da click en el botón "Agregar"</p>
              </div>

              <CardsControl onSearch={props.onSearch} onClear={props.onClear} />
        </div>
    );
}