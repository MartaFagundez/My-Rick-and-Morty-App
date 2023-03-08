import React from "react";
import styles from './CardsControl.module.css';

export default function CardsControl(props) {

   const [characterId, setCharacterId] = React.useState(1);
   const maxId = 826;
   let randomId = 1;

   const handleInputChange = (evento) => {
      setCharacterId(evento.target.value);
   }

   const generateRandomId = () => { 
      const num =  Math.floor(Math.random() * (maxId - 1) + 1);
      randomId = num;
      setCharacterId(num);
   }

   const sendRandomId = () => {
      generateRandomId();
      props.onSearch(randomId);
   }


   return (
      <div className={styles.cardsControl}>
         <input type='search' name='search' id='search' placeholder="id" onChange={handleInputChange}/>
         <button className={styles.buttonCyan} onClick={() => props.onSearch(characterId)} >Search</button>
         <button className={styles.buttonCyan} onClick={() => sendRandomId()} >Create random</button>
         <button className={styles.buttonCyan} onClick={() => props.onClear() }>Clear</button>
      </div>
   );
}