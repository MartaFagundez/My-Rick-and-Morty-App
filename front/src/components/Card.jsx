import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { agregarFavorito, eliminarFavorito } from "../redux/actions";
import styles from "./Card.module.css";

export default function Card(props) {

   const dispatch = useDispatch();
   const navigate = useNavigate();
   const myFavorites = useSelector((state) => state.myFavorites);
   const [ isFav, setIsFav ] = useState(false);

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = (event) => {
      // Si el personaje está en favoritos...
      if (isFav) {
         setIsFav(false);
         dispatch(eliminarFavorito(props.id));
      }
      else {
         setIsFav(true);
         dispatch(agregarFavorito(props));
      }
   }

   return (
      <div className={ styles.card }>

         <figure>
            <img  src={ props.image } alt={ props.name }  onClick={ () => navigate(`./${props.id}`)} />
         </figure>
         
         <section className={ styles.info }>
            <h2>{ props.name }</h2>
            <p>Specie: <span>{ props.species }</span></p>
            <p>Gender: <span>{ props.gender }</span></p>
         </section>

         <div className={ styles.nav }>
            {
               isFav ? <button className={`${styles.favIcon} ${styles.isFav}`} onClick={handleFavorite} >❤</button> 
                     : <button className={ styles.favIcon } onClick={handleFavorite} >❤</button>
            }
            <button className={ styles.moreInfoIcon } onClick={ () => navigate(`./${props.id}`)}>✚</button>
            <button className={ styles.closeIcon } onClick={ props.onClose }>✖</button>
         </div>
         
      </div>
   );
}
