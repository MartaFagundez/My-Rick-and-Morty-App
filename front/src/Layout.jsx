import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import logo from './imgs/headerImg.png';
import "./index.css";
import styles from "./Layout.module.css";


export default function Layout(props) {

    const [characters, setCharacters] = React.useState([]);
    const [title, setTitle] = React.useState("Rick and Morty App");
    const [subtitle, setSubtitle] = React.useState("Create cards with a random character or enter a number from 1 to 826 and click the Search button.");
    let { pathname } = useLocation();

    React.useEffect(() => {
        switch (pathname) {
            case "/app/about":
                setTitle("About Me");
                setSubtitle("I am passionate about creating efficient, beautiful software that provides valuable solutions for people.");
                break;
            case "/app/favorites":
                setTitle("Favorites");
                setSubtitle("Your collection of cards with your favorite characters. Keep looking until you find them all!");
                break;    
            default:
                setTitle("Rick and Morty App");
                setSubtitle("Create cards with a random character or enter a number from 1 to 826 and click the Search button.");
                break;
        }
    }, [pathname]);

    const onSearch = (characterId) => {
        fetch(`http://localhost:3001/rickandmorty/onsearch/${characterId}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.id) {
                if (!(exists(data.id))) {
                setCharacters((oldChars) => [...oldChars, data]);
                } else {
                window.alert(`Ya existe una tarjeta con ese personaje, su nombre es ${data.name}.`);
                }
                
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
    }

    const onClose = characterId => {
        setCharacters(characters.filter(character => character["id"] !== characterId ));
    }

    const onClear = () => {
        setCharacters([]);
    }

    const exists = (characterId) => {
        const isFound = characters.some(character => {
            if (character["id"] === characterId) return true;
            return false;
        });

        return isFound ? true : false;
    };

    const checkActive = (status) => status ? `${styles.navLink} ${styles.active}` : `${styles.navLink} ${styles.inactive}`;


    return (

        <main className={styles.main}>
            <div className={styles.container}>
                <section className={styles.header}>
                    <nav className={styles.nav}>
                        <ul>
                            <li>
                                <NavLink to="/app" className={({isActive}) => checkActive(isActive)} end>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/app/favorites" className={({isActive}) => checkActive(isActive)} >Favorites</NavLink>
                            </li>
                            <li>
                                <NavLink to="/app/about" className={({isActive}) => checkActive(isActive)} >About</NavLink>
                            </li>
                            <li onClick={props.logout}>
                                <NavLink to="/" className={({isActive}) => checkActive(isActive) } >Logout</NavLink>
                            </li>
                        </ul>
                    </nav>
                    
                    <div className={styles.hero}>
                        <figure className={styles.logo}>
                            <img src={logo} alt="Rick and Morty coming out of the portal" />
                        </figure>

                        <div className={styles.title}>
                            <h1>{title}</h1>
                            <p>{subtitle}</p>
                        </div>

                    </div>

                </section>

                <section className={styles.content}>
                    <Outlet context={[characters, onClose, onSearch, onClear]}/>
                </section>

            </div>

        </main>
    );
}