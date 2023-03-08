import React from 'react';
import { useOutletContext } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../redux/actions";
import Card from './Card.jsx';
import CardsControl from './CardsControl.jsx';
import styles from "./Favorites.module.css";


export default function Favorites() {
   const [ onClose, onSearch, onClear ]  = useOutletContext();
   const myFavorites = useSelector((state) => state.myFavorites);
   const dispatch = useDispatch();

   const handleFilter = (event) => {
      dispatch(filterCards(event.target.value))
   }

   const handleOrder = (event) => {
      dispatch(orderCards(event.target.value))
   }

   return (
      <div className={styles.container}>
         
         <div>
            <select name="order" id="order" onChange={handleOrder}>
               <option value="Random">Random</option>
               <option value="Ascendente">Ascendente</option>
               <option value="Descendente">Descendente</option>
            </select>

            <select name="filter" id="filter" onChange={handleFilter}>
               <option value="All">All</option>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Genderless">Genderless</option>
               <option value="unknown">unknown</option>
            </select>
         </div>

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