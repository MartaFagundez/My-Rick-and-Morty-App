import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Detail.module.css";

export default function Detail(props) {

    const urlBase = "https://be-a-rym.up.railway.app/api";
    const apiKey = "f1eb8e685b6b.6e353b80c36825beb221";
    const [character, setCharacter] = React.useState({});
    const { charId } = useParams();
    const navigate = useNavigate();

    React.useEffect(() => {
        fetch(`${urlBase}/character/${charId}?key=${apiKey}`)
        .then(res => res.json())
        .then((data) => {
            setCharacter(data);
          })
        .catch(err=>console.log(err))
    }, [charId]);

    
    return (
        <div className={styles.detail}>
     
             <h2>{ character.name }</h2>
     
             <div className={styles.content}>
                 <figure>
                     <img  src={ character.image } alt={ character.name } />
                 </figure>
                 
                 <section className={ styles.info }>
                     <p>Status: <span>{ character.status}</span></p>
                     <p>Specie: <span>{ character.species}</span></p>
                     <p>Gender: <span>{ character.gender}</span></p>
                     <p>Origin: <span>{ character.origin?.name}</span></p>
                     <p>Location: <span>{ character.location?.name}</span></p>
                 </section>
             </div>
     
              <div className={ styles.nav }>
                 <button className={ styles.closeIcon } onClick={ () => navigate(-1) }>✖</button>
              </div>
        </div>
        );
   
}