import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Detail.module.css";

export default function Detail(props) {

    const [character, setCharacter] = React.useState({});
    const [loading, setLoading] = React.useState(false);
    const { charId } = useParams();
    const navigate = useNavigate();

    React.useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:3001/rickandmorty/detail/${charId}`)
        .then(res => res.json())
        .then((data) => {
            setCharacter(data);
            setLoading(false);
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
            
            <div className={loading ? styles.mask : styles.hidden}>
                {/* <div className={styles.spinner}></div> */}
            </div>
        </div>
        );
   
}