import React from "react";
import styles from "./Form.module.css";
import validation from "./validation";

export default function Form (props) {

    const [userData, setUserdata] = React.useState({
        username: "",
        password: ""
      });
    
      const [errors, setErrors] = React.useState({
        username: "",
        password: ""
      });
    
      const handleChange = evento => {
        setUserdata({...userData, [evento.target.name]: evento.target.value});
    
        setErrors(
          validation({...userData, [evento.target.name]: evento.target.value})
        );
      }
    
      const handleSubmit = (evento) => {
        evento.preventDefault();
        props.login(userData);
      }


    return (
        <main className={styles.formMain}>
            <div className={styles.formContainer}>
                <h1>Rick and Morty<br />Card Game</h1>
                
                <form className={styles.form} action="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username" className={styles.hidden} >Username: </label>
                        <input type="text" name="username" placeholder="Your email" value={userData.username} onChange={handleChange} className={errors.username && styles.warning} />
                        {errors.username && <p className={styles.danger}>{errors.username}</p>}
                    </div>
                    
                    <div>
                        <label htmlFor="password" className={styles.hidden} >Password</label>
                        <input type="password" name="password" placeholder="Your password" value={userData.password} onChange={handleChange} className={errors.password && styles.warning} />
                        {errors.password && <p className={styles.danger}>{errors.password}</p>}
                    </div>

                    <button onSubmit={handleSubmit}>LOGIN</button>
                </form>
        
            </div>

            <h3>Made with ❤ by  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className={styles.link} > Marta Fagúndez</a> </h3>
            
        </main>
    );
}