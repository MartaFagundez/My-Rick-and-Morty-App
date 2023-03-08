import React from 'react';
import { useOutletContext } from "react-router-dom";
import Card from './Card.jsx';
import CardsControl from './CardsControl.jsx';
import styles from "./Cards.module.css";


export default function Cards() {
   const [ characters, onClose, onSearch, onClear ]  = useOutletContext();

   return (
      <div className={styles.container}>
         <CardsControl onSearch={onSearch} onClear={onClear} />
         
         <div className={styles.cards}>
            {
               characters.map((character, index) => 
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