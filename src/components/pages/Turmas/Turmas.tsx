import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {Container, Paper, Typography} from "@mui/material";
import TabelaCursos from "../../organisms/Tabelas/TabelaCursos/TabelaCursos";
import TabelaTurmas from "../../organisms/Tabelas/TabelaTurmas/TabelaTurmas";
import {CursoService} from "../../../services/CursoService";
import {TurmaService} from "../../../services/TurmaService";

const Turmas = () =>{

    const [turmas, setTurmas] = useState<[]>([]);
    const [cursos, setCursos] = useState<[]>([]);
    const [loading, setLoading] = useState(true);

    const handleLoadTurmas = async () => {
        setLoading(true);
        let turm = await TurmaService.index();
        setTurmas(turm.data);
    };

    const handleLoadCursos = async () => {
        setLoading(true);
        let cur = await CursoService.index();
        setCursos(cur.data);
        setLoading(false);
    };

    const handleRequests = async () => {

        handleLoadTurmas();
        handleLoadCursos();
    };

    useEffect(() => {
        handleRequests();
    }, []);

    return (
        <div>
            <Container>
                <Typography variant="h4" gutterBottom sx={{color: "#000000BE"}}>
                    Lista de turmas
                </Typography>
                <Paper elevation={12} sx={{overflow: 'hidden'}}>
                    <TabelaTurmas listTurmas={turmas} listCursos={cursos} loading={loading}/>
                </Paper>
            </Container>
        </div>
    );
}
export default Turmas;