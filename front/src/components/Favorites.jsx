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

   const [ filter, setFilter] = React.useState("All");
   const [ order, setOrder ] = React.useState("Random");

   React.useEffect(() => {
      dispatch(filterCards(filter));
      dispatch(orderCards(order))

   }, [filter, order]);

   const handleFilter = (event) => {
      setFilter(event.target.value);
   }

   const handleOrder = (event) => {
      setOrder(event.target.value);
   }

   return (
      <div className={styles.container}>
         
         <div className={styles.controls}>

            <div className={styles.select}>
               <label htmlFor="order">Order by Name</label>
               <select name="order" id="order" onChange={handleOrder}>
                  <option value="Random">Random</option>
                  <option value="Ascending">Ascending</option>
                  <option value="Descending">Descending</option>
               </select>
            </div>

            <div className={styles.select}>
               <label htmlFor="filter">Filter by Gender</label>
               <select name="filter" id="filter" onChange={handleFilter}>
                  <option value="All">All</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Genderless">Genderless</option>
                  <option value="unknown">unknown</option>
               </select>
            </div>
         </div>

         <div className={styles.cards}>
            {
               myFavorites.map((character) => 
                  <Card 
                  key={character.id} id={character.id} 
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