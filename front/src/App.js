import React from 'react';
import {Routes, Route, useNavigate, Navigate} from "react-router-dom";
import './index.css';
import Layout from "./Layout";
import Cards from "./components/Cards";
import Detail from "./components/Detail";
import About from "./components/About";
import Form from "./components/Form";
import Favorites from './components/Favorites';


export default function App() {
    const navigate = useNavigate();
    let [ access, setAccess ] = React.useState(false);
    const username = "maria@email.com";
    const password = "123456";

    const login = (userData) => {
        if (userData.username === username && userData.password === password) {
            setAccess(true);
            navigate("/app")
        }
    }

    const logout = () => {
        setAccess(false);
    }

    React.useEffect(() => {
        !access && navigate('/');
     }, [access]);


    return (
        <Routes>
            {!access && 
            <Route path='/' element={<Form login={login} />} />}

            {access && 
            <Route path='/app' element={<Layout logout={logout}/>} >
                <Route index element={<Cards /> } />
                <Route path=':charId' element={<Detail />} />
                <Route path='favorites' >
                    <Route index element={<Favorites /> } />
                    <Route path=':charId' element={<Detail />} />   
                </Route>
                <Route path='about' element={<About />} />
                <Route path='*' element={<Navigate replace to="/" />} />
            </Route>
            }

        </Routes>
    );
}