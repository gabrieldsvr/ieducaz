import React from 'react';
import MainRoutes from "./routes/MainRoutes";
import {Route, Routes, useRoutes} from 'react-router-dom';
import Home from "./components/pages/Home";
import Sobre from "./components/pages/Sobre";
import {Header} from "./components/organisms/Header/Header";

const App = () => {

    return (
        <>
            <Header/>
            <MainRoutes/>
        </>
    );
}
export default App;