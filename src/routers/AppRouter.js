import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BuscarPers from '../components/BuscarPers';
import CardPersonaje from '../components/CardPersonaje';
import Navbar from '../components/Navbar';
import { url } from '../helpers/url';

const AppRouter = () => {

    const [personale, setpersonale] = useState([]);

    const peticion = async () => {
        const resp = await fetch(url)
        const data = await resp.json()
        setpersonale(data.results)
    }

    useEffect(() => {

        peticion()

    }, []);

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<CardPersonaje datos={personale} />} />
                <Route path="/Buscar" element={<BuscarPers datos={personale} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
