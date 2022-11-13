import React, {useEffect, useState} from 'react';
import {Button, Container, Paper, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {CursoService} from "../../../services/CursoService";
import TabelaCursos from "../../organisms/Tabelas/TabelaCursos/TabelaCursos";

export const Cursos = () => {


    const [cursos, setCursos] = useState<[]>([]);
    const [loading, setLoading] = useState(true);

    const handleLoadCursos = async () => {
        setLoading(true);
        let cur = await CursoService.index();
        setCursos(cur.data);
        setLoading(false);
    };


    useEffect(() => {
        handleLoadCursos().then(r => {return r});
    }, []);


    return (
        <>
            <Container>
                <Typography variant="h4" gutterBottom sx={{color: "#000000BE"}}>
                    Lista de cursos
                </Typography>
                <Link to="/cursos/criar" className="item-menu" >
                    <Button variant="contained" sx={{mb:3}}>Criar curso</Button>
                </Link>
                <Paper elevation={12} sx={{overflow: 'hidden'}}>
                    <TabelaCursos listCursos={cursos} loading={loading}/>
                </Paper>
            </Container>
        </>
    );
}