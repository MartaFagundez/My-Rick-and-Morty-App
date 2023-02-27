import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card(props) {

   const navigate = useNavigate();

   return (
      <div className={ styles.card }>

         <figure>
            <img  src={ props.image } alt={ props.name } />
         </figure>
         
         <section className={ styles.info }>
            <h2>{ props.name }</h2>
            <p>Specie: <span>{ props.species }</span></p>
            <p>Gender: <span>{ props.gender }</span></p>
         </section>

         <div className={ styles.nav }>
            <button className={ styles.favIcon } >❤</button>
            <button className={ styles.moreInfoIcon } onClick={ () => navigate(`${props.id}`)}>✚</button>
            <button className={ styles.closeIcon } onClick={ props.onClose }>✖</button>
         </div>
         
      </div>
   );
}
