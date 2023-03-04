import React from 'react';
import perfil from '../imgs/rm_profile.png';
import styles from "./About.module.css";

export default function About() {

   return (
   <div className={styles.about}>

        <h2>Marta Fagúndez</h2>

        <div className={styles.content}>
            <figure>
                <img  src={perfil} alt="Dibujo de programadora codeando." />
            </figure>
            
            <section className={ styles.info }>
                <p><a href="https://www.linkedin.com/in/martafagundezrodriguez/" target="_blank" rel="noreferrer" className={styles.link} >Linkedin</a></p>
                <p><a href="https://github.com/MartaFagundez" target="_blank" rel="noreferrer" className={styles.link} >GitHub</a></p>
                <p><a href="https://martafagundez.com/" target="_blank" rel="noreferrer" className={styles.link} >Website</a></p>
            </section>
        </div>
   </div>
   );
   
}