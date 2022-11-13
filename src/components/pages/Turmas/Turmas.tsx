import React, {useEffect, useState} from 'react';
import {Breadcrumbs, Button, Container, Paper, Typography} from "@mui/material";
import TabelaTurmas from "../../organisms/Tabelas/TabelaTurmas/TabelaTurmas";
import {CursoService} from "../../../services/CursoService";
import {TurmaService} from "../../../services/TurmaService";
import {Link} from "react-router-dom";

const Turmas = () => {

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
        await handleLoadTurmas();
        await handleLoadCursos();
    };

    useEffect(() => {
        handleRequests().then(() => {
        });
    }, []);

    return (
        <div>
            <Container>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link to="/" className="item-menu" color={'primary'}>
                        <Typography color="text.primary">Dashboard</Typography>
                    </Link>
                    <Typography color="text.primary">Turmas</Typography>
                </Breadcrumbs>
                <Typography variant="h4" gutterBottom sx={{color: "#000000BE"}}>
                    Lista de turmas
                </Typography>
                <Link to="/turmas/criar" className="item-menu">
                    <Button variant="contained" sx={{mb: 3}}>Criar turma</Button>
                </Link>
                <Paper elevation={12} sx={{overflow: 'hidden'}}>
                    <TabelaTurmas listTurmas={turmas} listCursos={cursos} loading={loading}/>
                </Paper>
            </Container>
        </div>
    );
}
export default Turmas;