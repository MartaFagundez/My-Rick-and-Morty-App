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
                <p>Linkedin: <span>miperfildelinkedin</span></p>
                <p>Github: <span>miperfildelinkedin</span></p>
                <p>Website: <span>miperfildelinkedin</span></p>
            </section>
        </div>
   </div>
   );
   
}