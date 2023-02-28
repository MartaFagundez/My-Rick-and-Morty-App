import React from 'react';
import {Routes, Route, useNavigate, Navigate} from "react-router-dom";
import './index.css';
import Layout from "./Layout";
import Cards from "./components/Cards";
import Detail from "./components/Detail";
import About from "./components/About";
import Form from "./components/Form";


export default function App() {
    const navigate = useNavigate();
    let [ access, setAccess ] = React.useState(false);
    const username = "maria.perez@miemail.com";
    const password = "1234";

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
                <Route path='favorites' element={<Cards />} />
                <Route path='about' element={<About />} />
                <Route path='*' element={<Navigate replace to="/" />} />
            </Route>
            }

        </Routes>
    );
}