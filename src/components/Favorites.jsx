import React from 'react';
import { useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from './Card.jsx';
import CardsControl from './CardsControl.jsx';
import styles from "./Favorites.module.css";


export default function Favorites() {
   const [ onClose, onSearch, onClear ]  = useOutletContext();
   const myFavorites = useSelector((state) => state.myFavorites);

   return (
      <div className={styles.container}>
         
         <div className={styles.cards}>
            {
               myFavorites.map((character, index) => 
                  <Card 
                  key={index} id={character.id} 
                  name={character.name}
                  species={character.species}
                  gender={character.gender}
                  image={character.image}
                  onClose={() => onClose(character.id)}/>
               )
            }
         </div>;

      </div>
   );
   
}