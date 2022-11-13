import React from "react";
import {Route, Routes} from "react-router-dom";

import Home from "../components/pages/Home";

import Sobre from "../components/pages/Sobre";
import Alunos from "../components/pages/Alunos/Alunos";
import AdicionarAlunos from "../components/pages/Alunos/AdicionarAlunos";
import Turmas from "../components/pages/Turmas/Turmas";
import AdicionarTurmas from "../components/pages/Turmas/AdicionarTurmas";
import {AdicionarCursos} from "../components/pages/Cursos/AdicionarCursos";
import {Cursos} from "../components/pages/Cursos/Cursos";
import {EditarCursos} from "../components/pages/Cursos/EditarCursos";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/alunos" element={<Alunos/>}/>
            <Route path="/alunos/adicionar" element={<AdicionarAlunos/>}/>

            <Route path="/turmas" element={<Turmas/>}/>
            <Route path="/turmas/adicionar" element={<AdicionarTurmas/>}/>

            <Route path="/cursos" element={<Cursos/>}/>
            <Route path="/cursos/criar" element={<AdicionarCursos/>}/>
            <Route path="/cursos/:curso" element={<AdicionarCursos/>}/>
            <Route path="/cursos/:curso/editar" element={<EditarCursos/>}/>

            <Route path="/sobre" element={<Sobre/>}/>
        </Routes>
    )
}

export default MainRoutes;